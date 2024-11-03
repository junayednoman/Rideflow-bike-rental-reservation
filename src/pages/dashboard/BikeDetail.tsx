import RForm from "@/components/form/RForm";
import RTimePicker from "@/components/form/RTimePicker";
import FeaturedItems from "@/components/layout/sections/home/FeaturedItems";
import RButtonSmall from "@/components/layout/ui/RButtonSmall";
import RNoData from "@/components/layout/ui/RNoData";
import RSpinner from "@/components/layout/ui/RSpinner";
import RStarRating from "@/components/layout/ui/RStarRating";
import { useGetMyProfileQuery } from "@/redux/api/auth/authApi";
import { useGetSingleBikeQuery } from "@/redux/api/bikeApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { Modal } from "antd";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { z } from "zod";
const schema = z.object({
  startTime: z.unknown().refine((value) => value, {
    message: "Start Time is required",
  }),
});

const BikeDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { data: profileData } = useGetMyProfileQuery(undefined);
  const { bikeId } = useParams();
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const showBookingModal = () => {
    setIsBookingModalOpen(true);
  };

  const handleBookingModalCancel = () => {
    setIsBookingModalOpen(false);
  };

  const { data, isFetching } = useGetSingleBikeQuery(bikeId);
  if (isFetching) {
    return <RSpinner mgT="120" />;
  }
  const bikeData = data?.data;
  const {
    name,
    image,
    pricePerHour,
    cc,
    brand,
    model,
    year,
    description,
    isAvailable,
    _id,
  } = bikeData;

  // handle book a bike
  const handleBook: SubmitHandler<FieldValues> = (data) => {
    const bookingData = {
      startTime: data?.startTime?.format("HH:mm"),
      userId: profileData?.data?._id,
      bikeId: _id,
    };
    navigate("/dashboard/user/payment", { state: { bookingData, bikeData } });
  };

  return (
    <main
      className={`${
        !location?.pathname?.includes("dashboard") && "md:pt-24 pt-14"
      }`}
    >
      <section>
        <Helmet>
          <title>{bikeData?.name} - Rideflow</title>
        </Helmet>
        {bikeData ? (
          <div
            className={`${
              !location?.pathname?.includes("dashboard") &&
              "xl:max-w-[1350px] lg:max-w-5xl md:max-w-[768px] sm:max-w-[640px] xl:px-4 md:mx-auto lg:px-6 sm:mx-auto sm:px-4 px-3"
            }`}
          >
            <div
              className={`flex ${
                location?.pathname?.includes("dashboard")
                  ? "xl:flex-row flex-col"
                  : "lg:flex-row flex-col"
              } lg:gap-14 gap-8 dark:text-gray-300 ${
                !location?.pathname?.includes("dashboard") && "mt-24"
              }`}
            >
              <div>
                <img className="md:w-[500px]" src={image} alt="" />
              </div>
              <div className="md:space-y-6 space-y-4 md:w-[500px]">
                <h3 className="md:text-4xl text-[27px] font-semibold capitalize ">
                  {name}
                </h3>
                {/* showing rating */}
                <div className="flex items-center gap-2">
                  <RStarRating value={4.6} />
                  <p className="text-sm text-gray-400">(32 reviews)</p>
                </div>
                {/* product price */}
                <h3 className="md:text-5xl text-3xl font-semibold text-primaryColor dark:text-gray-300">
                  ${pricePerHour}
                </h3>
                {/* <div className="md:py-2 flex md:flex-row flex-col md:items-center gap-3">
            <h3 className="md:text-5xl text-3xl font-semibold text-primaryColor">
              ${discount ? calculateDiscount(price, discount) : price}
            </h3>
            {discount > 0 && (
              <div className="md:block hidden">
                <p className="text-sm">{discount}% Off</p>
                <p className="line-through font-semibold text-gray-500">
                  ${price}
                </p>
              </div>
            )}
          </div> */}
                {/* description */}

                {/* other info */}
                <div className="space-y-2">
                  <p>
                    <strong>Engine: </strong>
                    {cc} CC
                  </p>
                  <p>
                    <strong>Model: </strong>
                    {model}({year})
                  </p>
                  <p>
                    <strong>Brand: </strong>
                    {brand}
                  </p>
                  <p>
                    <strong>Availability: </strong>
                    {isAvailable ? "Available" : "Unavailable"}
                  </p>
                </div>
                <RButtonSmall
                  tooltipTxt={isAvailable ? "" : "This bike is unavailable"}
                  onClick={showBookingModal}
                  disabled={!isAvailable}
                >
                  Book now
                </RButtonSmall>
              </div>
            </div>
            <div className="md:mt-12 mt-8">
              <p>{description}</p>
            </div>
          </div>
        ) : (
          <RNoData />
        )}
        {/* handle book now with modal */}
        <div>
          <Modal
            footer={null}
            title="Start adventure!"
            open={isBookingModalOpen}
            onCancel={handleBookingModalCancel}
          >
            <div>
              <RForm
                resolver={zodResolver(schema)}
                handleFormSubmit={handleBook}
              >
                <RTimePicker
                  label="Start Time*"
                  name="startTime"
                  placeholder=""
                />
                <RButtonSmall type="submit">Submit</RButtonSmall>
              </RForm>
            </div>
          </Modal>
        </div>
      </section>
      <section
        className={`${
          location?.pathname?.includes("dashboard") ? "hidden" : "block"
        }`}
      >
        <FeaturedItems limit={3} />
      </section>
    </main>
  );
};

export default BikeDetail;

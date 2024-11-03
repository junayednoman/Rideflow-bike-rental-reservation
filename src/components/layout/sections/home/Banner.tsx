import bikeVideo from "@/assets/images/motorbike.mp4";
import bannerImg from "@/assets/images/mototr bike bg.jpg";
import RButtonWhite from "@/components/layout/ui/RButtonWhite";
import RForm from "@/components/form/RForm";
import RInput from "@/components/form/RInput";
import RDatePicker from "@/components/form/RDatePicker";
import { Row } from "antd";
import RButtonSmall from "../../ui/RButtonSmall";

const Banner = () => {
  const handleSearchProduct = () => {
    // console.log("search product");
  };
  return (
    <section className="relative md:h-screen overflow-hidden text-center">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        className="absolute top-1/2 left-1/2 min-w-full min-h-full transform -translate-x-1/2 -translate-y-1/2 xl:block hidden"
      >
        <source src={bikeVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <img
        src={bannerImg}
        className="absolute top-1/2 left-1/2 min-w-full min-h-full transform -translate-x-1/2 -translate-y-1/2 xl:hidden block"
      />

      {/* Overlay (Optional for darkening the video) */}
      <div className="absolute h-full w-full bg-primaryColor bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white md:py-0 pt-32 xl:max-w-[1350px] lg:max-w-5xl md:max-w-[768px] sm:max-w-[640px] xl:px-4 md:mx-auto lg:px-6 sm:mx-auto sm:px-4 px-3">
        <h1 className="xl:text-[80px] xl:leading-[120px] md:text-6xl text-[42px] md:leading-[80px] font-bold">
          Find the Perfect Bike for Your Next Adventure Today
        </h1>
        <p className="md:text-xl md:mt-8 md:mb-12 my-6">
          Rent a bike in minutes and explore the city with ease. Simple, fast,
          and eco-friendly.
        </p>
        <RButtonWhite>Start Riding</RButtonWhite>
        <div className="bg-white dark:bg-primaryColor z-[9999] p-6 px-10 lg:w-[1000px] md:absolute bottom-0 md:mt-0 mt-14">
          <RForm handleFormSubmit={handleSearchProduct}>
            <div className="grid md:grid-cols-4 grid-cols-1 items-center md:gap-4 gap-y-4">
              <div className="col-span-3 mt-4">
                <Row gutter={15}>
                  <RInput
                    colSpanLg={12}
                    name="name"
                    placeholder="Enter product name"
                  />
                  {/* <input type="text" className="border " /> */}
                  <RDatePicker colSpanLg={12} name="date" />
                </Row>
              </div>
              <div>
                <RButtonSmall wFull={true}>Search</RButtonSmall>
              </div>
            </div>
          </RForm>
        </div>
      </div>
    </section>
  );
};

export default Banner;

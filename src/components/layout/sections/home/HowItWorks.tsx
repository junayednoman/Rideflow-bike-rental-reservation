import RSectionTitle from "@/components/layout/ui/RSectionTitle";
import RContainer from "../../RContainer";
import howItWorks from "@/assets/images/bike.jpg";

const HowItWorks = () => {
  return (
    <section
      style={{ backgroundImage: `url(${howItWorks})` }}
      className="bg-center bg-cover bg-no-repeat"
    >
      <div className="bg-black bg-opacity-40 md:py-24 py-16">
        <RContainer>
          <div className="">
            <div className="col-span-2">
              <RSectionTitle
                color="#fff"
                heading="How It Works"
                subHeading="Renting a Bike is Easy and Fast"
              />
            </div>
            <div className="grid md:grid-cols-3 gap-6 xl:w-[1024px] md:w-full sm:w-[80%] w-[85%] mx-auto">
              <div className="p-6 border bg-white hover:bg-primaryColor hover:text-white hover:border-primaryColor duration-300 cursor-pointer">
                <span className="text-4xl">1️.</span>
                <h5 className="mt-2 text-lg font-medium uppercase mb-1">
                  Choose Your Bike
                </h5>
                <p className="text-sm">
                  Browse our wide selection of bikes and pick the one that suits
                  your needs.
                </p>
              </div>
              <div className="p-6 border bg-white hover:bg-primaryColor hover:text-white hover:border-primaryColor duration-300 cursor-pointer">
                <span className="text-4xl">2.</span>
                <h5 className="mt-2 text-lg font-medium uppercase mb-1">
                  Book Online
                </h5>
                <p className="text-sm">
                  Reserve your bike in just a few clicks. Select the starting
                  date of your rental.
                </p>
              </div>
              <div className="p-6 border bg-white hover:bg-primaryColor hover:text-white hover:border-primaryColor duration-300 cursor-pointer">
                <span className="text-4xl">3.</span>
                <h5 className="mt-2 text-lg font-medium uppercase mb-1">
                  Ride & Enjoy
                </h5>
                <p className="text-sm">
                  Pick up your bike and hit the road! Enjoy your ride with our
                  well-maintained bikes.
                </p>
              </div>
            </div>
          </div>
        </RContainer>
      </div>
    </section>
  );
};

export default HowItWorks;

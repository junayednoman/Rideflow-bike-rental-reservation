import RButton from "@/components/layout/ui/RButton";
import promo_1 from "../../../../assets/images/promo-bike.jpg";
import promo_2 from "../../../../assets/images/promo-bike-2.jpg";

const Promo = () => {
  return (
    <section>
      <div className="grid xl:grid-cols-2 items-center">
        {/* Promo Item 1 */}
        <div className="overflow-hidden">
          <div
            style={{
              backgroundImage: `url(${promo_1})`,
            }}
            className="bg-cover bg-center text-white cursor-pointer"
          >
            <div className="bg-black bg-opacity-25 md:p-20 py-12 lg:px-24 md:px-16 px-8 flex flex-col justify-end promoContent xl:min-h-[600px]">
              <h2 className="sm:text-4xl uppercase text-3xl font-bold">
                Get 20% Off Your First Ride!
              </h2>
              <p className="lg:mb-12 mb-8 mt-3 sm:text-base text-sm">
                Are you new to our bike rental service? We’ve got a special
                offer just for you! Use the code FIRST20 at checkout to enjoy a
                20% discount on your very first rental. Whether you’re planning
                a quick ride around town or a full-day adventure, this offer
                will help you get started without breaking the bank. Don’t miss
                out—start your journey with us today!
              </p>
              <div>
                <RButton>Claim Now</RButton>
              </div>
            </div>
          </div>
        </div>

        {/* Promo Item 2 */}
        <div
          style={{
            backgroundImage: `url(${promo_2})`,
          }}
          className="overflow-hidden xl:block hidden bg-no-repeat bg-cover bg-center"
        >
          <div className=" text-white cursor-pointer">
            <div className="bg-black bg-opacity-25 p-20 px-24 flex flex-col justify-end promoContent xl:min-h-[600px]">
              <h2 className="text-4xl uppercase font-bold">
                Summer Special: 30% Off All
              </h2>
              <p className="mb-12 mt-3">
                Summer is here, and it’s the perfect time to explore the city on
                two wheels. To celebrate, we’re offering a massive 30% discount
                on all bike rentals. No coupon code is required—just choose your
                bike and the discount will be automatically applied at checkout.
                Whether it’s a scenic ride through the park or a commute to work
              </p>
              <div>
                <RButton>Explore Now</RButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promo;

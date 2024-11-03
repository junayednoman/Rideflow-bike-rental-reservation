import { Carousel } from "antd";
import RContainer from "../../RContainer";
import { QuoteIcon } from "lucide-react";
import { testimonials } from "@/constant";
import testiImage from "@/assets/images/testi.jpg";

const Testimonial = () => {
  return (
    <section
      style={{ backgroundImage: `url(${testiImage})` }}
      className=" bg-cover bg-center bg-no-repeat testimonial"
    >
      <div className="lg:py-32 md:py-24 py-16 bg-black bg-opacity-25">
        <RContainer>
          <Carousel
            autoplay
            lazyLoad="progressive"
            draggable
            className="text-center"
          >
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="text-white text-center  max-w-[900px] mx-auto md:pb-12 pb-8"
              >
                <QuoteIcon className="text-center mx-auto" size={50} />
                <p className="italic text-center md:text-lg text-base mt-6">
                  "{item.text}"
                </p>
                <h5 className="md:text-lg font-semibold mt-10 uppercase">
                  {item.name}
                </h5>
                <span className="font-medium text-secondaryColor uppercase md:text-base text-sm">
                  {item.designation}
                </span>
              </div>
            ))}
          </Carousel>
        </RContainer>
      </div>
    </section>
  );
};

export default Testimonial;

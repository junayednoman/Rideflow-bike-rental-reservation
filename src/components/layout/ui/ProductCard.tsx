import { Eye, Heart, SlidersHorizontal } from "lucide-react";
import RButtonSmall from "./RButtonSmall";
import { useNavigate } from "react-router-dom";

type TProductCard = {
  details: {
    name: string;
    brand: string;
    image: string;
    _id: string;
    pricePerHour: number;
  };
};
const ProductCard = ({ details }: TProductCard) => {
  const navigate = useNavigate();
  const handleGoToBikeDetails = (_id: string) => {
    return navigate(`/bikes/${_id}`, {
      replace: true,
      state: {
        targetUrl: `/dashboard/user/bikes/${_id}`,
        message: "Please login to visit the product details page",
      },
    });
  };
  const { name, brand, image, _id, pricePerHour } = details;
  return (
    <div className="text-center cursor-pointer rCard mb-24 dark:bg-primaryColor">
      <div>
        <div className="relative">
          <div className="overflow-hidden relative">
            <img
              className="hover:scale-105 duration-1000"
              src={image}
              alt="product"
            />

            <span className="text-sm absolute top-5 left-6 py-[2px] px-2 rounded-sm bg-accentColor text-white">
              {brand}
            </span>
          </div>
          <div className="flex flex-col gap-2 absolute top-3 right-0 opacity-0 duration-[400ms] cardIcons">
            <span className="p-2 bg-white text-primaryColor hover:bg-primaryColor hover:text-white duration-200 rounded-full inline-block">
              <Heart size={17} />
            </span>
            <span className="p-2 bg-white text-primaryColor hover:bg-primaryColor hover:text-white duration-200 rounded-full inline-block">
              <Eye size={17} />
            </span>
            <span className="p-2 bg-white text-primaryColor hover:bg-primaryColor hover:text-white duration-200 rounded-full inline-block">
              <SlidersHorizontal size={17} />
            </span>
          </div>
        </div>
        <div className="relative">
          <div className="bg-white dark:bg-primaryColor pt-5 absolute -bottom-18 w-full z-50 ">
            <h5 className="text-lg font-semibold mb-1 dark:text-secondaryColor">
              {name}
            </h5>
            <h5 className="text-base font-semibold mb-1  text-[#f7ba59]">
              ${pricePerHour} (hr)
            </h5>
          </div>
          <div className="absolute top-0 cardBtn duration-[400ms] z-0 opacity-0 w-full">
            <RButtonSmall onClick={() => handleGoToBikeDetails(_id)}>
              View Details
            </RButtonSmall>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

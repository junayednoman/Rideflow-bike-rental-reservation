import { Button } from "antd";
type RButtonProps = {
  children: string;
  size?: "large" | "middle" | "small";
  link?: string;
  onClick?: any;
  className?: string;
};
const RButtonSmallWhite = ({
  children,
  size,
  link,
  onClick,
  className,
}: RButtonProps) => {
  return (
    <Button
      onClick={onClick}
      type="link"
      href={link}
      className={`RButtonWhite bg-accentColor border-accentColor border-2 text-white font-medium hover:text-primaryColor rounded-none px-6 py-5 ${className}`}
      size={size || "large"}
    >
      {children}
    </Button>
  );
};

export default RButtonSmallWhite;

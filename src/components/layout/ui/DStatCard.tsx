import { ReactNode } from "react";

export type TStatCardProps = {
  color: string;
  title: string;
  number: number | string;
  prefix?: string;
  icon: ReactNode;
};

const DStatCard = ({ color, title, number, prefix, icon }: TStatCardProps) => {
  return (
    <div className="p-5 px-6 bg-white rounded-md shadow-sm ">
      <div className="flex gap-5 items-center">
        <h5
          className="p-4 px-5 rounded-md 0"
          style={{ backgroundColor: color }}
        >
          {icon}
        </h5>
        <div className="space-y-[2px]">
          <h5 className="text-sm">{title}</h5>
          <h3 className="font-semibold text-xl">
            {prefix} {number}
          </h3>
          {/* <p className="text-slate-400">In last week</p> */}
        </div>
      </div>
    </div>
  );
};

export default DStatCard;

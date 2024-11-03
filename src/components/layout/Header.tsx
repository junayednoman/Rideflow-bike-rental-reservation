import { Link, useNavigate } from "react-router-dom";
import RContainer from "./RContainer";
import RButtonSmall from "./ui/RButtonSmall";
import {
  CircleUserRound,
  ListCheckIcon,
  LogOut,
  Menu,
  Moon,
  SunMoon,
  User,
} from "lucide-react";
import { useState } from "react";
import { Drawer, Dropdown, MenuProps } from "antd";
import RButtonSmallWhite from "./ui/RButtonSmallWhite";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logOut, useGetCurrentUser } from "@/redux/features/authSlice";
import { toast } from "sonner";
import { changeTheme, useGetCurrentMode } from "@/redux/features/themeSlice";
import { menuItems } from "@/constant/navbar.constant";

const Header = () => {
  const user = useAppSelector(useGetCurrentUser);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const mode = useAppSelector(useGetCurrentMode);

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    dispatch(logOut());
    toast.success("User logged out successfully!");
    return navigate("/login");
  };

  // drop down options
  const items: MenuProps["items"] = [
    {
      label: (
        <div className="flex items-center gap-2">
          <User size={14} />
          <Link to={`/dashboard/${user?.role}`}>Profile</Link>
        </div>
      ),
      key: "0",
    },
    {
      label: (
        <div className="flex items-center gap-2">
          <ListCheckIcon size={14} />
          <Link
            to={
              user?.role === "admin"
                ? `/dashboard/admin/manage-bikes`
                : `/dashboard/user/my-rentals`
            }
          >
            {user?.role === "admin" ? "Manage Rentals" : "My Rentals"}
          </Link>
        </div>
      ),

      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: (
        <div onClick={handleLogout} className="flex items-center gap-2">
          <LogOut size={14} />
          <button>Log Out</button>
        </div>
      ),

      key: "3",
    },
  ];

  const handleChangeMode = () => {
    dispatch(changeTheme(mode === "light" ? "dark" : "light"));
  };

  return (
    <header className="md:py-6 py-5 absolute top-0 left-0 w-full z-30 myHeader">
      <RContainer>
        <div className="grid lg:grid-cols-5 grid-cols-2 gap-8 items-center justify-between">
          <div className="col-span-1">
            <Link className="inline-block" to={"/"}>
              <h3 className="md:text-3xl text-2xl font-bold uppercase text-white">
                <span className="text-accentColor">Ride</span>flow
              </h3>
            </Link>
          </div>
          <div className="col-span-3 mt-2 lg:block hidden">
            <ul className="flex items-center gap-12 justify-center text-white">
              {menuItems.map((item) => (
                <li
                  key={item.label}
                  className="capitalize font-medium hover:text-accentColor duration-300 border-b-2 hover:border-b-2 cursor-pointer border-accentColor pb-2 border-opacity-0 hover:border-opacity-100 hover:pb-1"
                >
                  <Link to={item.link}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-1 ml-auto flex items-center md:gap-4 gap-2">
            <div className="col-span-1 mt-1 ml-auto flex items-center md:gap-4 gap-2">
              <div className="text-white">
                <p
                  onClick={handleChangeMode}
                  className="border-2 border-white cursor-pointer bg-accentColor rounded-full p-5 flex items-center justify-center relative"
                >
                  <Moon
                    className={`text-white ${
                      mode === "dark" ? "opacity-0" : "opacity-100"
                    } absolute left-0 top-[9px] w-full duration-300`}
                    size={22}
                  />
                  <SunMoon
                    className={`text-white ${
                      mode === "dark" ? "opacity-100" : "opacity-0"
                    } absolute left-0 top-[9px] w-full duration-300`}
                    size={22}
                  />
                </p>
              </div>
              {user ? (
                <Dropdown
                  placement="bottomRight"
                  menu={{ items }}
                  trigger={["click"]}
                >
                  <a
                    className="rounded-full"
                    onClick={(e) => e.preventDefault()}
                  >
                    <p className="border-2 border-white cursor-pointer bg-accentColor rounded-full p-2">
                      <CircleUserRound className="text-white" size={25} />
                    </p>
                  </a>
                </Dropdown>
              ) : (
                <div className="sm:block hidden">
                  <RButtonSmallWhite link="/login">Login</RButtonSmallWhite>
                </div>
              )}
            </div>
            <div className="col-span-1 ml-auto lg:hidden block">
              <p className="border-2 border-white cursor-pointer bg-accentColor rounded-full p-[9px] flex items-center justify-center relative text-white">
                <Menu onClick={showDrawer} size={22} />
              </p>
              <Drawer title="Navbar" onClose={onClose} open={open}>
                <ul className="flex flex-col items-end gap-6">
                  {menuItems.map((item) => (
                    <li
                      key={item.label}
                      className="capitalize font-medium hover:text-accentColor duration-300 border-b-2 hover:border-b-2 cursor-pointer border-accentColor pb-2 border-opacity-0 hover:border-opacity-100 hover:pb-1"
                    >
                      <Link to={item.link}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
                <div className="text-right mt-4">
                  <RButtonSmall link="#">Login</RButtonSmall>
                </div>
              </Drawer>
            </div>
          </div>
        </div>
      </RContainer>
    </header>
  );
};

export default Header;

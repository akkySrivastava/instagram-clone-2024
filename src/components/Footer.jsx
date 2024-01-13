import PropTypes from "prop-types";
import { profile_data } from "../data/raw_data";
import { GoHome, GoHomeFill, GoSearch } from "react-icons/go";
import { ImSearch } from "react-icons/im";
import { Link, useLocation } from "react-router-dom";
import ReelsIcon from "./icons/ReelsIcon";
import { BsPlusSquare, BsPlusSquareFill } from "react-icons/bs";
import SwitchAccountMenu from "./drawers/SwitchAccountMenu";
import { useDrawerHooks } from "../hooks/useDrawerHooks";
import { useAccount } from "../hooks/useAccount";
import DashboardMenu from "./drawers/DashboardMenu";

const Footer = () => {
  const {
    openSwitchAccountMenu,
    openDashboardMenu,
    postContentOptions,
    openDashboard,
    closeDashboard,
    onCloseSwitchAccount,
    onOpenSwitchAccount,
  } = useDrawerHooks();
  const { defaultAccount } = useAccount();
  const { name, profile_img } = defaultAccount;
  const { pathname } = useLocation();

  return (
    <div className="w-full bottom-0 py-3 flex items-center justify-around">
      <Link to={"/"} className="cursor-pointer">
        {pathname === "/" ? <GoHomeFill size={28} /> : <GoHome size={28} />}
      </Link>
      <Link to={"/insta/explore"} className="cursor-pointer">
        {pathname === "/insta/explore" ? (
          <ImSearch size={24} />
        ) : (
          <GoSearch size={28} />
        )}
      </Link>
      <span onClick={openDashboard} className="cursor-pointer">
        {openDashboardMenu ? (
          <BsPlusSquareFill size={24} />
        ) : (
          <BsPlusSquare size={24} />
        )}
      </span>
      <Link to={"/insta/reels"} className="cursor-pointer">
        <ReelsIcon />
      </Link>
      <Link
        to={`/insta/user/${name}`}
        state={{ profile_img }}
        onDoubleClick={onOpenSwitchAccount}
      >
        <img
          className={`w-8 h-8 rounded-full cursor-pointer ${
            pathname.includes("user")
              ? "border-2 border-gray-500 p-0.5 rounded-full"
              : ""
          }`}
          src={profile_img}
          alt=""
        />
      </Link>
      {/* Drawer */}
      <SwitchAccountMenu
        props={{
          open: openSwitchAccountMenu,
          close: onCloseSwitchAccount,
          menuOptions: profile_data,
        }}
      />
      <DashboardMenu
        props={{
          open: openDashboardMenu,
          close: closeDashboard,
          menuOptions: postContentOptions,
        }}
      />
    </div>
  );
};

Footer.propTypes = {
  openReelsModal: PropTypes.func,
};

export default Footer;

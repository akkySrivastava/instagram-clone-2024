import PropTypes from "prop-types";
import {
  generateRandomImage,
  generateRandomName,
  profile_data,
} from "../data/raw_data";
import { GoHome, GoSearch } from "react-icons/go";
import { Link } from "react-router-dom";
import ReelsIcon from "./icons/ReelsIcon";
import { BsPlusSquare } from "react-icons/bs";
import SwitchAccountMenu from "./Drawer/SwitchAccountMenu";
import { useDrawerHooks } from "../hooks/useDrawerHooks";
import { useRef } from "react";

const Footer = () => {
  const { openSwitchAccountMenu, onCloseSwitchAccount, onOpenSwitchAccount } =
    useDrawerHooks();
  const timerRef = useRef();
  return (
    <div className="w-full bottom-0 py-3 flex items-center justify-around">
      <Link to={"/"} className="cursor-pointer">
        <GoHome size={28} />
      </Link>
      <span className="cursor-pointer">
        <GoSearch size={28} />
      </span>
      <span className="cursor-pointer">
        <BsPlusSquare size={24} />
      </span>
      <Link to={"/insta/reels"} className="cursor-pointer">
        <ReelsIcon />
      </Link>
      <Link
        to={`/insta/user/${generateRandomName()}`}
        state={{ profile_img: generateRandomImage() }}
        onMouseDown={() => {
          timerRef.current = setTimeout(() => onOpenSwitchAccount(), 1000);
        }}
        onMouseUp={() => clearTimeout(timerRef.current)}
        className="cursor-pointer"
      >
        <img
          className="h-8 w-8 rounded-full"
          src={generateRandomImage()}
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
    </div>
  );
};

Footer.propTypes = {
  openReelsModal: PropTypes.func,
};

export default Footer;

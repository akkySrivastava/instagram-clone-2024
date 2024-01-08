import PropTypes from "prop-types";
import { generateRandomImage, generateRandomName } from "../data/raw_data";
import { GoHome, GoSearch } from "react-icons/go";
import { TbSquarePlus } from "react-icons/tb";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="sticky w-full bottom-0 py-3 flex items-center justify-around">
      <Link to={"/"} className="cursor-pointer">
        <GoHome size={28} />
      </Link>
      <span className="cursor-pointer">
        <GoSearch size={28} />
      </span>
      <span className="cursor-pointer">
        <TbSquarePlus size={28} />
      </span>
      <Link to={"/insta/reels"} className="cursor-pointer">
        <svg
          width="23"
          height="23"
          viewBox="0 0 23 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1.04163"
            y="1.52081"
            width="20"
            height="20"
            rx="5"
            stroke="black"
            strokeWidth="2"
          />
          <line
            x1="1.04163"
            y1="6.52081"
            x2="21.0416"
            y2="6.52081"
            stroke="black"
            strokeWidth="2"
          />
          <path
            d="M12.5416 1.52083L16.0417 6.52084"
            stroke="black"
            strokeWidth="2"
          />
          <path
            d="M6.04164 1.52083L9.54167 6.52084"
            stroke="black"
            strokeWidth="2"
          />
          <path
            d="M14.0416 12.6548C14.7083 13.0397 14.7083 14.0019 14.0416 14.3868L9.54163 16.9849C8.87496 17.3698 8.04163 16.8887 8.04163 16.1189L8.04163 10.9227C8.04163 10.1529 8.87496 9.67181 9.54163 10.0567L14.0416 12.6548Z"
            fill="black"
          />
        </svg>
      </Link>
      <Link
        to={`/insta/user/${generateRandomName()}`}
        state={{ profile_img: generateRandomImage() }}
        className="cursor-pointer"
      >
        <img
          className="h-8 w-8 rounded-full"
          src={generateRandomImage()}
          alt=""
        />
      </Link>
    </div>
  );
};

Footer.propTypes = {
  openReelsModal: PropTypes.func,
};

export default Footer;

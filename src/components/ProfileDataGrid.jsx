import PropTypes from "prop-types";
import { photo_dummy_data, video_dummy_data } from "../data/raw_data";
import instagram from "../assets/instagram.png";
import { HiSquare2Stack } from "react-icons/hi2";
import { Link } from "react-router-dom";

const ProfileDataGrid = ({ tabIndex }) => {
  // const navigate = useNavigate();
  if (tabIndex === 0) {
    return (
      <div className="grid w-full grid-flow-row-dense grid-cols-3 items-center gap-0.5">
        {photo_dummy_data.map(({ src, id }) => (
          <Link
            key={id}
            to={`/insta/posts/p/${id}`}
            className={`col-span-1 h-[128px] relative bg-slate-400 flex items-center justify-center cursor-pointer`}
          >
            <img
              className="w-full h-full object-cover"
              src={src?.medium}
              alt=""
            />
            <span className="top-2 right-2 absolute">
              <HiSquare2Stack size="24" color="white" />
            </span>
          </Link>
        ))}
      </div>
    );
  }

  if (tabIndex === 1) {
    return (
      <div className="grid w-full grid-flow-row-dense grid-cols-3 items-center gap-0.5">
        {video_dummy_data.map(({ video_pictures, id }) => (
          <Link
            key={id}
            to={`/insta/reels/r/${id}`}
            className={`col-span-1 h-[225px] relative bg-slate-400 flex items-center justify-center cursor-pointer`}
          >
            <img
              className="w-full h-full object-cover"
              src={video_pictures[0].picture}
              alt=""
            />
            <span className="top-2 right-2 absolute">
              <img className="w-5 h-5 invert" src={instagram} alt="" />
            </span>
          </Link>
        ))}
      </div>
    );
  }

  if (tabIndex === 2) {
    return (
      <div className="flex w-full h-full">
        <div className="flex w-full items-center justify-center flex-col">
          <span className="font-semibold max-w-32 text-center text-lg font-poppins text-neutral-700">
            Photos and videos of you
          </span>
          <span className="text-gray-500 text-center text-sm max-w-56">
            When people tag you in photos and videos, they will appear here.{" "}
          </span>
        </div>
      </div>
    );
  }
};

ProfileDataGrid.propTypes = {
  tabIndex: PropTypes.number.isRequired,
};

export default ProfileDataGrid;

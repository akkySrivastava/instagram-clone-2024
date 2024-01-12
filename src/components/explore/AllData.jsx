import PropTypes from "prop-types";
import instagram from "../../assets/instagram.png";
import { HiSquare2Stack } from "react-icons/hi2";

const AllData = ({ feed }) => {
  if (feed?.video_files?.length) {
    const track = feed.video_files.find((data) => data.quality === "sd")?.link;
    return (
      <div key={feed?.id} className="flex">
        <div
          className={`h-[225px] relative w-full bg-slate-400 flex items-center justify-center cursor-pointer mb-0.5 `}
        >
          <video
            className="w-full h-full object-cover "
            src={track}
            muted
            autoPlay
            loop
            controls={false}
            preload="none"
          />
          <span className="top-2 right-2 absolute">
            <img className="w-5 h-5 invert" src={instagram} alt="" />
          </span>
        </div>
      </div>
    );
  }
  return (
    <div
      key={feed?.id}
      className={`h-[128px] relative w-full bg-slate-400 flex items-center justify-center cursor-pointer mb-0.5`}
    >
      <img
        className="w-full h-full object-cover"
        src={feed?.src?.medium}
        alt=""
      />
      <span className="top-2 right-2 absolute">
        <HiSquare2Stack size="24" color="white" />
      </span>
    </div>
  );
};

AllData.propTypes = {
  feed: PropTypes.object,
  index: PropTypes.number,
};

export default AllData;

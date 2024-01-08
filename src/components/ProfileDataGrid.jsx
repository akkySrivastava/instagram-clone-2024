import PropTypes from "prop-types";
import { photo_dummy_data, video_dummy_data } from "../data/raw_data";

const ProfileDataGrid = ({ tabIndex }) => {
  if (tabIndex === 0) {
    return (
      <div className="grid w-full grid-flow-row-dense grid-cols-3 items-center gap-0.5">
        {photo_dummy_data.map(({ src, id }) => (
          <div
            key={id}
            className={`col-span-1 h-[128px] bg-slate-400 flex items-center justify-center cursor-pointer`}
          >
            <img
              className="w-full h-full object-cover"
              src={src?.medium}
              alt=""
            />
          </div>
        ))}
      </div>
    );
  }

  if (tabIndex === 1) {
    return (
      <div className="grid w-full grid-flow-row-dense grid-cols-3 items-center gap-0.5">
        {video_dummy_data.map(({ video_pictures, id }) => (
          <div
            key={id}
            className={`col-span-1 h-[225px] bg-slate-400 flex items-center justify-center cursor-pointer`}
          >
            <img
              className="w-full h-full object-cover"
              src={video_pictures[0].picture}
              alt=""
            />
          </div>
        ))}
      </div>
    );
  }
};

ProfileDataGrid.propTypes = {
  tabIndex: PropTypes.number.isRequired,
};

export default ProfileDataGrid;

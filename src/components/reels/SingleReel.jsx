import { useParams } from "react-router-dom";
import Reel from "./Reel";
import { video_dummy_data } from "../../data/raw_data";
import { useMemo } from "react";

const SingleReel = () => {
  const { reels_id } = useParams();

  const reel_data = useMemo(
    () => video_dummy_data.find(({ id }) => Boolean(String(id) === reels_id)),
    [reels_id]
  );
  const track = useMemo(
    () => reel_data?.video_files.find(({ quality }) => quality === "hd")?.link,
    [reel_data]
  );

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex h-full w-full">
        <div className="flex h-full flex-col w-full">
          <Reel data={reel_data} track={track} />
        </div>
      </div>
    </div>
  );
};

SingleReel.propTypes = {};

export default SingleReel;

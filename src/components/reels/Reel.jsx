import { useState } from "react";
import PropTypes from "prop-types";
import {
  BsCamera,
  BsChat,
  BsHeart,
  BsSend,
  BsThreeDotsVertical,
} from "react-icons/bs";
import {
  generateRandomCaption,
  generateRandomImage,
  generateRandomMusic,
} from "../../data/raw_data";
import { MdOutlineArrowBack, MdVerified } from "react-icons/md";
import { HiMusicNote } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useAccount } from "../../hooks/useAccount";
import { faker } from "@faker-js/faker";
import { numberFormatter } from "../../utils/utils";

const Reel = ({ data, track }) => {
  const [muted, setMuted] = useState(true);
  const { defaultAccount } = useAccount();
  return (
    <div className="w-full h-full flex">
      <div className="flex w-full items-center justify-center">
        <div className="flex h-full w-full relative">
          <video
            id="reel-track"
            className="h-full w-full object-cover"
            autoPlay
            loop
            playsInline
            src={
              track ??
              "https://player.vimeo.com/external/188557098.hd.mp4?s=911c1c900d991c43cec89ed87bd2578ca7060d4c&profile_id=174&oauth2_token_id=57447761"
            }
            muted={muted}
            onClick={() => {
              setMuted(!muted);
            }}
          />
          <div className="flex absolute top-2 left-2 cursor-pointer text-white items-center gap-6">
            <Link to={`/insta/user/${defaultAccount?.name}`}>
              <MdOutlineArrowBack size={28} />
            </Link>
            <span className="text-lg font-semibold">Reels</span>
          </div>
          <div className="absolute top-2 right-4">
            <BsCamera className="text-white cursor-pointer" size={24} />
          </div>
          <div className="absolute w-full bottom-0 flex">
            <div
              style={{
                backgroundImage:
                  "linear-gradient(180deg, transparent, rgba(37,37,37,0.7), #111)",
              }}
              className="flex w-full"
            >
              <div className="flex w-full h-full">
                <div className="px-2 py-4 flex w-[75%] h-full flex-col justify-end gap-y-1">
                  <div className="flex gap-x-2 items-center text-gray-400 text-sm">
                    <img
                      className="rounded-full w-8 h-8"
                      src={generateRandomImage()}
                      alt=""
                    />
                    <span className="flex flex-col">
                      <span className="lowercase flex gap-x-1 items-center">
                        <span>
                          {String(data.user.name).split(" ").join("_")}
                        </span>
                        <span>
                          <MdVerified />
                        </span>
                      </span>
                      <span className="text-[10px]">Sponsered</span>
                    </span>
                    <div className="flex mx-2">
                      <button className="border px-2 py-0.5 border-gray-600 text-[12px] rounded-lg hover:text-white hover:border-white">
                        Follow
                      </button>
                    </div>
                  </div>
                  <div className="flex w-full">
                    <span className="text-sm truncate text-gray-400">
                      {generateRandomCaption()}
                    </span>
                  </div>
                  <div className="flex w-full mt-2">
                    <span className="flex items-center gap-x-1 text-[12px] text-gray-400 truncate">
                      <HiMusicNote />
                      <span>{generateRandomMusic()}</span>
                    </span>
                  </div>
                </div>
                <div className="flex flex-1">
                  <div className="flex flex-col items-end justify-end mr-5 mb-2 w-full gap-y-2.5 text-white text-[12px] ">
                    <span className="flex flex-col items-center gap-y-1 ">
                      <BsHeart className="cursor-pointer" size={24} />
                      <span>
                        {numberFormatter(
                          faker.number.int({ max: 50000, min: 2500 })
                        )}
                      </span>
                    </span>
                    <span className="flex flex-col items-center gap-y-1 ">
                      <BsChat className="cursor-pointer" size={24} />
                      <span>
                        {numberFormatter(
                          faker.number.int({ max: 10000, min: 2500 })
                        )}
                      </span>
                    </span>
                    <span className="flex flex-col items-center gap-y-1 ">
                      <BsSend className="cursor-pointer" size={24} />
                      <span>
                        {numberFormatter(
                          faker.number.int({ max: 30000, min: 2500 })
                        )}
                      </span>
                    </span>
                    <span>
                      <BsThreeDotsVertical
                        className="cursor-pointer "
                        size={24}
                      />
                    </span>
                    <span>
                      <img
                        className="h-6 w-6 rounded-lg border-2"
                        src={data.image}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Reel.propTypes = {
  data: PropTypes.object,
  track: PropTypes.string,
};

export default Reel;

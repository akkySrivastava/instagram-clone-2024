import { useMemo, useState } from "react";
import { Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  generateRandomCaption,
  generateRandomImage,
  generateRandomMusic,
  video_dummy_data,
} from "../data/raw_data";
import { MdVerified } from "react-icons/md";
import { HiMusicNote } from "react-icons/hi";
import {
  BsCamera,
  BsChat,
  BsHeart,
  BsSend,
  BsThreeDotsVertical,
} from "react-icons/bs";

const ReelsModal = () => {
  const [, setSwiper] = useState();
  const reels_data = useMemo(
    () => video_dummy_data.sort(() => Math.random() - 0.5).slice(0, 10),
    []
  );
  const [muted, setMuted] = useState(true);
  return (
    <Swiper
      className="h-full w-full"
      direction="vertical"
      keyboard
      slidesPerView={1}
      mousewheel
      modules={[Mousewheel]}
      onSwiper={setSwiper}
      onTransitionStart={() => {
        const videos = document.querySelectorAll("video");
        Array.prototype.forEach.call(videos, (video) => video.pause());
      }}
      onTransitionEnd={(e) => {
        try {
          const activeSlide =
            document?.getElementsByClassName("swiper-slide")[e?.activeIndex];
          const activeSlideReel = activeSlide?.getElementsByTagName("video")[0];
          return activeSlideReel?.play();
        } catch (err) {
          console.error(err.toString());
        }
      }}
    >
      {reels_data.map((reels) => {
        const track = reels.video_files.find(
          (data) => data.quality === "hd"
        )?.link;
        return (
          <SwiperSlide key={reels?.id} className="w-full h-full">
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
                  <div className="absolute top-6 right-4">
                    <BsCamera
                      className="text-gray-400 cursor-pointer hover:text-white"
                      size={24}
                    />
                  </div>
                  <div className="absolute w-full h-full -bottom-[66%] flex">
                    <div
                      style={{
                        backgroundImage:
                          "linear-gradient(180deg, transparent, rgba(0,0,0,0.7), #000)",
                      }}
                      className="flex w-full h-[230px]"
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
                                  {String(reels.user.name).split(" ").join("_")}
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
                          <div className="flex flex-col items-end mr-5 w-full gap-y-2.5 text-gray-400 text-[12px] ">
                            <span className="flex flex-col items-center gap-y-1 hover:text-white">
                              <BsHeart className="cursor-pointer" size={24} />
                              <span>10</span>
                            </span>
                            <span className="flex flex-col items-center gap-y-1 hover:text-white">
                              <BsChat className="cursor-pointer" size={24} />
                              <span>2</span>
                            </span>
                            <span className="flex flex-col items-center gap-y-1 hover:text-white">
                              <BsSend className="cursor-pointer" size={24} />
                              <span>300</span>
                            </span>
                            <span>
                              <BsThreeDotsVertical
                                className="cursor-pointer hover:text-white"
                                size={24}
                              />
                            </span>
                            <span>
                              <img
                                className="h-6 w-6 rounded-lg border-2"
                                src={reels.image}
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
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ReelsModal;

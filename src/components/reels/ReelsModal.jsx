import { useMemo, useState } from "react";
import { Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { video_dummy_data } from "../../data/raw_data";

import Reel from "./Reel";

const ReelsModal = () => {
  const [, setSwiper] = useState();
  const reels_data = useMemo(
    () => video_dummy_data.sort(() => Math.random() - 0.5).slice(0, 10),
    []
  );
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
      {reels_data.map((data) => {
        const track = data.video_files.find(
          (data) => data.quality === "hd"
        )?.link;
        return (
          <SwiperSlide key={data?.id} className="w-full h-full">
            <Reel data={data} track={track} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ReelsModal;

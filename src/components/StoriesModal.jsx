import PropTypes from "prop-types";
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  // Thumbs,
  EffectCube,
  Controller,
  // EffectCards,
  // EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-cube";
import { profile_data } from "../data/raw_data";
import { useMemo, useState } from "react";
import { MdClose, MdMoreHoriz, MdVerified } from "react-icons/md";
import { BsHeart, BsSend } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { useAccount } from "../hooks/useAccount";

function StoriesModal() {
  const [controlledSwiper, setControlledSwiper] = useState();
  const [mainSwiper, setMainSwiper] = useState();
  const { username } = useParams();
  const { defaultAccount } = useAccount();
  const all_stories = useMemo(() => {
    const stories = [...profile_data];
    stories.forEach((e, index) => {
      if (e.name === username) {
        stories.splice(index, 1);
        stories.unshift(e);
      } else if (e.name === defaultAccount?.name) {
        stories.splice(index, 1);
      }
    });
    return stories;
  }, [username, defaultAccount?.name]);

  return (
    <div className="bg-black w-full h-full">
      <>
        {/* Stories slider */}
        <Swiper
          effect={"cube"}
          // pagination={true}
          modules={[EffectCube, Pagination, Controller]}
          className="h-full w-full"
          onSwiper={setMainSwiper}
          controller={{
            control: controlledSwiper,
          }}
        >
          {all_stories.map((data, index) => (
            <SwiperSlide key={index} className="h-full">
              <ChildrenSlider
                mainSwiper={mainSwiper}
                stories={data}
                index={data?.key}
                setControlledSwiper={setControlledSwiper}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
}

const ChildrenSlider = ({
  mainSwiper,
  stories: stories_data,
  // setControlledSwiper,
}) => {
  const swiperSlide = useSwiperSlide();
  // const [activeIndexMainSwiper, setActiveIndexMainSwiper] = useState(0);

  return (
    <Swiper
      className="banner_swiper h-full"
      pagination={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      onTransitionStart={(e) => {
        if (!swiperSlide.isActive) {
          e.autoplay.stop();
          e.slideTo(0);
        } else {
          e.autoplay.start();
        }
      }}
      onSlideNextTransitionEnd={(e) => {
        if (e.isEnd) {
          setTimeout(async () => {
            await mainSwiper?.slideNext();
          }, 3000);
        }
      }}
      // onSwiper={setControlledSwiper}
      modules={[Autoplay, Pagination, Navigation, Controller]}
    >
      {stories_data?.stories.map((story, index) => (
        <SwiperSlide key={index} className="w-full h-full">
          <div className="flex flex-col w-full h-full border-b-2 border-neutral-500">
            <div className="flex h-full">
              <img
                // loading="lazy"
                src={story.data}
                alt="banner"
                className="object-cover rounded-md"
              />
            </div>
            <div className="flex p-2 gap-4 items-center">
              <div className="flex flex-1">
                <input
                  className="bg-black border-2 border-neutral-800 p-2 rounded-full w-full text-gray-300"
                  type="text"
                  placeholder="send a message..."
                />
              </div>
              <span className="text-white cursor-pointer">
                <BsHeart size={24} />
              </span>
              <span
                onClick={() => {
                  if (!navigator.canShare) return null;
                  navigator.share({
                    title: stories_data.name,
                    url: story.data,
                  });
                }}
              >
                <BsSend size={22} className="text-white cursor-pointer" />
              </span>
            </div>
            <div className="absolute w-full flex top-3 bg-gradient-to-b from-neutral-800">
              <div className="w-full px-2 py-2 flex items-center justify-between">
                <div className="flex gap-2 items-center">
                  <img
                    className="w-8 h-8 rounded-full"
                    src={stories_data?.profile_img}
                    alt=""
                  />
                  <span className="flex flex-col text-white">
                    <span className="lowercase flex gap-x-1 items-center">
                      <span>{String(stories_data.name)}</span>
                      <span>
                        <MdVerified />
                      </span>
                      <span className="text-gray-200">{story.time}</span>
                    </span>
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="text-white cursor-pointer">
                    <MdMoreHoriz size={28} />
                  </span>
                  <Link to={"/"} className="text-white">
                    <MdClose size={28} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <SlidePrev mainSwiper={mainSwiper} />
      <SlideNext mainSwiper={mainSwiper} />
    </Swiper>
  );
};

const SlidePrev = ({ mainSwiper }) => {
  const swiper = useSwiper();
  return (
    <div
      onClick={() => {
        if (swiper.isBeginning) {
          return mainSwiper?.slidePrev();
        }
        return swiper.slidePrev();
      }}
      className="absolute cursor-pointer h-[80%] w-4/12 -left-3 lg:-left-4 top-1/2 z-10 -translate-y-1/2"
    ></div>
  );
};

function SlideNext({ mainSwiper }) {
  const swiper = useSwiper();
  return (
    <div
      onClick={() => {
        if (swiper.isEnd) {
          return mainSwiper?.slideNext();
        }
        return swiper.slideNext();
      }}
      className="absolute cursor-pointer h-[80%] w-4/12 -right-3 lg:-right-4 top-1/2 z-10 -translate-y-1/2"
    ></div>
  );
}

ChildrenSlider.propTypes = {
  mainSwiper: PropTypes.object,
  stories: PropTypes.array,
  index: PropTypes.number,
  activeIndexMainSwiper: PropTypes.number,
};

SlidePrev.propTypes = {
  mainSwiper: PropTypes.object,
};

SlideNext.propTypes = {
  mainSwiper: PropTypes.object,
};

export default StoriesModal;

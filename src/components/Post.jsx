import { Avatar, Tooltip } from "antd";
import PropTypes from "prop-types";
import { BsBookmark, BsChat, BsHeart, BsSend } from "react-icons/bs";
import { MdMoreHoriz } from "react-icons/md";
import { generateRandomImage, generateRandomPostImage } from "../data/raw_data";
import moment from "moment";

function Post({ post_data }) {
  const { user, likes, comments, caption, created_time } = post_data;
  const { username } = user;
  return (
    <div className="flex w-full flex-col border-b-2 border-neutral-200">
      <div className="flex w-full items-center justify-between my-2 px-4">
        <div className="flex items-center gap-1.5">
          <div className="flex p-[2px] max-w-fit rounded-full bg-gradient-to-r from-[#ffc600] via-[#ff0040] to-[#e600cc] cursor-pointer">
            <img
              className="w-8 h-8 rounded-full items-center justify-center"
              src={generateRandomImage()}
              alt="profile1"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">{username ?? ""}</span>
            <span className="text-[10px] text-neutral-400">
              {moment(new Date(created_time * 1000)).fromNow()}
            </span>
          </div>
        </div>
        <span className="cursor-pointer">
          <MdMoreHoriz size={24} />
        </span>
      </div>
      <div className="flex w-full">
        <img
          className="max-h-72 w-full object-cover object-center"
          src={generateRandomPostImage()}
          alt=""
        />
      </div>
      <div className="flex w-full items-center px-4 py-2 justify-between">
        <div className="flex gap-6">
          <span className="cursor-pointer">
            <BsHeart size={24} />
          </span>
          <span className="cursor-pointer">
            <BsChat size={24} />
          </span>
          <span className="cursor-pointer">
            <BsSend size={24} />
          </span>
        </div>
        <div>
          <span className="cursor-pointer">
            <BsBookmark size={24} />
          </span>
        </div>
      </div>
      {/* Liked Stats */}
      <div className="flex w-full items-center px-4 gap-2">
        <div className="flex">
          <Avatar.Group
            maxCount={3}
            maxPopoverTrigger="click"
            size="small"
            maxStyle={{
              color: "#f56a00",
              backgroundColor: "#fde3cf",
              cursor: "pointer",
            }}
          >
            {[...Array(3)].map((_, index) => (
              <Avatar key={index} src={generateRandomImage()} />
            ))}
          </Avatar.Group>
        </div>
        <div className="flex gap-x-1 text-sm truncate">
          Liked by{" "}
          <span className="font-semibold">
            {likes?.data[0]?.username ?? ""}
          </span>{" "}
          and
          <span className="font-semibold">
            {new Intl.NumberFormat("en-US").format(likes?.count)} others
          </span>
        </div>
      </div>
      {/* Caption */}
      <div className="flex w-full items-center px-4 gap-2">
        <span className="text-sm font-semibold">{username ?? ""}</span>
        <Tooltip placement="top" title={caption?.text}>
          <span className="truncate">{caption?.text}</span>
        </Tooltip>
      </div>
      {/* Comments section */}
      <div className="flex w-full px-4 py-1 text-sm">
        <span className="text-neutral-500 hover:text-neutral-600 hover:underline cursor-pointer">
          View all {new Intl.NumberFormat("en-US").format(comments?.count)}{" "}
          comments
        </span>
      </div>
      <div className="flex flex-col w-full px-4 text-sm mb-1">
        {comments?.data?.slice(0, 2)?.map(({ id, from, text }) => (
          <div key={id} className="flex gap-2 gap-y-1">
            <span className="font-semibold cursor-pointer hover:underline hover:text-neutral-700">
              {from?.username}
            </span>
            <span className="truncate">{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

Post.propTypes = {
  post_data: PropTypes.object.isRequired,
};

export default Post;

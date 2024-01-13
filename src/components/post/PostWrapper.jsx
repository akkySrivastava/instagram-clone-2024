import { Link } from "react-router-dom";
import Post from "./Post";
import { dummy_post, photo_dummy_data } from "../../data/raw_data";
import { MdOutlineArrowBack } from "react-icons/md";
import { useAccount } from "../../hooks/useAccount";

const PostWrapper = () => {
  const { defaultAccount } = useAccount();
  const MIN = 0;
  const MAX = 5;
  const { name } = defaultAccount;

  return (
    <div className="flex flex-col w-full overflow-y-auto no-scroll-thumb">
      <div className="flex w-full bg-white border-b-2 border-gray-300 sticky py-5 top-0 px-4 z-10">
        <div className="flex items-center gap-6">
          <Link to={`/insta/user/${name}`}>
            <MdOutlineArrowBack size={28} />
          </Link>
          <span className="text-lg font-semibold">Posts</span>
        </div>
      </div>
      <div className="flex w-full">
        <div className="flex flex-col w-full">
          {photo_dummy_data.map(({ id, src }) => {
            const post_data =
              dummy_post[Math.floor(Math.random() * (MAX - MIN + 1)) + MIN];
            return (
              <Post
                key={id}
                id={id}
                post_data={post_data}
                img={src?.medium}
                isSinglePost
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

PostWrapper.propTypes = {};

export default PostWrapper;

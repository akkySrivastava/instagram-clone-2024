import { GoSearch } from "react-icons/go";
import { useDrawerHooks } from "../../hooks/useDrawerHooks";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useEffect, useState } from "react";

function FollowerList() {
  const { follower_arr } = useDrawerHooks();
  const [follower_state, setFollowerState] = useState(follower_arr);
  const [searchKey, setSearchKey] = useState();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchKey) {
        const arr = follower_arr.filter(({ photographer }) =>
          photographer.toLowerCase().includes(String(searchKey).toLowerCase())
        );
        setFollowerState(arr);
      }
      clearInterval(timer);
    }, 500);
  }, [follower_arr, searchKey]);

  return (
    <div className="flex flex-col w-full mt-2 px-4 gap-4 overflow-y-auto no-scroll-thumb">
      <div className="flex w-full bg-neutral-200 py-1.5 rounded-lg items-center gap-4 px-3">
        <span className="">
          <GoSearch />
        </span>
        <input
          type="text"
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
          placeholder="Search"
          className="w-full bg-transparent p-0 border-none outline-none text-gray-800"
        />
      </div>
      <div className="flex flex-col gap-3.5 w-full">
        {!follower_state.length ? (
          <span>No users found.</span>
        ) : (
          follower_state.map(({ id, src, photographer }) => {
            const { tiny } = src;
            return (
              <div key={id} className="flex w-full items-center gap-3.5">
                <div className="flex">
                  <img
                    className="max-w-16 min-h-16 object-cover rounded-full"
                    src={tiny}
                    alt=""
                  />
                </div>
                <div className="flex flex-col flex-1 min-w-[35%]">
                  <div className="flex items-center gap-1">
                    <span className="truncate lowercase font-semibold">
                      {String(photographer).split(" ").join("_")}
                    </span>
                    <span className="font-extrabold">·</span>
                    <span className="text-sky-600 cursor-pointer text-sm font-medium hover:text-sky-800">
                      Follow
                    </span>
                  </div>
                  <span className="text-gray-500 truncate">{photographer}</span>
                </div>
                <div className="flex gap-2.5 items-center">
                  <button className="px-3 py-1.5 rounded-lg font-semibold text-sm bg-neutral-200">
                    Remove
                  </button>
                  <span className="cursor-pointer">
                    <BsThreeDotsVertical size={18} />
                  </span>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

FollowerList.propTypes = {};

export default FollowerList;

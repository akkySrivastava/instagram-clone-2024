import { GoSearch } from "react-icons/go";
import { useDrawerHooks } from "../../hooks/useDrawerHooks";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useEffect, useState } from "react";
import { TbArrowsSort } from "react-icons/tb";

function FollowingList() {
  const { following_arr } = useDrawerHooks();
  const [following_state, setFollowingState] = useState(following_arr);
  const [searchKey, setSearchKey] = useState();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchKey) {
        const arr = following_arr.filter(({ photographer }) =>
          photographer.toLowerCase().includes(String(searchKey).toLowerCase())
        );
        setFollowingState(arr);
      }
      clearInterval(timer);
    }, 500);
  }, [following_arr, searchKey]);

  return (
    <div className="flex flex-col w-full mt-2 px-4 gap-4">
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
      <div className="flex w-full items-center justify-between">
        <span className="font-medium text-md">Sort by</span>
        <span>
          <TbArrowsSort size={20} />
        </span>
      </div>
      <div className="flex flex-col gap-3.5 w-full">
        {!following_state.length ? (
          <span>No users found.</span>
        ) : (
          following_state.map(({ id, src, photographer }) => {
            const { tiny } = src;
            return (
              <div key={id} className="flex w-full items-center gap-3.5">
                <div className="flex">
                  <span>
                    <img
                      className="max-w-16 min-h-16 object-cover rounded-full"
                      src={tiny}
                      alt=""
                    />
                  </span>
                </div>
                <div className="flex flex-col flex-1 min-w-[31%]">
                  <div className="flex items-center gap-1">
                    <span className="truncate lowercase font-semibold">
                      {String(photographer).split(" ").join("_")}
                    </span>
                  </div>
                  <span className="text-gray-500 truncate">{photographer}</span>
                </div>
                <div className="flex gap-2.5 items-center">
                  <button className="px-3 py-1.5 rounded-lg font-semibold text-sm bg-neutral-200">
                    Following
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

FollowingList.propTypes = {};

export default FollowingList;

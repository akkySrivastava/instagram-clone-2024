import { GoSearch } from "react-icons/go";
import { useDrawerHooks } from "../../hooks/useDrawerHooks";
import {
  BsSortAlphaDown,
  BsSortAlphaUp,
  BsThreeDotsVertical,
} from "react-icons/bs";
import { useCallback, useEffect, useState } from "react";
import { TbArrowsSort } from "react-icons/tb";
import { Dropdown } from "antd";

function FollowingList() {
  const { following_arr } = useDrawerHooks();
  const [following_state, setFollowingState] = useState(following_arr);
  const [searchKey, setSearchKey] = useState();
  const [selectedValue, setSelectedValue] = useState("0");

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

  const handleSort = useCallback(
    (key) => {
      console.log(key);
      switch (key) {
        case "0":
          return setFollowingState(following_arr);
        case "1": {
          following_state.sort(function (a, b) {
            if (a.photographer.toLowerCase() < b.photographer.toLowerCase()) {
              return -1;
            }
            if (a.photographer.toLowerCase() > b.photographer.toLowerCase()) {
              return 1;
            }
            return 0;
          });
          return setFollowingState(following_state);
        }

        case "2":
          following_arr.sort((a, b) =>
            a.photographer.toLowerCase() > b.photographer.toLowerCase() ? -1 : 1
          );
          return setFollowingState(following_arr);
      }
    },
    [following_state, following_arr]
  );

  const items = [
    {
      key: "0",
      label: <span className="flex items-center text-lg">Default</span>,
    },
    {
      key: "1",
      label: (
        <span className="flex items-center gap-5 text-md">
          <span>
            <BsSortAlphaUp />
          </span>
          <span>A-Z</span>
        </span>
      ),
    },
    {
      key: "2",
      label: (
        <span className="flex items-center text-md gap-5">
          <span>
            <BsSortAlphaDown />
          </span>
          <span>Z-A</span>
        </span>
      ),
    },
  ];

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
      <div className="flex w-full items-center justify-between">
        <span className="font-medium text-md">Sort by</span>
        <span className="flex items-end">
          <Dropdown
            menu={{
              items,
              selectable: true,
              defaultSelectedKeys: selectedValue,
              onSelect: (item) => {
                setSelectedValue(items.find((e) => e.key === item.key).key);
                handleSort(item.key);
              },
            }}
            placement="bottomRight"
            trigger={["hover", "click"]}
            className="flex"
          >
            <TbArrowsSort size={20} />
          </Dropdown>
        </span>
      </div>
      <div className="flex flex-col gap-3.5 w-full mb-3">
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

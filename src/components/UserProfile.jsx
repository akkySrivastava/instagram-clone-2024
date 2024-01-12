import { MdGridOn, MdKeyboardArrowDown } from "react-icons/md";
import { generateRandomImage, profile_data } from "../data/raw_data";
import { useMemo, useState } from "react";
import { faker } from "@faker-js/faker";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { BiUserPin } from "react-icons/bi";
import ProfileDataGrid from "./ProfileDataGrid";
import { BsPlusSquare } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { useDrawerHooks } from "../hooks/useDrawerHooks";
import DashboardMenu from "./drawers/DashboardMenu";
import SwitchAccountMenu from "./drawers/SwitchAccountMenu";
import { useAccount } from "../hooks/useAccount";
import AllLists from "./profile/AllLists";
function UserProfile() {
  const { username } = useParams();
  const { search } = useLocation();
  const navigate = useNavigate();
  const { defaultAccount } = useAccount();
  const { profile_img, name } = defaultAccount;
  const [tab, setTab] = useState(0);

  const {
    openDashboardMenu,
    openSwitchAccountMenu,
    openPostTypeMenu,
    dashboardMenuOptions,
    postContentOptions,
    openPostType,
    closePostType,
    closeDashboard,
    openDashboard,
    onCloseSwitchAccount,
    onOpenSwitchAccount,
  } = useDrawerHooks();

  const {
    user_name,
    profession,
    bio,
    address,
    link: personal_link,
  } = useMemo(
    () => ({
      user_name: username,
      profession: faker.person.jobTitle(),
      bio: faker.person.bio(),
      address: faker.location.streetAddress(),
      link: faker.internet.url(),
      country: faker.location.country(),
    }),
    [username]
  );

  // Show follow following list
  if (search) {
    return <AllLists />;
  }

  return (
    <div className="flex w-full h-full overflow-y-auto no-scroll-thumb relative">
      <div className="flex flex-col w-full ">
        {/* Top Section */}
        <div className="flex w-full items-center my-3 px-2">
          <div className="flex items-center flex-1 gap-2">
            <span
              onClick={onOpenSwitchAccount}
              className="flex items-center text-lg font-semibold font-poppins lowercase cursor-pointer"
            >
              {name ?? user_name}
              <MdKeyboardArrowDown size={24} />
            </span>
          </div>

          <span className="flex gap-5">
            <span onClick={openPostType} className="cursor-pointer">
              <BsPlusSquare size={20} />
            </span>
            <span onClick={openDashboard} className="relative">
              <AiOutlineMenu className="cursor-pointer" size="20" />
              <span className="bg-red-600 w-2.5 h-2.5 absolute -top-1 -right-1 rounded-full"></span>
            </span>
          </span>
        </div>
        {/* Profile Header */}
        <div className="w-full flex items-center justify-between my-1 px-2">
          <div className="flex">
            <img
              className="w-16 h-16 object-cover rounded-full"
              src={profile_img ?? generateRandomImage()}
              alt=""
            />
          </div>
          <div className="flex gap-8">
            <span className="flex flex-col items-center">
              <span className="font-bold text-lg">123</span>
              <span className="text-sm text-gray-500">Posts</span>
            </span>
            <span
              onClick={() => navigate("?list=followers")}
              className="flex flex-col items-center cursor-pointer"
            >
              <span className="font-bold text-lg">41.6K</span>
              <span className="text-sm text-gray-500">Followers</span>
            </span>
            <span
              onClick={() => navigate("?list=following")}
              className="flex flex-col items-center cursor-pointer"
            >
              <span className="font-bold text-lg">1.5K</span>
              <span className="text-sm text-gray-500">Following</span>
            </span>
          </div>
        </div>
        {/* Profile Name */}
        <div className="flex px-2">
          <span className="font-semibold text-sm lowercase">
            {name ?? user_name}
          </span>
        </div>
        <div className="flex text-sky-700 text-sm px-2">
          <span>👩‍🎓 {profession}</span>
        </div>
        <div className="flex text-sm capitalize px-2">
          <span>👉 {bio}</span>
        </div>
        <div className="flex text-sm px-2">
          <span>📍{address}</span>
        </div>
        <div className="flex text-sm text-sky-600 hover:text-sky-800 px-2">
          <span>🔗 </span>
          <Link to={".."} className="hover:underline">
            {personal_link}
          </Link>
        </div>

        {/* User Highlights */}
        <div className="flex w-full gap-2 my-3 px-2">
          <div className="flex gap-2 overflow-x-auto no-scroll-thumb">
            {[...Array(5)].map((_, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col items-center min-w-16 cursor-pointer"
                >
                  <img
                    className="h-16 w-16 object-cover rounded-full border-2 p-0.5 border-gray-400"
                    src={faker.image.urlLoremFlickr()}
                    alt=""
                  />
                  <span className="truncate text-sm max-w-16">
                    {faker.location.country()}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* User Posts/Reels/Tags */}
        <div className="flex flex-1 flex-col w-full mt-2">
          <div className="grid w-full grid-flow-row-dense grid-cols-3 items-center sticky top-0 bg-white">
            <div
              className={`col-span-1 flex items-center justify-center ${
                tab === 0
                  ? "border-b-2 border-gray-500 text-black"
                  : "text-gray-400"
              }  p-2 `}
            >
              <MdGridOn
                onClick={() => setTab(0)}
                className="cursor-pointer"
                size={26}
              />
            </div>
            <div
              className={`col-span-1 flex items-center justify-center ${
                tab === 1 ? "border-b-2 border-gray-500" : "text-gray-400"
              } p-2 `}
            >
              <svg
                onClick={() => setTab(1)}
                className="cursor-pointer"
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1.04163"
                  y="1.52081"
                  width="20"
                  height="20"
                  rx="5"
                  stroke={tab === 1 ? "black" : "gray"}
                  strokeWidth="2"
                />
                <line
                  x1="1.04163"
                  y1="6.52081"
                  x2="21.0416"
                  y2="6.52081"
                  stroke={tab === 1 ? "black" : "gray"}
                  strokeWidth="2"
                />
                <path
                  d="M12.5416 1.52083L16.0417 6.52084"
                  stroke={tab === 1 ? "black" : "gray"}
                  strokeWidth="2"
                />
                <path
                  d="M6.04164 1.52083L9.54167 6.52084"
                  stroke={tab === 1 ? "black" : "gray"}
                  strokeWidth="2"
                />
                <path
                  d="M14.0416 12.6548C14.7083 13.0397 14.7083 14.0019 14.0416 14.3868L9.54163 16.9849C8.87496 17.3698 8.04163 16.8887 8.04163 16.1189L8.04163 10.9227C8.04163 10.1529 8.87496 9.67181 9.54163 10.0567L14.0416 12.6548Z"
                  fill={tab === 1 ? "black" : "gray"}
                />
              </svg>
            </div>
            <div
              className={`col-span-1 flex items-center justify-center ${
                tab === 2
                  ? "border-b-2 border-gray-500 text-black"
                  : "text-gray-400"
              } p-2`}
            >
              <BiUserPin
                onClick={() => setTab(2)}
                className="cursor-pointer"
                size={28}
              />
            </div>
          </div>
          {/* Post Data */}
          <div className="flex flex-1 w-full">
            <ProfileDataGrid tabIndex={tab} />
          </div>
        </div>
      </div>

      {/* Drawers */}
      <DashboardMenu
        props={{
          open: openDashboardMenu,
          close: closeDashboard,
          menuOptions: dashboardMenuOptions,
        }}
      />
      <DashboardMenu
        props={{
          open: openPostTypeMenu,
          close: closePostType,
          menuOptions: postContentOptions,
        }}
      />
      <SwitchAccountMenu
        props={{
          open: openSwitchAccountMenu,
          close: onCloseSwitchAccount,
          menuOptions: profile_data,
        }}
      />
      {/* <List
        props={{
          open: openFollowerList,
          close: onCloseFollowerList,
          menuOptions: follower_arr,
        }}
      />
      <List
        props={{
          open: openFollowingList,
          close: onCloseFollowingList,
          menuOptions: following_arr,
        }}
      /> */}
    </div>
  );
}

UserProfile.propTypes = {};

export default UserProfile;

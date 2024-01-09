import { useCallback, useMemo, useState } from "react";
import { BsActivity, BsBroadcast, BsThreads } from "react-icons/bs";
import { IoIosSettings } from "react-icons/io";
import { GrBarChart, GrHistory } from "react-icons/gr";
import { MdBookmarkBorder, MdGridOn, MdOutlineFormatListBulleted, MdOutlineStarOutline, MdOutlineSupervisorAccount, MdOutlineTrendingUp, MdOutlineVerified, MdQrCodeScanner } from "react-icons/md";
import { FaRegCreditCard } from "react-icons/fa";
import { GoPersonAdd } from "react-icons/go";
import ReelsIcon from "../components/icons/ReelsIcon";
import { TbClockHeart, TbHeartPlus } from 'react-icons/tb'
import { FaWandMagicSparkles } from 'react-icons/fa6'


export function useDrawerHooks() {
  const [openDashboardMenu, setOpenDashboardMenu] = useState(false);
  const [openPostTypeMenu, setOpenPostTypeMenu] = useState(false)
  const [openSwitchAccountMenu, setOpenSwitchAccountMenu] = useState(false)

  const openDashboard = useCallback(() => setOpenDashboardMenu(true), []);
  const closeDashboard = useCallback(() => setOpenDashboardMenu(false), []);

  const openPostType = useCallback(() => setOpenPostTypeMenu(true), []);
  const closePostType = useCallback(() => setOpenPostTypeMenu(false), []);

  const onOpenSwitchAccount = useCallback(() => setOpenSwitchAccountMenu(true), []);
  const onCloseSwitchAccount = useCallback(() => setOpenSwitchAccountMenu(false), []);

  const dashboardMenuOptions = useMemo(() =>
    [
      {
        "icon": IoIosSettings,
        "text": "Settings and privacy",
        "isBadge": false,
      },
      {
        "icon": BsThreads,
        "text": "Threads",
        "isBadge": false,
      },
      {
        "icon": GrBarChart,
        "text": "Insights",
        "isBadge": false,
      },
      {
        "icon": BsActivity,
        "text": "Activity",
        "isBadge": false,
      },
      {
        "icon": GrHistory,
        "text": "Archive",
        "isBadge": false,
      },
      {
        "icon": MdQrCodeScanner
        ,
        "text": "QR code",
        "isBadge": false,
      },
      {
        "icon": MdBookmarkBorder,
        "text": "Saved",
        "isBadge": false,
      },
      {
        "icon": MdOutlineSupervisorAccount,
        "text": "Supervision",
        "isBadge": false,
      },
      {
        "icon": FaRegCreditCard,
        "text": "Card and payments",
        "isBadge": false,
      },
      {
        "icon": MdOutlineVerified,
        "text": "Meta Verified",
        "isBadge": true,
      },
      {
        "icon": MdOutlineFormatListBulleted,
        "text": "Close friends",
        "isBadge": false,
      },
      {
        "icon": MdOutlineStarOutline,
        "text": "Favourites",
        "isBadge": false,
      },
      {
        "icon": GoPersonAdd,
        "text": "Discover people",
        "isBadge": false,
      },
    ]
    , [])
  const postContentOptions = useMemo(() => [
    {
      "icon": ReelsIcon,
      "text": "Reel",
      "isBadge": false,
    },
    {
      "icon": MdGridOn,
      "text": "Post",
      "isBadge": false,
    },
    {
      "icon": TbHeartPlus,
      "text": "Story",
      "isBadge": false,
    },
    {
      "icon": TbClockHeart,
      "text": "Story hightlight",
      "isBadge": false,
    },
    {
      "icon": BsBroadcast,
      "text": "Live",
      "isBadge": false,
    },
    {
      "icon": FaWandMagicSparkles,
      "text": "Made for you",
      "isBadge": false,
    },
    {
      "icon": MdOutlineTrendingUp,
      "text": "Ad",
      "isBadge": false,
    },
  ], [])

  return useMemo(() => ({
    dashboardMenuOptions,
    postContentOptions,
    openDashboardMenu,
    openPostTypeMenu,
    openSwitchAccountMenu,
    openDashboard,
    closeDashboard,
    openPostType,
    closePostType,
    onOpenSwitchAccount,
    onCloseSwitchAccount,
  }),
    [
      openDashboardMenu,
      openPostTypeMenu,
      dashboardMenuOptions,
      postContentOptions,
      openSwitchAccountMenu,
      openDashboard,
      closeDashboard,
      openPostType,
      closePostType,
      onOpenSwitchAccount,
      onCloseSwitchAccount,
    ])
}
import { MdOutlineArrowBack } from "react-icons/md";
import { useAccount } from "../../hooks/useAccount";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { useCallback, useMemo } from "react";
import FollowerList from "./FollowerList";
import FollowingList from "./FollowingList";
import SubscriptionsList from "./SubscriptionsList";

function AllLists() {
  const { defaultAccount } = useAccount();
  const { name } = defaultAccount;
  const [searchParams] = useSearchParams();
  const { pathname } = useLocation();
  const active_tab = useMemo(() => searchParams.get("list"), [searchParams]);
  const navigate = useNavigate();

  const handleTabChange = useCallback(
    (value) => {
      searchParams.set("list", value);
      navigate(`?${searchParams.toString()}`);
    },
    [navigate, searchParams]
  );

  const list_type = useMemo(() => searchParams.get("list"), [searchParams]);

  return (
    <div className="flex w-full h-full overflow-y-auto no-scroll-thumb relative">
      <div className="flex flex-col w-full">
        {/* Top Section */}
        <div className="flex w-full py-5 px-4">
          <div className="flex items-center gap-6">
            <Link to={pathname}>
              <MdOutlineArrowBack size={28} />
            </Link>
            <span className="text-lg font-semibold">{name}</span>
          </div>
        </div>

        {/* Tabs section */}
        <div className="flex w-full">
          <div
            className={`flex flex-1 pb-3 text-sm font-medium border-b-2 cursor-pointer ${
              active_tab === "followers"
                ? "border-black"
                : "border-gray-300 text-gray-400"
            }`}
            onClick={() => handleTabChange("followers")}
          >
            <span className="flex w-full justify-center">41.6K followers</span>
          </div>
          <div
            className={`flex flex-1 pb-3 text-sm font-medium border-b-2 cursor-pointer ${
              active_tab === "following"
                ? "border-black"
                : "border-gray-300 text-gray-400"
            }`}
            onClick={() => handleTabChange("following")}
          >
            <span className="flex w-full justify-center">1.5K following</span>
          </div>
          <div
            className={`flex flex-1 pb-3 text-sm font-medium border-b-2 cursor-pointer ${
              active_tab === "subscriptions"
                ? "border-black"
                : "border-gray-300 text-gray-400"
            }`}
            onClick={() => handleTabChange("subscriptions")}
          >
            <span className="flex w-full justify-center">0 subscriptions</span>
          </div>
        </div>

        {/* Follower/Following List */}
        {list_type === "followers" && <FollowerList />}
        {list_type === "following" && <FollowingList />}
        {list_type === "subscriptions" && <SubscriptionsList />}
      </div>
    </div>
  );
}

AllLists.propTypes = {};

export default AllLists;

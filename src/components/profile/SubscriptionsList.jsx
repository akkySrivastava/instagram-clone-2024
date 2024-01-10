import { useDrawerHooks } from "../../hooks/useDrawerHooks";

function SubscriptionsList() {
  const { subscriptions_arr } = useDrawerHooks();
  return (
    <div className="flex flex-col w-full mt-2 px-4 gap-2 overflow-y-auto no-scroll-thumb">
      <div className="flex w-full py-3 font-medium rounded-lg items-center px-3">
        <span className="">Suggested subscriptions</span>
      </div>
      <div className="flex flex-col gap-3.5 w-full">
        {subscriptions_arr.map(({ id, src, photographer }) => {
          return (
            <div key={id} className="flex w-full items-center gap-3.5">
              <div className="flex">
                <span>
                  <img
                    className="w-16 h-16 object-cover rounded-full"
                    src={src?.tiny ?? ""}
                    alt=""
                  />
                </span>
              </div>
              <div className="flex flex-col flex-1">
                <div className="flex items-center gap-1">
                  <span className="truncate max-w-[150px] lowercase font-semibold">
                    {String(photographer).split(" ").join("_")}
                  </span>
                </div>
                <span className="text-gray-500 max-w-[150px] truncate">
                  {photographer}
                </span>
              </div>
              <div className="flex gap-2.5 items-center">
                <button className="px-3 py-1.5 rounded-lg font-semibold text-sm text-white bg-blue-600">
                  Subscribe
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

SubscriptionsList.propTypes = {};

export default SubscriptionsList;

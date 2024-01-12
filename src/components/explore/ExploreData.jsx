import { useMemo } from "react";
import { GoSearch } from "react-icons/go";
import { explore_data } from "../../data/raw_data";
import AllData from "./AllData";

const ExploreData = () => {
  const explore_data_items = useMemo(() => explore_data(), []);
  return (
    <div className="flex flex-col w-full py-2 overflow-y-auto no-scroll-thumb gap-3">
      <div className="flex w-full mx-3 bg-neutral-200 py-1.5 rounded-lg items-center gap-4 px-3">
        <span className="">
          <GoSearch />
        </span>
        <input
          type="text"
          // value={searchKey}
          // onChange={(e) => setSearchKey(e.target.value)}
          placeholder="Search"
          className="w-full bg-transparent p-0 border-none outline-none text-gray-800"
        />
      </div>
      <div className="flex flex-1">
        <div className="columns-3 row-auto gap-x-0.5 gap-y-0.5">
          {explore_data_items?.map((data, index) => (
            <AllData key={index} index={index} feed={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

ExploreData.propTypes = {};

export default ExploreData;

import Footer from "../../components/Footer";
import ExploreData from "../../components/explore/ExploreData";

function Explore() {
  return (
    <div className="flex w-screen h-svh overflow-hidden bg-black">
      <div className="flex w-full justify-center">
        <div className="flex flex-col bg-white max-sm:w-full w-[400px]">
          <ExploreData />
          <div className="flex w-full relative bg-white border-t-2 border-gray-400">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

Explore.propTypes = {};

export default Explore;

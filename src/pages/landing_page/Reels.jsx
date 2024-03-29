import { useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import ReelsModal from "../../components/reels/ReelsModal";
import SingleReel from "../../components/reels/SingleReel";

function Reels() {
  const { reels_id } = useParams();
  return (
    <div className="flex w-screen h-svh bg-black">
      <div className="flex w-full justify-center">
        <div className="flex flex-col bg-white max-sm:w-full w-[400px]">
          {reels_id ? <SingleReel /> : <ReelsModal />}
          {/* Footer Section */}
          <div className="flex w-full relative bg-white border-t-2 border-gray-400">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reels;

import Footer from "../../components/Footer";
import ReelsModal from "../../components/ReelsModal";

function Reels() {
  return (
    <div className="flex w-screen h-svh bg-black">
      <div className="flex w-full justify-center">
        <div className="flex flex-col bg-white max-sm:w-full w-[400px]">
          <ReelsModal />
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

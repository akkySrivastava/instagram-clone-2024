import StoriesModal from "../../components/StoriesModal";

function Stories() {
  return (
    <div className="flex w-screen h-screen overflow-hidden bg-black">
      <div className="flex w-full justify-center">
        <div className="flex flex-col bg-white max-sm:w-full w-[400px]">
          <StoriesModal />
        </div>
      </div>
    </div>
  );
}

export default Stories;

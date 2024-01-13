import PostWrapper from "../../components/post/PostWrapper";
import Footer from "../../components/Footer";

function Posts() {
  return (
    <div className="flex w-screen h-svh bg-black">
      <div className="flex w-full justify-center">
        <div className="flex flex-col bg-white max-sm:w-full w-[400px]">
          <PostWrapper />
          {/* Footer Section */}
          <div className="flex w-full relative bg-white border-t-2 border-gray-400">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

Posts.propTypes = {};

export default Posts;

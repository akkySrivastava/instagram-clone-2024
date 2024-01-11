import { BrandLogo } from "../../components/Logo";
import { dummy_post, profile_data } from "../../data/raw_data";
import Post from "../../components/Post";
import Footer from "../../components/Footer";
import UserStories from "../../components/UserStories";
import { BsHeart } from "react-icons/bs";

function Landing() {
  return (
    <>
      <div className="flex w-screen h-svh bg-black">
        <div className="flex w-full h-full justify-center">
          <div className="flex flex-col bg-white max-sm:w-full w-[400px]">
            {/* Header Section */}
            <div className="flex w-full h-[70px] border-b-2 border-neutral-200 shadow-md">
              <div className="flex w-full items-center p-4 justify-between">
                <div className="flex items-center">
                  <BrandLogo />
                </div>
                <div className="flex gap-5">
                  <span className="relative">
                    <BsHeart className="cursor-pointer" size="24" />
                    <span className="bg-red-600 w-2.5 h-2.5 absolute -top-1 -right-1 rounded-full"></span>
                  </span>
                  <span className="relative cursor-pointer">
                    <img
                      className="w-6 h-6"
                      src="https://cdn.iconscout.com/icon/premium/png-256-thumb/messenger-1867903-1580059.png?f=webp&w=128"
                    />
                    <span className="bg-red-600 w-5 h-5 text-white flex items-center justify-center text-[10px] absolute -top-2 -right-2 rounded-full">
                      <span className="font-bold">2</span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
            {/* Stories Section */}
            <div className="w-full overflow-y-auto no-scroll-thumb">
              <div className="flex w-full border-b-2 border-neutral-200">
                <div className="flex w-full py-2 overflow-x-auto">
                  <div className="flex items-center px-4 gap-6">
                    {profile_data.map(({ name, profile_img }, index) => (
                      <UserStories key={index} data={{ name, profile_img }} />
                    ))}
                  </div>
                </div>
              </div>
              {/* Posts section */}
              <div className="flex w-full flex-col">
                {dummy_post.map((post_data, index) => (
                  <Post key={index} post_data={post_data} />
                ))}
              </div>
            </div>

            {/* Footer Section */}
            <div className="flex w-full relative bg-white border-t-2 border-gray-400">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;

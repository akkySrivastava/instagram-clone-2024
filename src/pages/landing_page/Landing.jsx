import { BrandLogo } from "../../components/Logo";
import UserProfile from "../../components/UserProfile";
import { dummy_post, profile_data } from "../../data/raw_data";
import Post from "../../components/Post";
import Footer from "../../components/Footer";

function Landing() {
  return (
    <>
      <div className="flex w-screen h-screen bg-black">
        <div className="flex w-full h-full justify-center">
          <div className="flex flex-col bg-white max-sm:w-full w-[400px]">
            {/* Header Section */}
            <div className="flex w-full h-[70px] border-b-2 border-neutral-200 shadow-md">
              <div className="flex w-full py-1">
                <div className="flex items-center px-4 gap-6 py-2">
                  <BrandLogo />
                </div>
              </div>
            </div>
            {/* Stories Section */}
            <div className="w-full overflow-y-auto">
              <div className="flex w-full border-b-2 border-neutral-200">
                <div className="flex w-full py-2">
                  <div className="flex items-center px-4 gap-6">
                    {profile_data.map(({ name, profile_img }, index) => (
                      <UserProfile key={index} data={{ name, profile_img }} />
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

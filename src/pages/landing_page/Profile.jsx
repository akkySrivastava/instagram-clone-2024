import UserProfile from "../../components/UserProfile";
import Footer from "../../components/Footer";

function Profile() {
  return (
    <div className="flex w-screen h-svh bg-black">
      <div className="flex w-full justify-center">
        <div className="flex flex-col h-full bg-white max-sm:w-full w-[400px]">
          <UserProfile />
          {/* Footer Section */}
          <div className="flex max-sm:w-full w-[400px] bottom-0 bg-white border-t-2 border-gray-400">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

Profile.propTypes = {};

export default Profile;

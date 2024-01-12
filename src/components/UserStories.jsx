import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useAccount } from "../hooks/useAccount";
import { MdAdd } from "react-icons/md";

function UserStories({ data }) {
  const { name, profile_img } = data;
  const navigate = useNavigate();
  const { defaultAccount } = useAccount();
  const { name: default_name } = defaultAccount;
  return (
    <div className="flex flex-col items-center ">
      <div
        onClick={() => {
          if (name === default_name) return null;
          navigate(`/insta/stories/${name}`);
        }}
        className={`flex p-[3px] relative max-w-fit rounded-full ${
          name === default_name
            ? ""
            : "bg-gradient-to-r from-[#ffc600] via-[#ff0040] to-[#e600cc]"
        }  cursor-pointer`}
      >
        <img
          className="max-w-16 max-h-16 rounded-full items-center justify-center"
          src={profile_img}
          alt="profile1"
        />
        {name === default_name ? (
          <div className="bg-sky-500 text-white border-2 flex border-white font-bold absolute bottom-0 right-0 rounded-full w-6 h-6">
            <span className="p-0 w-full h-full flex items-center justify-center">
              <MdAdd />
            </span>
          </div>
        ) : null}
      </div>
      <span className="text-sm font-semibold">
        {name === default_name ? "Your story" : name}
      </span>
    </div>
  );
}

UserStories.propTypes = {
  data: PropTypes.object.isRequired,
};

export default UserStories;

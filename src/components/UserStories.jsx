import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function UserStories({ data }) {
  const { name, profile_img } = data;
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center">
      <div
        onClick={() => navigate("/insta/stories")}
        className="flex p-[3px] max-w-fit rounded-full bg-gradient-to-r from-[#ffc600] via-[#ff0040] to-[#e600cc] cursor-pointer"
      >
        <img
          className="w-16 h-16 rounded-full items-center justify-center"
          src={profile_img}
          alt="profile1"
        />
      </div>
      <span className="text-sm font-semibold">{name}</span>
    </div>
  );
}

UserStories.propTypes = {
  data: PropTypes.object.isRequired,
};

export default UserStories;

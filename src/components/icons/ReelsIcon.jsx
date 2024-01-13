import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import Reels from "../../assets/instagram.png";
function ReelsIcon({ overlay }) {
  const { pathname } = useLocation();
  if (pathname === "/insta/reels") {
    return <img width={24} height={24} src={Reels} alt="" />;
  }
  if (overlay) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="256"
        height="256"
        viewBox="0 0 256 256"
        xmlSpace="preserve"
      >
        <defs></defs>
        <g
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            fill: "black",
            fillRule: "nonzero",
            opacity: 1,
          }}
          transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
        >
          <path
            d="M 89.514 20.901 C 87.247 9.606 77.255 1.068 65.302 1.068 H 61.76 l 11.035 19.833 H 89.514 z"
            style={{
              stroke: "none",
              strokeWidth: 1,
              strokeDasharray: "none",
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeMiterlimit: 10,
              fill: "black",
              fillRule: "nonzero",
              opacity: 1,
            }}
            transform=" matrix(1 0 0 1 0 0) "
            strokeLinecap="round"
          />
          <polygon
            points="61.66,20.9 50.63,1.07 27.75,1.07 38.78,20.9 "
            style={{
              stroke: "none",
              strokeWidth: 1,
              strokeDasharray: "none",
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeMiterlimit: 10,
              fill: "black",
              fillRule: "nonzero",
              opacity: 1,
            }}
            transform="  matrix(1 0 0 1 0 0) "
          />
          <path
            d="M 17.254 2.22 C 8.772 4.908 2.261 12.057 0.486 20.901 h 27.162 L 17.254 2.22 z"
            style={{
              stroke: "none",
              strokeWidth: 1,
              strokeDasharray: "none",
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeMiterlimit: 10,
              fill: "black",
              fillRule: "nonzero",
              opacity: 1,
            }}
            transform=" matrix(1 0 0 1 0 0) "
            strokeLinecap="round"
          />
          <path
            d="M 0 30.631 v 33.603 c 0 13.618 11.08 24.697 24.698 24.697 h 40.604 C 78.92 88.931 90 77.852 90 64.234 V 30.631 H 0 z M 58.825 61.099 L 37.65 72.416 c -2.878 1.538 -6.357 -0.547 -6.357 -3.81 V 45.971 c 0 -3.263 3.479 -5.349 6.357 -3.81 l 21.175 11.317 C 61.87 55.105 61.87 59.471 58.825 61.099 z"
            style={{
              stroke: "none",
              strokeWidth: 1,
              strokeDasharray: "none",
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeMiterlimit: 10,
              fill: "black",
              fillRule: "nonzero",
              opacity: 1,
            }}
            transform=" matrix(1 0 0 1 0 0) "
            strokeLinecap="round"
          />
        </g>
      </svg>
    );
  }
  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1.04163"
        y="1.52081"
        width="20"
        height="20"
        rx="5"
        stroke="black"
        strokeWidth="1.5"
      />
      <line
        x1="1.04163"
        y1="6.52081"
        x2="21.0416"
        y2="6.52081"
        stroke="black"
        strokeWidth="1.5"
      />
      <path
        d="M12.5416 1.52083L16.0417 6.52084"
        stroke="black"
        strokeWidth="1.5"
      />
      <path
        d="M6.04164 1.52083L9.54167 6.52084"
        stroke="black"
        strokeWidth="1.5"
      />
      <path
        d="M14.0416 12.6548C14.7083 13.0397 14.7083 14.0019 14.0416 14.3868L9.54163 16.9849C8.87496 17.3698 8.04163 16.8887 8.04163 16.1189L8.04163 10.9227C8.04163 10.1529 8.87496 9.67181 9.54163 10.0567L14.0416 12.6548Z"
        fill="black"
      />
    </svg>
  );
}

ReelsIcon.propTypes = {
  overlay: PropTypes.object,
};

export default ReelsIcon;

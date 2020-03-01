import React from "react";
import PropTypes from "prop-types";

Marker.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
Marker.defaultProps = {
  color: "#F8A396",
  title: ""
};

function Marker(props) {
  const { color, title, ...other } = props;
  return (
    <div>
      <div
        className="pin bounce"
        style={{ backgroundColor: color, cursor: "pointer" }}
        title={title}
        {...other}
      />

      <style jsx>{`
        .pin {
          width: 30px;
          height: 30px;
          border-radius: 50% 50% 50% 0;
          background: #00cae9;
          position: absolute;
          transform: rotate(-45deg);
          left: 50%;
          top: 50%;
          margin: -20px 0 0 -20px;
        }
        .pin:after {
          content: "";
          width: 14px;
          height: 14px;
          margin: 8px 0 0 8px;
          background: #f5f5f5;
          position: absolute;
          border-radius: 50%;
        }

        .bounce {
          animation-name: bounce;
          animation-fill-mode: both;
          animation-duration: 1s;
        }

        @keyframes bounce {
          0% {
            opacity: 0;
            transform: translateY(-2000px) rotate(-45deg);
          }

          60% {
            opacity: 1;
            transform: translateY(30px) rotate(-45deg);
          }

          80% {
            transform: translateY(-10px) rotate(-45deg);
          }

          100% {
            transform: translateY(0) rotate(-45deg);
          }
        }
      `}</style>
    </div>
  );
}

export default Marker;

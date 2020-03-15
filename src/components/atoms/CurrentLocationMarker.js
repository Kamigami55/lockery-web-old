import React from "react";

function CurrentLocationMarker() {
  return (
    <div className="dot med">
      <span className="point">
        <span className="pulse"></span>
      </span>
      <style jsx>{`
        @-webkit-keyframes 'fade' {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        @-moz-keyframes 'fade' {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        @-ms-keyframes 'fade' {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        @-o-keyframes 'fade' {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        @keyframes 'fade' {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        @-webkit-keyframes pulse {
          0% {
            -webkit-transform: scale(0.32);
            opacity: 0.8;
          }
          50% {
            opacity: 1;
          }
          85% {
            -webkit-transform: scale(1);
          }
          100% {
            -webkit-transform: scale(1);
            opacity: 0;
          }
        }
        @-webkit-keyframes reset {
          0% {
            top: -5px;
            opacity: 0;
          }
          100% {
            top: 0;
            opacity: 1;
          }
        }
        @-moz-keyframes pulse {
          0% {
            -moz-transform: scale(0.32);
            opacity: 0.8;
          }
          50% {
            opacity: 1;
          }
          85% {
            -moz-transform: scale(1);
          }
          100% {
            -moz-transform: scale(1);
            opacity: 0;
          }
        }
        @-moz-keyframes reset {
          0% {
            top: -5px;
            opacity: 0;
          }
          100% {
            top: 0;
            opacity: 1;
          }
        }
        @keyframes pulse {
          0% {
            transform: scale(0.32);
            opacity: 0.8;
          }
          50% {
            opacity: 1;
          }
          85% {
            transform: scale(1);
          }
          100% {
            transform: scale(1);
            opacity: 0;
          }
        }
        @keyframes reset {
          0% {
            top: -5px;
            opacity: 0;
          }
          100% {
            top: 0;
            opacity: 1;
          }
        }
        .carouselWrapper {
          border-top: none;
          margin: 0;
          padding: 0;
          overflow: visible;
          position: relative;
        }
        .carouselWrapper .photoCarousel {
          border-top: none;
          clear: both;
          margin-top: -30px;
          padding: 10px 10px;
          overflow: scroll;
          text-align: center;
          white-space: nowrap;
        }
        .carouselWrapper .photoCarousel .photoThumb {
          display: inline-block;
          margin-left: 6px;
        }
        .carouselWrapper .photoCarousel .photoThumb:first-child {
          margin-left: 0;
        }

        .dot {
          transform: "translate(-50%, -50%)";
          width: 100%;
          position: relative;
          -webkit-animation-name: "fade";
          -moz-animation-name: "fade";
          -o-animation-name: "fade";
          animation-name: "fade";
          -webkit-animation-fill-mode: both;
          -moz-animation-fill-mode: both;
          -ms-animation-fill-mode: both;
          -o-animation-fill-mode: both;
          animation-fill-mode: both;
          -webkit-animation-duration: 0.3s;
          -moz-animation-duration: 0.3s;
          -ms-animation-duration: 0.3s;
          -o-animation-duration: 0.3s;
          animation-duration: 0.3s;
          -webkit-animation-iteration-count: 1;
          -moz-animation-iteration-count: 1;
          -ms-animation-iteration-count: 1;
          -o-animation-iteration-count: 1;
          animation-iteration-count: 1;
          -webkit-animation-timing-function: ease;
          -moz-animation-timing-function: ease;
          -ms-animation-timing-function: ease;
          -o-animation-timing-function: ease;
          animation-timing-function: ease;
          -webkit-animation-duration: 0.5s;
          -moz-animation-duration: 0.5s;
          -o-animation-duration: 0.5s;
          animation-duration: 0.5s;
        }

        .dot .point {
          background: #2ba7d9;
          border: 1px solid #0f7baf;
          display: block;
          height: 14px;
          left: 50%;
          margin-left: -7px;
          position: relative;
          text-align: center;
          top: 0;
          width: 14px;
          -moz-border-radius: 8px;
          -webkit-border-radius: 8px;
          border-radius: 8px;
          box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.3),
            inset 0 -1px 1px rgba(44, 77, 143, 0.7),
            0 1px 1px rgba(0, 0, 0, 0.2);
        }

        .dot .pulse {
          background: transparent;
          border: 1px solid #60c9e9;
          display: block;
          height: 64px;
          left: -26px;
          position: absolute;
          top: -26px;
          width: 64px;
          z-index: -1;
          -webkit-animation: pulse 2s ease-in-out infinite;
          -moz-animation: pulse 2s ease-in-out infinite;
          animation: pulse 2s ease-in-out infinite;
          -moz-border-radius: 32px;
          -webkit-border-radius: 32px;
          border-radius: 32px;
          -moz-box-shadow: #60c9e9 2px 2px 40px 0px;
          -webkit-box-shadow: #60c9e9 2px 2px 40px 0px;
          box-shadow: #60c9e9 2px 2px 40px 0px;
        }
      `}</style>
    </div>
  );
}

export default CurrentLocationMarker;

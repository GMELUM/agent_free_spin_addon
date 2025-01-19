import { HTMLAttributes } from "react";

export default (props: HTMLAttributes<SVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 22"
    width="128"
    height="22"
    fill="none"
    {...props}
  >
    <g filter="url(#a4)">
      <path fill="url(#b)" d="M0 0h128v17a5 5 0 0 1-5 5H5a5 5 0 0 1-5-5V0Z" />
      <path
        fill="#000"
        fill-opacity=".3"
        d="M0 0h128v17a5 5 0 0 1-5 5H5a5 5 0 0 1-5-5V0Z"
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1="0"
        x2="128"
        y1="11"
        y2="11"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#680A12" />
        <stop offset=".5" stop-color="#960F1B" />
        <stop offset="1" stop-color="#680A12" />
      </linearGradient>
      <filter
        id="a4"
        width="128"
        height="27.6"
        x="0"
        y="-5.6"
        color-interpolation-filters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="-8" />
        <feGaussianBlur stdDeviation="2.8" />
        <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="shape" result="effect1_innerShadow_5_8" />
      </filter>
    </defs>
  </svg>
);

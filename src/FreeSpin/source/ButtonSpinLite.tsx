import { SVGAttributes } from "react";

export default (props: SVGAttributes<SVGElement>) => (
  <svg
    width="375"
    height="200"
    viewBox="0 0 375 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#filter0_f_135_170)">
      <path
        d="M1 16H376L278 183.5H98L1 16Z"
        fill="url(#paint0_linear_135_170)"
        fill-opacity="0.3"
      />
    </g>
    <defs>
      <filter
        id="filter0_f_135_170"
        x="-14.8"
        y="0.2"
        width="406.6"
        height="199.1"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="7.9"
          result="effect1_foregroundBlur_135_170"
        />
      </filter>
      <linearGradient
        id="paint0_linear_135_170"
        x1="191"
        y1="40"
        x2="191"
        y2="181"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.263" stop-color="#737373" stop-opacity="0" />
        <stop offset="1" stop-color="#FFFEFE" />
      </linearGradient>
    </defs>
  </svg>
);

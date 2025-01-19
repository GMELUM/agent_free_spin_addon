import { HTMLAttributes } from "react";

export default (props: HTMLAttributes<SVGElement>) => (
  <svg
    width="31"
    height="30"
    viewBox="0 0 31 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clip-path="url(#clip0_135_194)">
      <path
        d="M15.75 30C24.0343 30 30.75 23.2843 30.75 15C30.75 6.71571 24.0343 0 15.75 0C7.46571 0 0.75 6.71571 0.75 15C0.75 23.2843 7.46571 30 15.75 30Z"
        fill="#0098EA"
      />
      <path
        d="M21.1524 8H10.347C8.36023 8 7.10099 10.1431 8.10052 11.8756L14.7692 23.4344C15.2044 24.1891 16.295 24.1891 16.7302 23.4344L23.4002 11.8756C24.3984 10.1459 23.1392 8 21.1538 8H21.1524ZM14.7638 19.9681L13.3115 17.1573L9.80714 10.8897C9.57596 10.4885 9.8615 9.97447 10.3456 9.97447H14.7625V19.9694L14.7638 19.9681ZM21.6895 10.8883L18.1866 17.1586L16.7342 19.9681V9.97312H21.1511C21.6352 9.97312 21.9207 10.4872 21.6895 10.8883Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_135_194">
        <rect width="30" height="30" fill="white" transform="translate(0.75)" />
      </clipPath>
    </defs>
  </svg>
);

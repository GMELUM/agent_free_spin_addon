import { SVGAttributes } from "react";

export default (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="30"
    height="30" {...props} >
    <rect width="100" height="100" rx="50" />
    <path
      d="M85.5,64.2c-2.7-7.4-8.9-14.1-10.2-21.9s-1.9-14.4-4.8-20.7a23.9,23.9,0,0,0-41,0c-2.9,6.3-3.5,13.9-4.8,20.7S17.2,56.8,14.5,64.2s1.6,14.4,7.4,18.2c7.4,3.8,16.1,6.1,24.5,7.4,6.5.9,13.5-1.1,19.9-3.2,3.5-1.2,8.6-2.1,11.8-4.2C83.9,78.6,87.9,71.1,85.5,64.2Z"
      fill="#fff" />
    <path
      d="M23.5,67.7c-.1-5.8,1.9-11.4,4.3-16.7s6.1-9.3,11.4-5.2c17.8,15.2,20.9-9,30.5.8,4.5,6.8,7.3,15.3,6.8,23.5s-6.9,11.8-13.2,14c-4.7,1.9-9.6,3.6-14.7,3.3A48.7,48.7,0,0,1,34.1,83C27.7,80.2,22.9,75,23.5,67.7ZM48.7,86.2h0c4.6-.3,8.7-3,11.7-6.2s3.6-6.2,4.9-9.4a93.7,93.7,0,0,0,3.1-8.9c.2-.9,1.2-3.3.6-3.9-1.4-2.2-4.2-3.5-6.7-2.1-7.4,4.1-12.5,10.4-20,2.1-1.6-1.5-3.2-3.7-5.5-3.9s-2.7,1.1-3.7,2.2-.4,1.9-.4,2.8c.2,3.1.4,6.2.7,9.2C34.6,76.3,39.5,85.6,48.7,86.2Z"
      fill="#050505" />
    <path
      d="M69.7,46.6C60.1,36.8,57,61,39.2,45.8c-3.1-2.4-5.8-1.9-7.9-.1l1.3,11.7a1.2,1.2,0,0,1,.5-1.4c1-1.1,2.1-2.2,3.7-2.2s3.9,2.4,5.5,3.9c7.5,8.3,12.6,2,20-2.1,2.5-1.4,5.3-.1,6.7,2.1a2.6,2.6,0,0,1-.1,2.1h0l2.8-9.9C71.1,48.8,70.4,47.7,69.7,46.6Z"
      fill="#1c1f2c" />
    <path
      d="M50.5,65.5c5.6-.1,9.7,3.1,7.3,9S50.5,82.2,46.2,79a10.6,10.6,0,0,1-4.6-8.8c.3-2.1,2.3-3.6,4.1-4.2S48.9,65.7,50.5,65.5Z"
      fill="#1c1f2c" />
  </svg>
);

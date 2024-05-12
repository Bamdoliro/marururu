import type { SVGProps } from 'react';
import React from 'react';

const IconTerms = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="10"
      height="17"
      viewBox="0 0 10 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M5 7V17" stroke="#414550" strokeWidth="4" />
      <path d="M5 0V4" stroke="url(#paint0_linear_13229_12001)" strokeWidth="4" />
      <defs>
        <linearGradient
          id="paint0_linear_13229_12001"
          x1="5.5"
          y1="0"
          x2="5.5"
          y2="4"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00C6FB" />
          <stop offset="0.859375" stopColor="#257CFF" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default IconTerms;

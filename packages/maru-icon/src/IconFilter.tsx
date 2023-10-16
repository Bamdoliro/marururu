import type { SVGProps } from 'react';

const IconFilter = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" {...props}>
            <mask
                id="mask0_9592_9255"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24">
                <rect width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_9592_9255)">
                <path
                    d="M11.3846 19.5C11.1334 19.5 10.9231 19.4153 10.7539 19.2461C10.5846 19.0769 10.5 18.8666 10.5 18.6153V12.8269L4.90196 5.71538C4.70966 5.45896 4.68178 5.19229 4.81831 4.91538C4.95484 4.63846 5.18529 4.5 5.50964 4.5H18.4903C18.8147 4.5 19.0451 4.63846 19.1817 4.91538C19.3182 5.19229 19.2903 5.45896 19.098 5.71538L13.5 12.8269V18.6153C13.5 18.8666 13.4153 19.0769 13.2461 19.2461C13.0769 19.4153 12.8666 19.5 12.6153 19.5H11.3846Z"
                    fill="#257CFF"
                />
            </g>
        </svg>
    );
};

export default IconFilter;

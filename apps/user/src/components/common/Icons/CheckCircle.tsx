import type { IconPropsType } from '@maru/ui';

const CheckCircleIcon = ({ size }: IconPropsType) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 150 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <mask
                id="mask0_4947_4342"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="150"
                height="150">
                <rect width="150" height="150" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_4947_4342)">
                <path
                    d="M66.4139 88.4134L51.8945 73.8942C51.0292 73.0288 49.9415 72.5861 48.6314 72.5661C47.3213 72.546 46.2135 72.9887 45.3081 73.8942C44.4027 74.7996 43.95 75.8974 43.95 77.1873C43.95 78.4773 44.4027 79.5751 45.3081 80.4805L62.4595 97.6319C63.5893 98.7617 64.9074 99.3266 66.4139 99.3266C67.9202 99.3266 69.2383 98.7617 70.3681 97.6319L105.14 62.8603C106.005 61.995 106.448 60.9073 106.468 59.5972C106.488 58.2871 106.045 57.1793 105.14 56.2739C104.234 55.3685 103.137 54.9158 101.847 54.9158C100.557 54.9158 99.4588 55.3685 98.5534 56.2739L66.4139 88.4134ZM75.2945 134.375C67.0824 134.375 59.3634 132.816 52.1376 129.7C44.9117 126.583 38.6262 122.353 33.2811 117.011C27.9358 111.668 23.7042 105.385 20.5862 98.1623C17.4682 90.9397 15.9092 83.2224 15.9092 75.0103C15.9092 66.7982 17.4675 59.0793 20.5842 51.8534C23.7008 44.6275 27.9305 38.342 33.2732 32.9969C38.6161 27.6517 44.8988 23.4201 52.1215 20.302C59.3441 17.184 67.0615 15.625 75.2736 15.625C83.4856 15.625 91.2046 17.1833 98.4304 20.3C105.656 23.4167 111.942 27.6464 117.287 32.9891C122.632 38.3319 126.864 44.6146 129.982 51.8373C133.1 59.06 134.659 66.7773 134.659 74.9894C134.659 83.2015 133.101 90.9204 129.984 98.1462C126.867 105.372 122.638 111.658 117.295 117.003C111.952 122.348 105.669 126.58 98.4465 129.698C91.2239 132.816 83.5066 134.375 75.2945 134.375ZM75.284 125C89.2424 125 101.065 120.156 110.753 110.469C120.44 100.781 125.284 88.9582 125.284 74.9998C125.284 61.0415 120.44 49.2186 110.753 39.5311C101.065 29.8436 89.2424 24.9998 75.284 24.9998C61.3257 24.9998 49.5028 29.8436 39.8153 39.5311C30.1278 49.2186 25.284 61.0415 25.284 74.9998C25.284 88.9582 30.1278 100.781 39.8153 110.469C49.5028 120.156 61.3257 125 75.284 125Z"
                    fill="#257CFF"
                />
            </g>
        </svg>
    );
};

export default CheckCircleIcon;

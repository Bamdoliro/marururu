import { IconPropsType } from "./type";

const BIcon = ({ onClick, cursor }: IconPropsType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      onClick={onClick}
      cursor={cursor}
    >
      <g opacity="0.7">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M36 18C36 27.941 27.941 36 18 36C8.059 36 0 27.941 0 18C0 8.059 8.059 0 18 0C27.941 0 36 8.059 36 18Z"
          fill="#BBBCC2"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.2477 19.452V22.398H18.7987C20.2097 22.398 20.8327 21.858 20.8327 20.904C20.8327 19.95 20.3137 19.452 18.7367 19.452H16.2477ZM16.2477 13.582V16.278H18.8817C20.1687 16.278 20.6457 15.698 20.6457 14.888C20.6457 14.058 20.1267 13.581 18.8617 13.581L16.2477 13.582ZM12.7207 10.428H18.7157C22.3677 10.428 24.2347 11.921 24.2347 14.763C24.2347 16.133 23.6747 17.108 22.6997 17.73C23.8607 18.394 24.5247 19.452 24.5247 20.988C24.5247 24.141 22.3467 25.572 18.7157 25.572H12.7207V10.428Z"
          fill="white"
        />
      </g>
    </svg>
  );
};

export default BIcon;

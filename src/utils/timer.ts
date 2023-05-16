import { Dispatch, SetStateAction } from "react";

export const timer = (setTime: Dispatch<SetStateAction<number>>) => {
  const interval = setInterval(() => {
    setTime((prev) => prev - 1);
  }, 1000);

  return () => clearInterval(interval);
};

export const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (time % 60).toString().padStart(2, "0");

  return `${minutes}:${seconds}`;
};

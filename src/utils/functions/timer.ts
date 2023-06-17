import moment from "moment";
import { Dispatch, SetStateAction, useEffect } from "react";

interface PropsType {
  time: number;
  setTime: Dispatch<SetStateAction<number>>;
}

export const timer = ({ time, setTime }: PropsType) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    if (time === 0) {
      setTime(0);
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [time, setTime]);
};

export const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (time % 60).toString().padStart(2, "0");

  return `${minutes}:${seconds}`;
};

export const getDDay = (remainDays: number) => {
  remainDays = Math.floor(remainDays);
  if (remainDays > 0) {
    return `D-${remainDays}`;
  } else if (remainDays <= -2) {
    return `D+${-remainDays - 1}`;
  } else {
    return "D-Day";
  }
};

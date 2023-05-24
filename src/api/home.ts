import { maru } from "./index";

export const getSchedule = async () => {
  const { data } = await maru.get("schedule/list");
  console.log(data);
  return data;
};

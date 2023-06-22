import { noticeHandlers } from "./notice";
import { mainHandlers } from "./main";
import { faqHandlers } from "./faq";

export const handlers = [...noticeHandlers, ...mainHandlers, ...faqHandlers];

console.log(handlers);

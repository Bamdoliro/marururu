import { noticeHandlers } from "./notice";
import { mainHandlers } from "./main";

export const MOCK_API_BASE_URL = "http://localhost:3000";

export const handlers = [...noticeHandlers, ...mainHandlers];

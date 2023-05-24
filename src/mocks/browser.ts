import { setupWorker } from "msw";
import { handlers } from "./handlers";

export const owrker = setupWorker(...handlers);

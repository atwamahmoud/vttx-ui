import {api} from "../../electron/bridge";

declare global {
  // eslint-disable-next-line
  interface Window {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    Main: typeof api;
  }
}

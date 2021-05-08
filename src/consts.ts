export type ControlMessage =
  | {
      type: "play" | "pause";
    }
  | { type: "seeked"; currentTime: number };

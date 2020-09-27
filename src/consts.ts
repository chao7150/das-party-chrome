export type EventType = "play" | "pause" | "seeked";

export type ControlMessage =
  | {
      type: "play" | "pause";
    }
  | { type: "seeked"; currentTime: number };

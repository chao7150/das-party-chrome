import { getVideoElement, isPlaying, play } from "./play";

setInterval(() => {
  const videoElement = getVideoElement();
  if (videoElement.isSome()) {
    if (!isPlaying(videoElement.some())) {
      play(videoElement.some());
    }
  }
}, 1000);

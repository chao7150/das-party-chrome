import { Maybe, None, Some } from "monet";

export const getVideoElement = (): Maybe<HTMLVideoElement> => {
  const element = document.getElementById("video");
  if (element instanceof HTMLVideoElement) {
    return Some(element);
  }
  return None();
};

export const isPlaying = (videoElement: HTMLVideoElement): boolean =>
  !videoElement.paused;

export const play = (videoElement: HTMLVideoElement): Promise<void> =>
  videoElement.play();

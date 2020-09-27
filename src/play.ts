const delay = (ms: number) =>
  new Promise((resolve, reject) => setTimeout(resolve, ms));

export const getVideoElement = async (): Promise<HTMLVideoElement> => {
  await delay(3000);
  const element = document.getElementById("video");
  if (element instanceof HTMLVideoElement) {
    return element;
  }
  throw new Error("no video element");
};

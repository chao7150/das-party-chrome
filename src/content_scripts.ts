import { ControlMessage } from "./consts";
import { getVideoElement } from "./play";

const run = async () => {
  // roomidが指定されていないときはなにもしない
  const url = new URL(location.href);
  if (!url.searchParams.has("roomid")) {
    return undefined;
  }

  // initialize
  const socket = new WebSocket(
    `wss://matcha.chao.tokyo?roomid=${url.searchParams.get("roomid")}`,
  );

  const videoElement = await getVideoElement();
  console.log("video element loaded");

  // sender
  videoElement.onplay = (event) =>
    socket.send(JSON.stringify({ type: "play" }));
  videoElement.onpause = (event) =>
    socket.send(JSON.stringify({ type: "pause" }));
  videoElement.onseeked = (event) =>
    socket.send(
      JSON.stringify({ type: "seeked", currentTime: videoElement.currentTime }),
    );

  // receiver
  socket.addEventListener("message", (message) => {
    const event: ControlMessage = JSON.parse(message.data);
    switch (event.type) {
      case "play":
        videoElement.play();
        break;
      case "pause":
        videoElement.pause();
        break;
      case "seeked":
        // 自分のseekイベントが反射されてきたときは無視する
        if (Math.abs(videoElement.currentTime - event.currentTime) > 1) {
          videoElement.currentTime = event.currentTime;
        }
    }
  });
};

run();

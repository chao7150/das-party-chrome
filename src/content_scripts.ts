import { ControlMessage } from "./consts";
import { getVideoElement } from "./play";

const run = async () => {
  // initialize
  const socket = new WebSocket("ws://localhost:8080");
  socket.addEventListener("open", (event) => socket.send(location.href));
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
    console.log(message.data);
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

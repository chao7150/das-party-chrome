const createRoomButton = document.getElementById("create-room");

if (!createRoomButton) {
  console.error("no button found");
  process.exit();
}

createRoomButton.onclick = (ev: MouseEvent) => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tab = tabs[0];
    if (!tab?.url) {
      return undefined;
    }
    // 既にroomidがついているときroomidを付与しない
    const url = new URL(tab.url);
    if (url.searchParams.has("roomid")) {
      return undefined;
    }
    const roomid = Math.floor(Math.random() * 10000);
    chrome.tabs.executeScript(tab.id!, {
      code: `location.href = location.href + "&roomid=${roomid}";`,
    });
  });
};

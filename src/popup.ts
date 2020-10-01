const createRoomButton = document.getElementById("create-room");

if (!createRoomButton) {
  console.error("no button found");
  process.exit();
}

createRoomButton.onclick = (ev: MouseEvent) => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.executeScript(tabs[0].id!, {
      code: 'location.href = location.href + "&roomid=hoge";',
    });
  });
};

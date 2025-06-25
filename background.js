let activeTab = null;
let activeStartTime = null;

chrome.tabs.onActivated.addListener(async (activeInfo) => {
  const tab = await chrome.tabs.get(activeInfo.tabId);
  handleTabChange(tab.url);
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tab.active && changeInfo.status === "complete") {
    handleTabChange(tab.url);
  }
});

function handleTabChange(url) {
  const now = Date.now();
  if (activeTab && activeStartTime) {
    const timeSpent = now - activeStartTime;
    console.log(`Spent ${timeSpent / 1000} sec on ${activeTab}`);
    
    // Send data to backend
    sendDataToBackend(activeTab, timeSpent);
  }
  activeTab = url;
  activeStartTime = now;
}

function sendDataToBackend(url, timeSpent) {
  fetch("http://localhost:5000/api/track", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      url,
      timeSpent
    })
  })
  .then(res => console.log("Data sent to backend"))
}


chrome.runtime.onStartup.addListener(() => {
  activeTab = null;
  activeStartTime = null;
});

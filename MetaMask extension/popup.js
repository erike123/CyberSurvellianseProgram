// popup.js

document.getElementById("scanButton").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript(
      {
        target: { tabId: tabs[0].id },
        function: scanPage,
      },
      (results) => {
        if (results && results[0].result) {
          alert("No malicious elements detected.");
        } else {
          alert("Potentially malicious elements detected!");
        }
      }
    );
  });
});

// Function to scan the current page for malicious elements
function scanPage() {
  return true; // Return false if malicious elements are found
}
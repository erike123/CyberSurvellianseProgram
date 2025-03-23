// content.js

// Function to extract transaction data from the webpage (this will vary based on the dApp's implementation)
function getTransactionData() {
  return {
    to: "0xAddress",
    value: "0",
    data: "0xData"
  };
}

// Function to send transaction data to the background script for analysis
function analyzeTransaction(transactionData) {
  chrome.runtime.sendMessage(
    { action: "checkTransaction", data: transactionData },
    (response) => {
      if (response.isMalicious) {
        alert("Warning: This transaction is potentially malicious!");
      }
    }
  );
}

// Example: Monitor for transaction submissions (this will vary based on the dApp's implementation)
document.addEventListener("submit", (event) => {
  const transactionData = getTransactionData();
  analyzeTransaction(transactionData);
});
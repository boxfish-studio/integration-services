sign.addEventListener('click', () => {
  var secretKey = document.getElementById('secretKey').value;
  console.log(secretKey);
  document.getElementById('output').innerText = secretKey;
  chrome.storage.sync.set({ secretKey });
});

injector.addEventListener('click', async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: injectSignedNonce
  });
});

function injectSignedNonce() {
    chrome.storage.sync.get("secretKey", ({secretKey}) => {
        var backendUrl = "http://localhost:3005"
        var id = 2
        var result = axios.get(`backendUrl/nonce/${id}`)
        console.log(result)
        document.getElementById('signedNonce').value = secretKey
    })
}
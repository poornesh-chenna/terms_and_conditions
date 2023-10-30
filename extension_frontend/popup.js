var site
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  if (tabs.length > 0) {
    site = tabs[0].url.split('/')[2]
    console.log(site)
    chrome.scripting.executeScript(
      {
        target: { tabId: tabs[0].id },
        function: function () {
          return {
            title: document.title,
            text: document.documentElement.innerText,
          }
        },
      },
      function (result) {
        if (chrome.runtime.lastError) {
          console.error(chrome.runtime.lastError)
        } else {
          console.log(result[0].result.title)
          document.getElementById('title').innerHTML = result[0].result.title
          // document.getElementById('content').innerHTML = result[0].result.text
        }
      }
    )
  } else {
    console.error('No active tabs found in the current window.')
  }
})

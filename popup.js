document.addEventListener('DOMContentLoaded', function () {
    chrome.tabs.executeScript( {
      code: "window.getSelection().toString();"
    }, function(selection) {
      document.getElementById("content").textContent = selection[0];
    });
  });
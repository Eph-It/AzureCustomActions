function saveOptions(e) {
    e.preventDefault();
    browser.storage.sync.set({
      color: document.querySelector("#color").value
    });
  }
  
  function restoreOptions() {
  
    function setCurrentChoice(result) {
      var jsonSettings = result.AzureCustomActionsSettings;
      document.querySelector("#existing_actions").value = result.color || "{}";
    }
  
    function onError(error) {
      console.log(`Error: ${error}`);
    }
  
    var getting = browser.storage.sync.get("AzureCustomActionsSettings");
    getting.then(setCurrentChoice, onError);
  }
  
  document.addEventListener("DOMContentLoaded", restoreOptions);
  document.querySelector("form").addEventListener("submit", saveOptions);
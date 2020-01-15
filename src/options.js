function saveOptions(e) {
    e.preventDefault();
    browser.storage.sync.set({
      AzureCustomActionsSettings: JSON.stringify(AzureCustomActionsSettings)
    });
  }

  function AddNew(){
    var newAction = new Object();
    newAction.Name = document.getElementById("ActionNameText").value;
    
    if(newAction.Name == null){
      return;
    }
    newAction.ShowOnURL = document.querySelector("#ActionShowOnURL").value;
    newAction.Webhook = document.querySelector("#ActionWebhook").value;
    AzureCustomActionsSettings.push(newAction);
    RefreshSelectList();
  }

  function RemoveFromArray(){

  }

  function ActionListSelectionChange(){
    
    var acaSettingsLength = AzureCustomActionsSettings.length;
    for (i = 0; i < acaSettingsLength; i++) {

    }
  }

  function RefreshSelectList(){
    var selectList = document.getElementById("existing_actions");
    var length = selectList.options.length;
    for (i = 0; i < length; i++) {
      selectList.options[i] = null;
    }
  
    var acaSettingsLength = AzureCustomActionsSettings.length;
    for (i = 0; i < acaSettingsLength; i++) {
      var newOption = document.createElement("option");
      newOption.text = AzureCustomActionsSettings[i].Name;
      selectList.add(newOption);
    }
    
  }
  
  function restoreOptions() {
  
    function setCurrentChoice(result) {
      AzureCustomActionsSettings = result.AzureCustomActionsSettings;
      RefreshSelectList();
    }
  
    function onError(error) {
      console.log(`Error: ${error}`);
    }
  
    //var getting = browser.storage.sync.get("AzureCustomActionsSettings");
    //getting.then(setCurrentChoice, onError);
  }
  
  var AzureCustomActionsSettings = new Array();
  document.addEventListener("DOMContentLoaded", restoreOptions);
  //document.querySelector("form").addEventListener("submit", saveOptions);
  document.getElementById("ACAAddButton").addEventListener("click", AddNew)
  document.getElementById("ACARemoveButton").addEventListener("click", RemoveFromArray)
  document.getElementById("ACAActionList").addEventListener("click", ActionListSelectionChange)
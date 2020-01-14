function AddACAMenu() {
    let commandBarList = document.querySelectorAll('.fxs-commandBar-itemList');
    if(commandBarList == null){
        return;
    }
    if(commandBarList[0] == null){
        return;
    }
    var arrayLength = commandBarList.length;
    for(var i = 0; i < arrayLength; i++){
        var lastCh = commandBarList[i].lastElementChild
        if(!(lastCh.classList.contains("AzureCustomActions"))){
            var li = document.createElement("li");
            var div1 = document.createElement("div");
            var div2 = document.createElement("div");
            var div3 = document.createElement("div");
            li.className = "AzureCustomActions azc-toolbar-item azc-toolbarButton fxs-commandBar-item";
            div1.className = "AzureCustomActionsTools fxs-portal-hover AzureCustomActionsdropdown";
            div2.className = "azc-toolbarButton-label fxs-commandBar-item-text";
            div2.innerHTML = "Azure Custom Actions";
            div3.className = "AzureCustomActionsdropdown-content";
            div3.innerHTML = `
            <a href="#">Tool 1</a>
            <a href="#">Tool 2</a>
            <a href="#">Tool 3</a>
            <a href="#">Tool 4</a>
            `
            div2.appendChild(div3);
            div1.appendChild(div2);
            li.appendChild(div1);
            
            li.setAttribute("id","PortalTools");
            commandBarList[i].appendChild(li);
        }

    }

}

var acaInterval = setInterval(AddACAMenu, 2000);

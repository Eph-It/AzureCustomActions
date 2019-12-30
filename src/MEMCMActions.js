    function AddEphingMenu() {
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
            console.log("test");
            if(!(lastCh.classList.contains("EphingItem"))){
                var li = document.createElement("li");
                var div1 = document.createElement("div");
                var div2 = document.createElement("div");
                var div3 = document.createElement("div");
                li.className = "EphingItem azc-toolbar-item azc-toolbarButton fxs-commandBar-item";
                div1.className = "EphingTools fxs-portal-hover dropdown";
                div2.className = "azc-toolbarButton-label fxs-commandBar-item-text";
                div2.innerHTML = "Right Click Tools";
                div3.className = "dropdown-content";
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

var ephInterval = setInterval(AddEphingMenu, 2000);

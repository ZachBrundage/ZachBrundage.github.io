var count = 0;
function createItemAtBottom() {
    
    // Get Input Field Values
    var title = document.getElementById("Title").value;
    var priority = document.getElementById("Priority").value;
    var dueDate = document.getElementById("dueDate").value;
    var desc = document.getElementById("desc").value;
    
    // Create New List Item
    var newItem = document.createElement("div");
    newItem.className = "listContainerCenter";
    newItem.id = count;

    // Create New List Content
    var newTitle = document.createElement("h3");
    newTitle.innerHTML = title;
    var newPriority = document.createElement("h3");
    newPriority.innerHTML = priority;
    var newDueDate = document.createElement("h3");
    newDueDate.innerHTML = dueDate;
    var newDesc = document.createElement("p");
    newDesc.innerHTML = desc;
    newDesc.className = "listText";
    var newSpan = document.createElement("span");
    newSpan.class = count;
    newSpan.innerHTML = '<button onclick="deleteItem(this.parentNode.class)">Complete / Remove</button>';
    
    // Append List Items To New List
    newItem.appendChild(newTitle);
    newItem.appendChild(newPriority);
    newItem.appendChild(newDueDate);
    newItem.appendChild(newDesc);
    newItem.appendChild(newSpan);
    
    // Append New List Item to List Div
    document.getElementById("list").appendChild(newItem); 
    count++;
}

function createItemAtTop(){
    
    // Get Input Field Values
    var title = document.getElementById("Title").value;
    var priority = document.getElementById("Priority").value;
    var dueDate = document.getElementById("dueDate").value;
    var desc = document.getElementById("desc").value;
    
    // Create New List Item
    var newItem = document.createElement("div");
    newItem.className = "listContainerCenter";
    newItem.id = count;
    
    
    // Create New List Content
    var newTitle = document.createElement("h3");
    newTitle.innerHTML = title;
    var newPriority = document.createElement("h3");
    newPriority.innerHTML = priority;
    var newDueDate = document.createElement("h3");
    newDueDate.innerHTML = dueDate;
    var newDesc = document.createElement("p");
    newDesc.innerHTML = desc;
    newDesc.className = "listText";
    var newSpan = document.createElement("span");
    newSpan.class = count;
    newSpan.innerHTML = '<button onclick="deleteItem(this.parentNode.class)">Complete / Remove</button>';
    
    // Append List Items To New List
    newItem.appendChild(newTitle);
    newItem.appendChild(newPriority);
    newItem.appendChild(newDueDate);
    newItem.appendChild(newDesc);
    newItem.appendChild(newSpan);
    
    // Append New List Item to List Div
    document.getElementById("list").appendChild(newItem);
    
    // Set New Item To Top of List
    var list = document.getElementById("list");
    list.insertBefore(newItem, list.childNodes[2]);
    count++;
}

function deleteItem(param){
    var el = document.getElementById(param);
    var list = document.getElementById("list");
    list.removeChild(el);
}
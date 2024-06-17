var inputText = document.getElementById("input");
var listContainer = document.getElementById("list-container");

function addInput() {
    if(inputText.value === ""){
        alert("Enter Something")
    }
    else{
    let contentDisplay = document.createElement("li");
    contentDisplay.innerHTML = inputText.value;
    listContainer.appendChild(contentDisplay);
    
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    contentDisplay.appendChild(span);
    }
    inputText.value = '';
    saveData()
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showData() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showData();
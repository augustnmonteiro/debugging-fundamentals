function addItem() {
    let newItem = document.getElementById("newItem").value;

    if (newItem !== "") {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(newItem));

        document.getElementById("list").appendChild(ll);

        document.getElementById("newItem").value = "";
    } else {
        alert("Please, enter a valid element.");
    }
}

const addNewItem = addItem();

document.getElementById('btnAddItem').addEventListener('click', addNewltem);

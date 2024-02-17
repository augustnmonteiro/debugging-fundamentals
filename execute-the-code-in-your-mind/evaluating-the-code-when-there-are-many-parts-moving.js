let itemsToBuy = [
    {item: "Banana", currentQuantiy: 5, minQuantity: 10},
    {item: "Beans", currentQuantiy: 20, minQuantity: 10},
    {item: "Bread", currentQuantiy: 2, minQuantity: 5},
    {item: "Rice", currentQuantiy: 30, minQuantity: 50},
    {item: "Peanut Butter", currentQuantiy: 2, minQuantity: 1},
]

function getItemsInNeed() {
    let ItemsInNeed = [];

    for (let i = 0; i<itemsToBuy.length; i++) {
        let item = itemsToBuy[i];

        if(item.currentQuantiy < item.minQuantity) {
            ItemsInNeed.push(item);
        }

        return ItemsInNeed;
    }
}

console.log(getItemsInNeed())

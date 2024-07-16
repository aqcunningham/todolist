let list = [];

while (true) {
    let promptt = prompt("What would you like to do?")
    if (promptt.toLowerCase() === 'quit' || promptt.toLowerCase() === 'q') {
        console.log("OK, Quit the app");
        break;
    }
    else if (promptt === "new") {

        let newList = prompt("Enter new todo").toUpperCase();
        console.log(`${newList} added to the list`);
        list.push(newList);
    }
    else if (promptt === "list") {
        console.log('******');
        for (let i of list) {
            // prints out index first, then the value
            console.log(`${list.indexOf(i)}: ${i}`)
        }
        console.log('******');
    }
    else if (promptt === "delete") {
        let deleteIndex = prompt("Enter an index of todo to delete");
        // just to check the flow
        // console.log(`index to delete ${deleteIndex}`) 

        // a simpler way to iterate through an array
        if (deleteIndex in list) {
            let deletedChor = list.splice(deleteIndex, 1);
            console.log(`Ok, ${deleteIndex}: ${deletedChor} deleted from the list`)
        }
        else if (console.log('Unknown index'));
    }
}




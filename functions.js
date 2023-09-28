// List Function 
function list (clients) {
    // Creates variable clientArray and uses the .map() method to iterate over the client object and returns them as HTML strings using the template provided   
    const clientArray = clients.map((client) => {
        // Returns objects as HTML strings
        return `
        <li class="list-group-item d-flex justify-content-between" data-index="${client.index}">
        ${client.name}
        <strong>${client.balance}</strong>
        </li>
        `
    })

    // Takes the items and joins them into a string
    const clientJoin = clientArray.join('')

    return clientJoin;
}

// Order Function
function order (clients, property) {
    // Compares the property of each client object, making sure the array is sorted properly
    clients.sort((a, b) => {
        if (a[property] < b[property]) {
            return -1;
        } else if (a[property] > b[property]){
            return 1;
        } else {
        return 0; 
        }
    })

    return clients
}

// Total Function
function total (clients) {  
    const totalBalance = clients.reduce((accumulator, client) => {
        
    })
}




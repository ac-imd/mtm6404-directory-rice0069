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
        return accumulator + client.balance;
    }, 0)
    
    return totalBalance
}

// Info Function **
const info = (index) => {
    // Searches through the clients array and finds 
    const desiredClient = clients.find((client, arrayIndex) => arrayIndex === index)
    return desiredClient
}

// Search function
const search = (query) => {
    // Converts the query to lowercase for non case sensitive comparison
    const lowerCaseQuery = query.toLowerCase()

    // Filters and returns an array of clients whose names contain the provided search query
    const matchingClients = clients.filter((client) => {
        // Converts the name of the inputted client to lowercase for non case sensitive search
        const lowerCaseName = client.name.toLowerCase()

        // .includes() checks if the clients name is included in the search query
        return lowerCaseName.includes(lowerCaseQuery)
    })
    return matchingClients
}







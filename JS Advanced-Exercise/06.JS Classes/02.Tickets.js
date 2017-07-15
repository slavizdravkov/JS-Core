function solve(ticketArray, sortingMethod) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    let tickets = [];

    for (let ticket of ticketArray) {
        let [destination, price, status] = ticket.split('|');
        tickets.push(new Ticket(destination, price, status));
    }

    return tickets.sort((a, b) => a[sortingMethod] > b[sortingMethod]);
}

console.log(solve(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'status'
));
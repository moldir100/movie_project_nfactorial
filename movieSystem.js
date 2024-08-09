class CinemaTicketSystem {
    constructor() {
        this.movies = [];
        this.users = [];
        this.tickets = [];
        this.movieIdCounter = 1;
        this.userIdCounter = 1;
        this.ticketIdCounter = 1;
    }

    addMovie(movieName) {
        const movie = {
            id: this.movieIdCounter++,
            name: movieName
        };
        this.movies.push(movie);
        return movie.id;
    }

    showAllMovies() {
        return this.movies.map(movie => `${movie.id}: ${movie.name}`).join('\n');
    }

    addUser(userName) {
        const user = {
            id: this.userIdCounter++,
            name: userName
        };
        this.users.push(user);
        return user.id;
    }

    buyTicket(userId, movieId) {
        const movieExists = this.movies.some(movie => movie.id === movieId);
        const userExists = this.users.some(user => user.id === userId);

        if (!movieExists || !userExists) {
            throw new Error('User or Movie does not exist.');
        }

        const ticket = {
            id: this.ticketIdCounter++,
            userId: userId,
            movieId: movieId
        };
        this.tickets.push(ticket);
        return ticket.id;
    }

    cancelTicket(ticketId) {
        const ticketIndex = this.tickets.findIndex(ticket => ticket.id === ticketId);

        if (ticketIndex === -1) {
            return false;
        }

        this.tickets.splice(ticketIndex, 1);
        return true;
    }
}

// Пример использования
const cinemaSystem = new CinemaTicketSystem();

const movieId1 = cinemaSystem.addMovie('Inception');
const movieId2 = cinemaSystem.addMovie('The Matrix');
console.log(cinemaSystem.showAllMovies());

const userId1 = cinemaSystem.addUser('Alice');
const userId2 = cinemaSystem.addUser('Bob');

const ticketId1 = cinemaSystem.buyTicket(userId1, movieId1);
console.log('Ticket ID:', ticketId1);

const cancelResult = cinemaSystem.cancelTicket(ticketId1);
console.log('Cancel Ticket:', cancelResult);

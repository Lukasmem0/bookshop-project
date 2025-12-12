const { books, users } = require('../data/mockData');

class BookRepository {
    // Task 1, 2, 3, 4: READ Operations
    getAllBooks() { return books; }
    getBookByISBN(isbn) { return Object.values(books).find(book => book.isbn === isbn); }
    getBooksByAuthor(author) { return Object.values(books).filter(book => book.author.toLowerCase() === author.toLowerCase()); }
    getBooksByTitle(title) { return Object.values(books).filter(book => book.title.toLowerCase().includes(title.toLowerCase())); }

    // Task 5: Get Reviews
    getReviews(isbn) {
        const book = this.getBookByISBN(isbn);
        return book ? book.reviews : null;
    }

    // Task 8: Add/Update Review
    addOrUpdateReview(isbn, userId, reviewText) {
        const book = this.getBookByISBN(isbn);
        if (book) {
            book.reviews[userId] = reviewText;
            return true;
        }
        return false;
    }

    // Task 9: Delete Review
    deleteReview(isbn, userId) {
        const book = this.getBookByISBN(isbn);
        if (book && book.reviews[userId]) {
            delete book.reviews[userId];
            return true;
        }
        return false;
    }
}

module.exports = new BookRepository();
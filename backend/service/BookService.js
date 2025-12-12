const BookRepository = require('../repository/BookRepository');

class BookService {
    // Task 1-5 (Chỉ thêm logic kiểm tra lỗi)
    getAllBooks() { return BookRepository.getAllBooks(); }

    getBookByISBN(isbn) {
        const book = BookRepository.getBookByISBN(isbn);
        if (!book) throw new Error("Book not found.");
        return book;
    }

    // ... getBooksByAuthor, getBooksByTitle (Tương tự)

    getReviews(isbn) {
        const reviews = BookRepository.getReviews(isbn);
        if (!reviews) throw new Error("Book not found.");
        return reviews;
    }

    // Task 8: Add/Modify a book review
    addOrUpdateReview(isbn, userId, reviewText) {
        const success = BookRepository.addOrUpdateReview(isbn, userId, reviewText);
        if (!success) throw new Error("Could not add/update review. Book not found.");
        return { message: "Review successfully added/updated." };
    }

    // Task 9: Delete book review
    deleteReview(isbn, userId) {
        const success = BookRepository.deleteReview(isbn, userId);
        if (!success) throw new Error("Review not found or user unauthorized.");
        return { message: "Review successfully deleted." };
    }
}

module.exports = new BookService();
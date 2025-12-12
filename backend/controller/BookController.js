const BookService = require('../service/BookService');

class BookController {
    // Task 1: GET /
    getAllBooks(req, res) {
        try {
            const books = BookService.getAllBooks();
            return res.status(200).json(books);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    // Task 2: GET /isbn/:isbn
    getBookByISBN(req, res) {
        try {
            const book = BookService.getBookByISBN(req.params.isbn);
            return res.status(200).json(book);
        } catch (error) {
            return res.status(404).json({ message: error.message });
        }
    }

    // ... getBooksByAuthor, getBooksByTitle, getReviews (Tương tự)

    // Task 8: PUT /reviews/:isbn (Cần JWT xác thực)
    addOrUpdateReview(req, res) {
        try {
            // req.user.id được lấy từ Auth Middleware
            const userId = req.user.id;
            const isbn = req.params.isbn;
            const { review } = req.body;

            const result = BookService.addOrUpdateReview(isbn, userId, review);
            return res.status(200).json(result);
        } catch (error) {
            return res.status(404).json({ message: error.message });
        }
    }

    // Task 9: DELETE /reviews/:isbn (Cần JWT xác thực)
    deleteReview(req, res) {
        try {
            const userId = req.user.id;
            const isbn = req.params.isbn;

            const result = BookService.deleteReview(isbn, userId);
            return res.status(200).json(result);
        } catch (error) {
            // Lỗi 403 Forbidden nếu user không sở hữu review
            return res.status(403).json({ message: error.message });
        }
    }
}

module.exports = new BookController();
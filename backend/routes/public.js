const express = require('express');
const router = express.Router();
const BookController = require('../controller/BookController'); // Đây là instance của Class

// Task 1: GET / - Get the book list available in the shop.
// THAY THẾ: router.get('/', BookController.getAllBooks);
router.get('/', (req, res, next) => BookController.getAllBooks(req, res, next));

// Task 2: GET /isbn/:isbn - Get the books based on ISBN.
router.get('/isbn/:isbn', (req, res, next) => BookController.getBookByISBN(req, res, next));

// Task 3: GET /author/:author - Get all books by Author.
router.get('/author/:author', (req, res, next) => BookController.getBookByAuthor(req, res, next));

// Task 4: GET /title/:title - Get all books based on Title.
router.get('/title/:title', (req, res, next) => BookController.getBookByTitle(req, res, next));

// Task 5: GET /review/:isbn - Get book Review.
router.get('/review/:isbn', (req, res, next) => BookController.getReviews(req, res, next));

module.exports = router;
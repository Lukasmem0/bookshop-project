const express = require('express');
const router = express.Router();
const BookController = require('../controller/BookController');

// Task 8: PUT /reviews/:isbn - Add/Modify a book review.
// Endpoint này được truy cập thông qua index.js: app.use("/reviews", verifyToken, privateRoutes);
router.put('/:isbn', BookController.addOrUpdateReview);

// Task 9: DELETE /reviews/:isbn - Delete book review added by that particular user.
router.delete('/:isbn', BookController.deleteReview);

module.exports = router;
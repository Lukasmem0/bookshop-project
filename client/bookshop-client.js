const axios = require('axios');
const BASE_URL = 'http://localhost:5000';

// Task 10: Get all books – Using async callback function
const getBooksAsync = async (callback) => {
    try {
        const response = await axios.get(`${BASE_URL}/`);
        // Gọi callback với lỗi = null và dữ liệu
        callback(null, response.data);
    } catch (error) {
        // Gọi callback với lỗi và dữ liệu = null
        callback(error.message, null);
    }
};

// Task 11: Search by ISBN – Using Promises
const getBookByISBN = (isbn) => {
    return new Promise((resolve, reject) => {
        axios.get(`${BASE_URL}/isbn/${isbn}`)
            .then(response => resolve(response.data))
            .catch(error => reject(error.response ? error.response.data.message : error.message));
    });
};

// Task 12: Search by Author – Using Async/Await
const getBookByAuthor = async (author) => {
    try {
        const response = await axios.get(`${BASE_URL}/author/${author}`);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data.message : error.message;
    }
};

// Task 13: Search by Title – Using Async/Await
const getBookByTitle = async (title) => {
    try {
        const response = await axios.get(`${BASE_URL}/title/${title}`);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data.message : error.message;
    }
};


// -----------------------------------
// RUN TESTS
// -----------------------------------
const runClientTests = async () => {
    // Test 10
    console.log("--- Task 10 (Async Callback) ---");
    getBooksAsync((err, books) => {
        if (err) console.error("Error:", err);
        else console.log("All Books (Count):", Object.keys(books).length);
    });

    // Test 11
    console.log("\n--- Task 11 (Promises: ISBN) ---");
    try {
        const isbnBook = await getBookByISBN("978-0385474542");
        console.log("Book by ISBN:", isbnBook.title);
    } catch (e) {
        console.error("Error:", e);
    }

    // Test 12
    console.log("\n--- Task 12 (Async/Await: Author) ---");
    try {
        const authorBooks = await getBookByAuthor("Chinua Achebe");
        console.log("Books by Author (Count):", authorBooks.length);
    } catch (e) {
        console.error("Error:", e);
    }

    // Test 13
    console.log("\n--- Task 13 (Async/Await: Title) ---");
    try {
        const titleBooks = await getBookByTitle("Fairy tales");
        console.log("Books by Title (Count):", titleBooks.length);
    } catch (e) {
        console.error("Error:", e);
    }
};

runClientTests();
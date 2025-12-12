const express = require('express');
const router = express.Router(); // Dùng router để định nghĩa các endpoints
const AuthService = require('../service/AuthService');

// Task 6: POST /auth/register
router.post('/register', (req, res) => {
    try {
        const { username, password } = req.body;

        // Kiểm tra đầu vào
        if (!username || !password) {
            return res.status(400).json({ message: "Username and password are required." });
        }

        const result = AuthService.registerUser(username, password);
        return res.status(201).json(result); // 201 Created

    } catch (error) {
        // Lỗi 409 Conflict nếu user đã tồn tại
        return res.status(409).json({ message: error.message });
    }
});

// Task 7: POST /auth/login
router.post('/login', (req, res) => {
    try {
        const { username, password } = req.body;

        // Kiểm tra đầu vào
        if (!username || !password) {
            return res.status(400).json({ message: "Username and password are required." });
        }

        const result = AuthService.loginUser(username, password);
        return res.status(200).json(result);

    } catch (error) {
        // Lỗi 401 Unauthorized nếu đăng nhập sai
        return res.status(401).json({ message: error.message });
    }
});

module.exports = router;
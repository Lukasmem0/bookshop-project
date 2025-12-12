const jwt = require('jsonwebtoken');

const JWT_SECRET = 'your_super_secret_key';

const verifyToken = (req, res, next) => {
    // 1. Lấy Token từ Header Authorization (Bearer <token>)
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ message: "Access denied. No token provided." });
    }

    const token = authHeader.split(' ')[1]; // Tách lấy phần token sau chữ 'Bearer'

    if (!token) {
        return res.status(401).json({ message: "Access denied. Token missing." });
    }

    // 2. Xác minh Token
    try {
        const decoded = jwt.verify(token, JWT_SECRET);

        // Gắn thông tin người dùng vào Request để sử dụng trong Controller/Service (req.user)
        req.user = decoded;
        next(); // Cho phép request đi tiếp

    } catch (ex) {
        // Token không hợp lệ (hết hạn, sai chữ ký,...)
        return res.status(400).json({ message: "Invalid token." });
    }
};

module.exports = { verifyToken };
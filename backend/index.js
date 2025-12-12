const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken'); // Tuy không dùng trực tiếp ở đây, nhưng tốt nhất nên có để minh họa

// --- Import Routes ---
// Routes công khai (Task 1-5)
const publicRoutes = require('./routes/public');
// Routes yêu cầu xác thực (Task 8-9)
const privateRoutes = require('./routes/private');
// Routes cho Đăng ký/Đăng nhập (Task 6-7). Lưu ý: AuthController được export dưới dạng Router.
const authRoutes = require('./controller/AuthController');

// --- Import Middleware ---
const { verifyToken } = require('./middleware/auth');

const app = express();
const PORT = 5000; // Cổng tiêu chuẩn cho dự án demo

// ----------------------------------------------------
// (1) MIDDLEWARE CƠ BẢN VÀ CẤU HÌNH
// ----------------------------------------------------

// Middleware để phân tích cú pháp JSON từ body của request
app.use(bodyParser.json());
app.use(express.json());

// Middleware cho logging (tùy chọn, thêm để theo dõi request)
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// ----------------------------------------------------
// (2) KẾT NỐI ROUTES
// ----------------------------------------------------

// Task 6 & 7: Routes cho Auth (Đăng ký/Đăng nhập)
// Endpoint: POST /auth/register, POST /auth/login
app.use("/auth", authRoutes);

// Task 1-5: Routes công khai (Tìm kiếm sách, Review)
// Endpoint: GET /isbn/:isbn, GET /author/:author, etc.
app.use("/", publicRoutes);

// Task 8 & 9: Routes yêu cầu xác thực (Add/Delete Review)
// Endpoint: PUT /reviews/:isbn, DELETE /reviews/:isbn
// Áp dụng middleware verifyToken cho tất cả các request đến /reviews
app.use("/reviews", verifyToken, privateRoutes);

// ----------------------------------------------------
// (3) LẮNG NGHE CỔNG (PHẦN BẮT BUỘC)
// ----------------------------------------------------

app.listen(PORT, () => {
    console.log(`✅ Server is running on port ${PORT}`);
    console.log(`🔗 Access public API at http://localhost:${PORT}`);
    console.log(`🔑 Auth endpoints at http://localhost:${PORT}/auth`);
});
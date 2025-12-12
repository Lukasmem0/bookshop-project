const { users, nextUserId } = require('../data/mockData');
const jwt = require('jsonwebtoken');

// Thay thế bằng secret key thực tế trong môi trường sản phẩm
const JWT_SECRET = 'your_super_secret_key';

class AuthService {
    // Task 6: Register New user
    registerUser(username, password) {
        // Kiểm tra logic nghiệp vụ: Tên đăng nhập đã tồn tại?
        if (users.some(user => user.username === username)) {
            throw new Error("User already exists.");
        }

        const newUser = {
            id: nextUserId++,
            username,
            // Trong thực tế, cần mã hóa mật khẩu (ví dụ: bcrypt)
            password
        };

        users.push(newUser);
        return { message: "User successfully registered." };
    }

    // Task 7: Login as a Registered user
    loginUser(username, password) {
        const user = users.find(u => u.username === username);

        // Logic nghiệp vụ: Kiểm tra username và password
        if (!user || user.password !== password) {
            throw new Error("Invalid login credentials.");
        }

        // Tạo JWT Token
        // Payload chứa id và username (giúp xác định danh tính user)
        const token = jwt.sign(
            { id: user.id, username: user.username },
            JWT_SECRET,
            { expiresIn: '1h' } // Token hết hạn sau 1 giờ
        );

        return { token, message: "Login successful." };
    }
}

module.exports = new AuthService();
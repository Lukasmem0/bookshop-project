# BOOKSHOP API PROJECT

Dự án này là một bản demo triển khai Back-End API cho hệ thống cửa hàng sách đơn giản, được xây dựng bằng Node.js và Express. Dự án tuân thủ mô hình kiến trúc Phân lớp (Layered Architecture), cụ thể là Controller - Service - Repository (CSR), nhằm đảm bảo tính module hóa, dễ bảo trì và dễ kiểm thử.

## Cấu Trúc Dự Án

Dự án được chia thành hai phần chính: `backend` (Express API Server) và `client` (Node.js Client cho việc kiểm thử).

### Cấu Trúc Thư Mục Backend
backend/ ├── controller/ │ ├── AuthController.js // Xử lý logic HTTP cho Đăng ký/Đăng nhập.
                         │ └── BookController.js // Xử lý logic HTTP cho Sách và Reviews. 
├── service/ │ ├── AuthService.js // Chứa Business Logic cho Xác thực (Đăng ký, Đăng nhập).
             │ └── BookService.js // Chứa Business Logic cho Sách (Tìm kiếm, Quản lý Review).
├── repository/ │ └── BookRepository.js // Tương tác trực tiếp với Mock Data (giả lập Database). 
├── data/ │ └── mockData.js // Chứa dữ liệu sách và người dùng mẫu.
├── middleware/ │ └── auth.js // Middleware xác thực JSON Web Token (JWT).
├── routes/ │ ├── public.js // Định tuyến các API công khai (Task 1-5).
            │ └── private.js // Định tuyến các API yêu cầu xác thực (Task 8-9). 
└── index.js 
// Khởi tạo Express Server.
## Yêu Cầu Và Cài Đặt

### Yêu Cầu Hệ Thống

* Node.js (Phiên bản 18+)
* npm

### Cài Đặt

1.  **Clone Repository:**
    ```bash
    git clone [https://github.com/Lukasmem0/bookshop-project]
    cd bookshop-project
    ```
2.  **Cài đặt Dependencies:**
    ```bash
    npm install
    ```
3.  **Khởi chạy Server:**
    Sử dụng Nodemon để khởi chạy server ở chế độ phát triển:
    ```bash
    npm run dev
    ```
    Server sẽ chạy tại `http://localhost:5000`.

## API Endpoints

Dự án hỗ trợ các endpoints sau. Tất cả các endpoint đều bắt đầu bằng `http://localhost:5000`.

### I. API Công Khai (General Users)

| Task | HTTP Method | Endpoint | Mô tả |
| :--- | :--- | :--- | :--- |
| **1** | `GET` | `/` | Lấy danh sách tất cả các cuốn sách. |
| **2** | `GET` | `/isbn/:isbn` | Lấy sách dựa trên ISBN. |
| **3** | `GET` | `/author/:author` | Lấy danh sách sách của một tác giả. |
| **4** | `GET` | `/title/:title` | Lấy danh sách sách dựa trên tiêu đề. |
| **5** | `GET` | `/review/:isbn` | Lấy tất cả đánh giá của một cuốn sách. |

### II. API Xác thực (Auth)

| Task | HTTP Method | Endpoint | Mô tả |
| :--- | :--- | :--- | :--- |
| **6** | `POST` | `/auth/register` | Đăng ký người dùng mới. |
| **7** | `POST` | `/auth/login` | Đăng nhập và nhận JWT Token. |

### III. API Bảo mật (Registered Users)

Các endpoint này yêu cầu JWT Token hợp lệ trong Header `Authorization: Bearer <token>`.

| Task | HTTP Method | Endpoint | Mô tả |
| :--- | :--- | :--- | :--- |
| **8** | `PUT` | `/reviews/:isbn` | Thêm hoặc chỉnh sửa đánh giá sách. |
| **9** | `DELETE` | `/reviews/:isbn` | Xóa đánh giá sách của người dùng đó. |

## Kiểm Thử Client (Node.js Program)

Các Task 10-13 được kiểm thử thông qua ứng dụng client Node.js sử dụng thư viện **Axios** và tuân thủ việc sử dụng **Async/Await** và **Promises**.

1.  **Chạy file client:**
    ```bash
    node client/bookshop-client.js
    ```
2.  **Mục đích:**
    * **Task 10:** Lấy tất cả sách (Async Callback).
    * **Task 11:** Tìm kiếm theo ISBN (Promises).
    * **Task 12:** Tìm kiếm theo Tác giả (Async/Await).
    * **Task 13:** Tìm kiếm theo Tiêu đề (Async/Await).

// Dữ liệu Mock mở rộng cho dự án Bookshop
// Bao gồm 30 cuốn sách (Task 1-5)

let books = {
    // Sách của Jane Austen
    1: { "author": "Jane Austen", "title": "Pride and Prejudice", "isbn": "978-0141439518", "reviews": { "1": "Kinh điển về tình yêu và định kiến xã hội.", "2": "Cần đọc lại nhiều lần." } },
    2: { "author": "Jane Austen", "title": "Sense and Sensibility", "isbn": "978-0141441610", "reviews": {} },
    3: { "author": "Jane Austen", "title": "Emma", "isbn": "978-0141441634", "reviews": { "3": "Nhân vật nữ chính thú vị." } },

    // Sách của George Orwell
    4: { "author": "George Orwell", "title": "1984", "isbn": "978-0451524935", "reviews": { "1": "Tuyệt đối phải đọc trong thời hiện đại." } },
    5: { "author": "George Orwell", "title": "Animal Farm", "isbn": "978-0451526342", "reviews": { "2": "Câu chuyện ngụ ngôn chính trị sâu sắc." } },

    // Sách của F. Scott Fitzgerald
    6: { "author": "F. Scott Fitzgerald", "title": "The Great Gatsby", "isbn": "978-0743273565", "reviews": {} },
    7: { "author": "F. Scott Fitzgerald", "title": "Tender Is the Night", "isbn": "978-0684801557", "reviews": {} },

    // Sách của Harper Lee
    8: { "author": "Harper Lee", "title": "To Kill a Mockingbird", "isbn": "978-0061120084", "reviews": { "4": "Một câu chuyện nhân văn vượt thời gian." } },

    // Sách của Ernest Hemingway
    9: { "author": "Ernest Hemingway", "title": "The Old Man and the Sea", "isbn": "978-0684801229", "reviews": {} },
    10: { "author": "Ernest Hemingway", "title": "A Farewell to Arms", "isbn": "978-0684801465", "reviews": {} },

    // Các tác giả đa dạng (Diversified Authors)
    11: { "author": "Chinua Achebe", "title": "Things Fall Apart", "isbn": "978-0385474542", "reviews": { "1": "Cốt truyện kinh điển.", "5": "Bình luận hay." } },
    12: { "author": "Chinua Achebe", "title": "No Longer at Ease", "isbn": "978-0435907409", "reviews": {} },
    13: { "author": "Gabriel Garcia Marquez", "title": "One Hundred Years of Solitude", "isbn": "978-0060883287", "reviews": {} },
    14: { "author": "Leo Tolstoy", "title": "War and Peace", "isbn": "978-0140449473", "reviews": {} },
    15: { "author": "Leo Tolstoy", "title": "Anna Karenina", "isbn": "978-0140449176", "reviews": {} },
    16: { "author": "Albert Camus", "title": "The Stranger", "isbn": "978-0679720201", "reviews": {} },
    17: { "author": "Herman Melville", "title": "Moby Dick", "isbn": "978-0142437247", "reviews": {} },
    18: { "author": "Aldous Huxley", "title": "Brave New World", "isbn": "978-0060850524", "reviews": { "6": "Một cái nhìn lạnh lùng về tương lai." } },
    19: { "author": "William Faulkner", "title": "The Sound and the Fury", "isbn": "978-0679732242", "reviews": {} },
    20: { "author": "Toni Morrison", "title": "Beloved", "isbn": "978-1400033416", "reviews": {} },

    // another book
    21: { "author": "Mark Twain", "title": "The Adventures of Tom Sawyer", "isbn": "978-0140391299", "reviews": {} },
    22: { "author": "Mark Twain", "title": "Adventures of Huckleberry Finn", "isbn": "978-0142437179", "reviews": {} },
    23: { "author": "Miguel de Cervantes", "title": "Don Quixote", "isbn": "978-0060935574", "reviews": {} },
    24: { "author": "J.D. Salinger", "title": "The Catcher in the Rye", "isbn": "978-0316769174", "reviews": {} },
    25: { "author": "Victor Hugo", "title": "Les Misérables", "isbn": "978-0451419439", "reviews": {} },
    26: { "author": "Charlotte Brontë", "title": "Jane Eyre", "isbn": "978-0141441146", "reviews": {} },
    27: { "author": "Emily Brontë", "title": "Wuthering Heights", "isbn": "978-0141441160", "reviews": {} },
    28: { "author": "Homer", "title": "The Odyssey", "isbn": "978-0140268867", "reviews": {} },
    29: { "author": "Mary Shelley", "title": "Frankenstein", "isbn": "978-0141439471", "reviews": {} },
    30: { "author": "Ken Kesey", "title": "One Flew Over the Cuckoo's Nest", "isbn": "978-0451163967", "reviews": {} }
};

// Thiết lập người dùng ban đầu và ID tiếp theo (Task 6, 7, 8, 9)
let users = [
    { id: 1, username: "devuser", password: "password" }, // Đã có nhiều review
    { id: 2, username: "guest", password: "12345" },      // Đã có review
    { id: 3, username: "testreviewer", password: "67890" }, // Đã có review
    { id: 4, username: "admin", password: "admin" },
    { id: 5, username: "newuser", password: "newuser" },
    { id: 6, username: "testuser", password: "test" }
];

let nextUserId = 7; // ID tiếp theo cho người dùng đăng ký mới (Task 6)

module.exports = { books, users, nextUserId };
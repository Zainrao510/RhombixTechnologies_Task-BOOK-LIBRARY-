# 📚 Library Pro – Personal Book Library Web App

Library Pro is a modern React-based web application developed as part of my internship task at Rhombix Technologies.  
The application allows users to manage their personal book library with features like book management, searching, categorization, borrowing system, and borrowing history.

---

## 🚀 Features

### 📚 Book Management
- Add new books
- Edit existing books
- Delete books
- View all books

### 🔍 Book Search
- Search books by title
- Search books by author

### 🗂️ Categorization
Books can be organized into categories such as:
- Programming
- AI
- Novels
- Islamic Books

### 🔄 Borrowing System
- Borrow a book
- Return a book
- Store borrower details
- Store issue and return dates

### 📜 Borrowing History
- Track borrowing records
- Show who borrowed which book
- Display issue and return dates

### 🎨 Premium UI
- Modern card-based layout
- Responsive design
- Attractive search bar and filters
- Gradient navbar
- Interactive buttons and hover effects

---

## 🛠️ Technologies Used

- React JS
- HTML5
- CSS3
- JavaScript (ES6)
- React Router DOM
- LocalStorage API

---

## 📁 Project Structure

```bash
src/
 ├── components/
 │   ├── Navbar.js
 │   ├── BookCard.js
 │   ├── SearchBar.js
 │   └── CategoryFilter.js
 │
 ├── pages/
 │   ├── Home.js
 │   ├── AddBook.js
 │   ├── EditBook.js
 │   ├── BookDetails.js
 │   └── History.js
 │
 ├── styles/
 │   ├── App.css
 │   ├── Navbar.css
 │   ├── Card.css
 │   └── Form.css
 │
 ├── utils/
 │   └── storage.js
 │
 ├── App.js
 └── index.js

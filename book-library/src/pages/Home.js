import { useState } from "react";
import BookCard from "../components/BookCard";
import "../styles/App.css";

export default function Home({ books, setBooks }) {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");

    const deleteBook = (id) => {
        // remove book
        const updatedBooks = books.filter(b => b.id !== id);
        setBooks(updatedBooks);

        // 🔥 remove related history
        const updatedHistory = JSON.parse(localStorage.getItem("history")) || [];

        const newHistory = updatedHistory.filter(h => h.bookId !== id);

        localStorage.setItem("history", JSON.stringify(newHistory));
    };

    const filtered = books.filter(b =>
        (b.title.toLowerCase().includes(search.toLowerCase()) ||
            b.author.toLowerCase().includes(search.toLowerCase())) &&
        (category === "" || b.category === category)
    );

    return (
        <div className="page">

            {/* 🔥 TOP BAR ONLY */}
            <div className="top-bar">
                <div className="search-box">
                    <span className="icon">🔍</span>
                    <input
                        placeholder="Search books..."
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <select
                    className="category-select"
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="">All Categories</option>
                    <option>Programming</option>
                    <option>AI</option>
                    <option>Novels</option>
                    <option>Islamic Books</option>
                </select>
            </div>

            {/* 🔥 CARDS SEPARATE */}
            <div className="grid">
                {filtered.map(b => (
                    <BookCard key={b.id} book={b} deleteBook={deleteBook} />
                ))}
            </div>

        </div>
    );
}
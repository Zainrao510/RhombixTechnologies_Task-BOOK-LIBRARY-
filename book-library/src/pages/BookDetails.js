import { useParams } from "react-router-dom";
import { useState } from "react";

export default function BookDetails({ books, setBooks, history, setHistory }) {
    const { id } = useParams();
    const book = books.find(b => b.id == id);
    const [name, setName] = useState("");

    const borrow = () => {
        const updated = books.map(b =>
            b.id == id ? {
                ...b,
                status: "Borrowed",
                borrower: name,
                issueDate: new Date().toLocaleDateString()
            } : b
        );

        setBooks(updated);

        setHistory([
            ...history,
            {
                bookId: book.id,   // 🔥 IMPORTANT
                title: book.title,
                borrower: name,
                issueDate: new Date().toLocaleDateString(),
                returnDate: ""
            }
        ]);
    };

    const returnBook = () => {
        const today = new Date().toLocaleDateString();

        const updatedBooks = books.map(b =>
            b.id == id ? { ...b, status: "Available" } : b
        );

        const updatedHistory = history.map(h =>
            h.bookId == id && h.returnDate === ""
                ? { ...h, returnDate: today }
                : h
        );

        setBooks(updatedBooks);
        setHistory(updatedHistory);
    };

    return (
        <div>
            <h2>{book.title}</h2>

            {book.status === "Available" ? (
                <>
                    <input placeholder="Borrower Name" onChange={e => setName(e.target.value)} />
                    <button onClick={borrow}>Borrow</button>
                </>
            ) : (
                <button onClick={returnBook}>Return</button>
            )}
        </div>
    );
}
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Form.css";

export default function AddBook({ books, setBooks }) {
  const nav = useNavigate();

  const [form, setForm] = useState({
    title: "",
    author: "",
    category: "Programming"
  });

  // ✅ Correct function name
  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      id: Date.now(),
      ...form,
      status: "Available",
      borrower: "",
      issueDate: "",
      returnDate: ""
    };

    setBooks([...books, newBook]);

    nav("/");
  };

  return (
    <div className="page">
      <h2>➕ Add New Book</h2>

      <div className="form-card">
        {/* ✅ Use correct function */}
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Book Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            required
          />

          <input
            placeholder="Author Name"
            value={form.author}
            onChange={(e) => setForm({ ...form, author: e.target.value })}
            required
          />

          <select
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
          >
            <option>Programming</option>
            <option>AI</option>
            <option>Novels</option>
            <option>Islamic Books</option>
          </select>

          <button type="submit">Add Book</button>
        </form>
      </div>
    </div>
  );
}
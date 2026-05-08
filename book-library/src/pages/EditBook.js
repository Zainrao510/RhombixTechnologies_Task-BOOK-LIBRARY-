import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function EditBook({ books, setBooks }) {
  const { id } = useParams();
  const nav = useNavigate();

  const [form, setForm] = useState({
    title: "",
    author: "",
    category: "Programming"
  });

  // 🔥 Load existing data into form
  useEffect(() => {
    const book = books.find(b => b.id == id);
    if (book) {
      setForm({
        title: book.title,
        author: book.author,
        category: book.category
      });
    }
  }, [id, books]);

  const submit = (e) => {
    e.preventDefault();

    const updatedBooks = books.map(b =>
      b.id == id ? { ...b, ...form } : b
    );

    setBooks(updatedBooks);
    nav("/");
  };

  return (
    <div className="page">
      <h2>✏️ Edit Book</h2>

      <form onSubmit={submit}>
        <input
          value={form.title}
          onChange={e => setForm({ ...form, title: e.target.value })}
          placeholder="Title"
        />

        <input
          value={form.author}
          onChange={e => setForm({ ...form, author: e.target.value })}
          placeholder="Author"
        />

        <select
          value={form.category}
          onChange={e => setForm({ ...form, category: e.target.value })}
        >
          <option>Programming</option>
          <option>AI</option>
          <option>Novels</option>
          <option>Islamic Books</option>
        </select>

        <button>Update Book</button>
      </form>
    </div>
  );
}
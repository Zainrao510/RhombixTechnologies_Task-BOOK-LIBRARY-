import { Link } from "react-router-dom";
import "../styles/Card.css";

export default function BookCard({ book, deleteBook }) {
  return (
    <div className="card">
      <h3>{book.title}</h3>
      <p>{book.author}</p>

      <span className={`badge ${book.status}`}>
        {book.status}
      </span>

      <p className="category">{book.category}</p>

      <div className="actions">
        <Link to={`/book/${book.id}`} className="btn view">View</Link>
        <Link to={`/edit/${book.id}`} className="btn edit">Edit</Link>
        <button className="btn delete" onClick={() => deleteBook(book.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}
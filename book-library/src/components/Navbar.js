import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <div className="nav">
      <h2>📚 Library Pro</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/add">Add Book</Link>
        <Link to="/history">History</Link>
      </div>
    </div>
  );
}
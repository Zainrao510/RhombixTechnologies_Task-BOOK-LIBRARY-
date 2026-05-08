export default function History({ history }) {
  return (
    <div className="page">
      <h2>📜 History</h2>

      {history.length === 0 ? (
        <p>No history available</p>
      ) : (
        <div className="grid">
          {history.map((h, i) => (
            <div className="card" key={i}>
              <h3>{h.title}</h3>
              <p><b>Borrower:</b> {h.borrower}</p>
              <p><b>Issued:</b> {h.issueDate}</p>
              <p><b>Returned:</b> {h.returnDate || "Not returned"}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
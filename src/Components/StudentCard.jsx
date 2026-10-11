function StudentCard({ student, onDelete }) {
  const { name, id, major, year, gpa } = student;

  return (
    <div className="card h-100 shadow-sm">
      <div className="bg-secondary-subtle text-center py-4 fs-1">👤</div>

      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          ID: {id} <br />
          Field: {major} <br />
          Year: {year} <br />
          GPA: {gpa}
        </p>
        <button className="btn btn-outline-primary btn-sm me-2">View Profile</button>
        <button
          className="btn btn-outline-danger btn-sm"
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default StudentCard;
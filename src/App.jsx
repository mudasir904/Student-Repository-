import { useState } from "react";
import NavBar from "./components/NavBar";
import PageHeader from "./components/PageHeader";
import StudentCard from "./components/StudentCard";

const firstStudents = [
  { id: 101, name: "Mudasir Ali", major: "Software Engineering", year: 3, gpa: 1.7 },
  { id: 102, name: "Yasir Idrees", major: "Software Engineering", year: 3, gpa: 3.8 },
  { id: 103, name: "Abdul Wasiq", major: "Software Engineering", year: 3, gpa: 3.8 },
  { id: 104, name: "Kella Prinkle", major: "Software Engineering", year: 3, gpa: 3.8 },
  { id: 111, name: "Fatima Zahra", major: "Software Engineering", year: 3, gpa: 3.2 },
  { id: 112, name: "Ali Hassan", major: "Software Engineering", year: 3, gpa: 3.2 },
];

const PAGE_SIZE = 4;

function App() {
  const crumbs = ["Home", "Students", "Directory"];

  const [students, setStudents] = useState(firstStudents);
  const [page, setPage] = useState(1);
  const [message, setMessage] = useState("Student records have been successfully updated.");

  const totalPages = Math.ceil(students.length / PAGE_SIZE);
  const start = (page - 1) * PAGE_SIZE;
  const visibleStudents = students.slice(start, start + PAGE_SIZE);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  function handleDelete(id) {
    const updated = students.filter((s) => s.id !== id);
    setStudents(updated);
    setMessage("Student record deleted.");

    const newTotal = Math.ceil(updated.length / PAGE_SIZE);
    if (page > newTotal && newTotal > 0) setPage(newTotal);
  }

  return (
    <>
      <NavBar
        brand="StudentPortal"
        links={["Dashboard", "Students", "Courses", "Reports"]}
      />

      <div className="container mt-3">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb bg-dark rounded px-3 py-2">
            {crumbs.map((item, index) => (
              <li
                key={item}
                className={`breadcrumb-item text-white ${index === crumbs.length - 1 ? "active" : ""}`}
              >
                {item}
              </li>
            ))}
          </ol>
        </nav>

        <PageHeader
          title="Mahanpursh Tripathi Institute of Technology"
          buttonLabel="Add New Student"
        />

        {/* Cards */}
        <div className="row g-4">
          {visibleStudents.map((student) => (
            <div className="col-12 col-sm-6 col-lg-3" key={student.id}>
              <StudentCard student={student} onDelete={handleDelete} />
            </div>
          ))}
        </div>

        {/* Pagination */}
        <nav className="d-flex justify-content-center my-4">
          <ul className="pagination mb-0">
            <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
              <button className="page-link" onClick={() => setPage(page - 1)}>
                Previous
              </button>
            </li>

            {pageNumbers.map((num) => (
              <li key={num} className={`page-item ${num === page ? "active" : ""}`}>
                <button className="page-link" onClick={() => setPage(num)}>
                  {num}
                </button>
              </li>
            ))}

            <li className={`page-item ${page === totalPages ? "disabled" : ""}`}>
              <button className="page-link" onClick={() => setPage(page + 1)}>
                Next
              </button>
            </li>
          </ul>
        </nav>

        {/* Alert */}
        {message && (
          <div className="alert alert-info alert-dismissible" role="alert">
            {message}
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={() => setMessage("")}
            ></button>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white mt-5 py-4">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 mb-3">
              <h5>Links</h5>
              <p className="mb-0">
                Home <br />
                Software Engineering <br />
                Courses <br />
                Reports
              </p>
            </div>
            <div className="col-12 col-md-6 mb-3">
              <h5>Contact Info</h5>
              <p className="mb-0">
                Contact Us <br />
                +1: 123 456 7890 <br />
                trm@studentportal.com
              </p>
            </div>
          </div>
          <hr />
          <p className="text-center small mb-0">
            © 2024 StudentPortal. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
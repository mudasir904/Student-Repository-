function NavBar({ brand, links }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand" href="#">{brand}</a>

        <ul className="navbar-nav me-auto flex-row gap-3">
          {links.map((link) => (
            <li className="nav-item" key={link}>
              <a className="nav-link" href="#">{link}</a>
            </li>
          ))}
        </ul>

        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" />
          <button className="btn btn-primary" type="submit">Search</button>
        </form>
      </div>
    </nav>
  );
}

export default NavBar;
import { FaSearch } from "react-icons/fa";

const Navbar = ({ setFilter, setSearchQuery }) => {
  return (
<nav
  className="navbar navbar-expand-lg shadow fixed-top bg-body-tertiary mb-5"
  style={{ marginBottom: "3rem" }}
>
      <div className="container-fluid">
        <a
          className="navbar-brand"
          href="#"
          onClick={() => {
            setFilter("All");
            setSearchQuery("");
          }}
        >
          News<span className="text-warning">Mag</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active"
                href="#"
                onClick={() => setFilter("All")}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={() => setFilter("Technology")}
              >
                Technology
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={() => setFilter("Health")}
              >
                Health
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={() => setFilter("Sports")}
              >
                Sports
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={() => setFilter("Politics")}
              >
                Politics
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={() => setFilter("Business")}
              >
                Business
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={() => setFilter("Entertainment")}
              >
                Entertainment
              </a>
            </li>
          </ul>
          <form
            className="d-flex"
            role="search"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="btn btn-outline-warning" type="submit">
              <FaSearch />
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

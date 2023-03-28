import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top" id="navbar">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <a
              className="nav-link active"
              aria-current="page"
              href="#jumbotron"
            >
              Home
            </a>
            <a className="nav-link" href="#contact">
              Contact
            </a>
            <a className="nav-link" href="#about-us">
              About
            </a>
            <a className="nav-link" href="#link">
              Links
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

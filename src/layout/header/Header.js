import "./Header.css";

const Header = () => {
  return (
    <header className="header p-4 shadow mb-4 bg-warning">
      <div className="container">
        <nav className="nav d-flex align-items-center justify-content-between">
          <a
            href="#!"
            className="nav__logo text-decoration-none fs-3 font-monospace"
          >
            Sodda Movie
          </a>
          <ul className="nav__list m-0 p-0 list-style-none d-flex align-items-center gap-3">
            <li className="nav__item">
              <a href="#!" className="nav__link text-decoration-none">
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#!" className="nav__link text-decoration-none">
                Contact
              </a>
            </li>
            <li className="nav__item">
              <a href="#!" className="nav__link text-decoration-none">
                Support &amp; Help
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;

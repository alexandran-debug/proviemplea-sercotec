import "../styles/navbar.css";

function Navbar({ darkMode, setDarkMode, fontSize, setFontSize }) {
  return (
    <header className="navbar">
      {/* LOGO */}
      <div className="navbar-logo"> ProviEmplea - SERCOTEC</div>

      {/* MENÚ */}
      <nav>
        <ul className="navbar-links">
          <li>
            <a href="#inicio">Inicio</a>
          </li>
          <li>
            <a href="#servicios">Servicios</a>
          </li>
          <li>
            <a href="#nosotros">Nosotros</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
          <li>
            <a href="#contacto">Contacto</a>
          </li>
        </ul>
      </nav>

      {/* ACCESIBILIDAD */}
      <div className="navbar-tools">
        {/* A+ */}
        <button
          className="icon-btn"
          onClick={() => setFontSize(fontSize + 1)}
          aria-label="Aumentar tamaño de letra"
        >
          A+
        </button>

        {/* A- */}
        <button
          className="icon-btn"
          onClick={() => setFontSize(Math.max(12, fontSize - 1))}
          aria-label="Disminuir tamaño de letra"
        >
          A-
        </button>

        {/* MODO OSCURO */}
        <button
          className="icon-btn"
          onClick={() => setDarkMode(!darkMode)}
          aria-label={darkMode ? "Modo claro" : "Modo oscuro"}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </header>
  );
}

export default Navbar;

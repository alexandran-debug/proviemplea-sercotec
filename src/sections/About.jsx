import "../styles/about.css";

function About() {
  return (
    <section className="about-section" id="nosotros">
      <div className="about-container">
        {/* TEXTO */}
        <div className="about-text">
          <h2>Sobre Nosotros</h2>

          <p>
            En ProviEmplea apoyamos a emprendedores y pequeñas empresas en su
            desarrollo, entregando herramientas, asesorías y acompañamiento
            profesional.
          </p>

          <p>
            Buscamos fortalecer el ecosistema emprendedor con soluciones
            prácticas y accesibles para todos.
          </p>

          <ul>
            <li>✔ Asesoría empresarial</li>
            <li>✔ Capacitación</li>
            <li>✔ Apoyo a emprendedores</li>
            <li>✔ Crecimiento digital</li>
          </ul>

          <button
            onClick={() =>
              document
                .getElementById("contacto")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Contáctanos
          </button>
        </div>

        {/* IMAGEN NUEVA ESTILO SERCOTEC */}
        <div className="about-image">
          <img
            src="https://asesoriasercotec.cl/wp-content/uploads/2024/04/Sercotec-abre-concursos-para-Capital-Crece-desde-el-18-de-abril-hasta-el-3-de-mayo.webp"
            alt="Equipo de trabajo colaborando en oficina"
          />
        </div>
      </div>
    </section>
  );
}

export default About;

import "../styles/hero.css";

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Impulsamos el crecimiento de tu negocio</h1>

          <p>
            Centro de Negocios SERCOTEC Santiago. Apoyamos a emprendedores y
            empresas mediante asesorías, innovación y acompañamiento.
          </p>

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
      </div>
    </section>
  );
}

export default Hero;

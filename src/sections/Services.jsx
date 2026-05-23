import { useState, useEffect } from "react";
import "../styles/services.css";

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/services")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error(err));
  }, []);

  const handleScroll = () => {
    const form = document.getElementById("contacto");
    if (form) form.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="services-section" id="servicios">
      <h2>Nuestros Servicios</h2>
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card" onClick={handleScroll}>
            <img src={service.image} alt={service.title} />
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;

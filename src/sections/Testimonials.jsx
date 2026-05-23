import { useEffect, useState } from "react";
import "../styles/testimonials.css";

function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3001/testimonials")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);

  const prev = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 3 : prev - 1));
  };

  const next = () => {
    setIndex((prev) => (prev >= testimonials.length - 3 ? 0 : prev + 1));
  };

  const getVisible = () => {
    return [
      testimonials[index],
      testimonials[index + 1],
      testimonials[index + 2],
    ].filter(Boolean);
  };

  const visible = getVisible();

  return (
    <section className="testimonials-section">
      <h2>Testimonios</h2>

      <div className="carousel-wrapper">
        <button className="arrow left" onClick={prev}>
          &#10094;
        </button>

        <div className="carousel-container">
          <div className="carousel-track">
            {visible.map((t) => (
              <div key={t.id} className="testimonial-card">
                <p>"{t.text}"</p>
                <h3>{t.name}</h3>
                <span>{t.role}</span>
              </div>
            ))}
          </div>
        </div>

        <button className="arrow right" onClick={next}>
          &#10095;
        </button>
      </div>
    </section>
  );
}

export default Testimonials;

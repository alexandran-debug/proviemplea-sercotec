import { useEffect, useState } from "react";
import "../styles/faq.css";

function FAQ() {
  const [faqs, setFaqs] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/faq")
      .then((res) => res.json())
      .then((data) => setFaqs(data))
      .catch((error) => {
        console.log("Error cargando FAQ:", error);
        setFaqs([]); // fallback seguro
      });
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <h2>Preguntas Frecuentes</h2>

      <div className="faq-container">
        {faqs?.map((item, index) => (
          <div key={item.id} className="faq-item">
            {/* PREGUNTA */}
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span>{item.question}</span>
              <span className="icon">{openIndex === index ? "−" : "+"}</span>
            </div>

            {/* RESPUESTA */}
            <div className={`faq-answer ${openIndex === index ? "open" : ""}`}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;

import { useState, useEffect } from "react";
import "../styles/contact.css";

function Contact({ selectedService }) {
  // Estado del formulario
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    servicio: "",
    mensaje: "",
  });

  // Estado de errores
  const [errores, setErrores] = useState({});

  //  Sincroniza servicio SOLO si viene desde tarjetas
  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({
        ...prev,
        servicio: selectedService,
      }));
    }
  }, [selectedService]);

  // Detecta cambios en inputs
  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  // Validación del formulario
  function validarFormulario() {
    let nuevosErrores = {};

    if (!formData.nombre.trim()) {
      nuevosErrores.nombre = "El nombre es obligatorio";
    }

    if (!formData.correo.trim()) {
      nuevosErrores.correo = "El correo es obligatorio";
    } else if (!/\S+@\S+\.\S+/.test(formData.correo)) {
      nuevosErrores.correo = "Correo inválido";
    }

    if (!formData.servicio) {
      nuevosErrores.servicio = "Seleccione un servicio";
    }

    if (!formData.mensaje.trim()) {
      nuevosErrores.mensaje = "El mensaje es obligatorio";
    }

    setErrores(nuevosErrores);

    return Object.keys(nuevosErrores).length === 0;
  }

  // Submit
  function handleSubmit(e) {
    e.preventDefault();

    if (!validarFormulario()) return;

    alert("Formulario enviado correctamente");

    console.log(formData);

    // reset limpio
    setFormData({
      nombre: "",
      correo: "",
      servicio: "",
      mensaje: "",
    });

    setErrores({});
  }

  return (
    <section className="contact-section" id="contacto">
      <h2>Contáctanos</h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        {/* Nombre */}
        <div className="form-group">
          <label>Nombre</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Ingrese su nombre"
          />
          {errores.nombre && <span className="error">{errores.nombre}</span>}
        </div>

        {/* Correo */}
        <div className="form-group">
          <label>Correo Electrónico</label>
          <input
            type="email"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            placeholder="correo@ejemplo.com"
          />
          {errores.correo && <span className="error">{errores.correo}</span>}
        </div>

        {/* Servicio */}
        <div className="form-group">
          <label>Servicio</label>
          <select
            name="servicio"
            value={formData.servicio}
            onChange={handleChange}
          >
            <option value="">Seleccione un servicio</option>
            <option value="Asesoría Empresarial">Asesoría Empresarial</option>
            <option value="Marketing Digital">Marketing Digital</option>
            <option value="Capacitación">Capacitación</option>
          </select>

          {errores.servicio && (
            <span className="error">{errores.servicio}</span>
          )}
        </div>

        {/* Mensaje */}
        <div className="form-group">
          <label>Mensaje</label>
          <textarea
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            placeholder="Escriba su mensaje"
          />
          {errores.mensaje && <span className="error">{errores.mensaje}</span>}
        </div>

        <button type="submit">Enviar Mensaje</button>
      </form>
    </section>
  );
}

export default Contact;

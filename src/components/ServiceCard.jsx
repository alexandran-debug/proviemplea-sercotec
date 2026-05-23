import "../styles/serviceCard.css";

function ServiceCard({ title, description, image, onContact }) {
  return (
    <div className="service-card">
      <img src={image} alt={title} />

      <h3>{title}</h3>

      <p>{description}</p>

      <button onClick={onContact}>Contáctanos</button>
    </div>
  );
}

export default ServiceCard;

import "./Card.css";

export const Card = ({ element }) => {
  return (
    <div className='container-card'>
      <img src={element.backdropLow} alt={`Imagen de ${element.title}`} />
      <h3>{element.title}</h3>
    </div>
  );
};
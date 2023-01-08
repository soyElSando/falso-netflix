import "./Card.css";
import { useNavigate } from "react-router-dom";

export const Card = ({ element }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/detalles/${element.id}`, {
      state: element,
    });
  };

  return (
    <div className='container-card' onClick={handleClick}>
      <img src={element.backdropLow} alt={`Imagen de ${element.title}`} />
      <h3>{element.title}</h3>
    </div>
  );
};
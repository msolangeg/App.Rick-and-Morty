import React from "react";
import "./card.css"

// export default function Card(props) {
export default function Card({onClose, id, name, status, species, gender, origin, image}) {
   return (
      <div className='cardContainer'>
         <button onClick={onClose}>X</button>
         <img className="imgContainer" src={image} alt={`Imagen de ${name}`} />
         {/* <h2>{id}</h2> */}
         <h2 className="title">{name}</h2>
         <h2 className="subtitle">{gender} - {species}</h2>
         {/* <h2>{species}</h2> */}
         <h2 className="subtitle">{status} - {origin.name}</h2>
         {/* <h2>{origin.name}</h2> */}
      </div>
   );
}

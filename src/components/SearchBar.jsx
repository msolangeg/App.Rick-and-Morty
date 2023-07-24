import React from "react";
import "./searchBar.css"

export default function SearchBar(props) {
   return (
      <div className="serchBarContainer">
         <input type='search' />
         <button onClick={props.onSearch}>Agregar</button>
      </div>
   );
}

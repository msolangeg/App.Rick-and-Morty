import Card from './Card';
import "./cards.css"

export default function Cards(props) {
   const characters = props.characters
   // console.log(props.characters)
   return <div className='container'>
      {characters.map(character =>
         <Card
          id={character.id}  // key={id}  debemos ponerle un key para avisarle que es un array a react.
          name={character.name}   // nombre=objetito.valor 
          status={character.status}
          species={character.species}
          gender={character.gender}
          origin={character.origin}
          image={character.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
         />
         )}
   </div>;
}

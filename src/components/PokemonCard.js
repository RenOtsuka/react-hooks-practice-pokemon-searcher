import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {

  //console.log(pokemon)
  const {name, hp, sprites} = pokemon;

  const [toggleFrontBack, setToggleFrontBack] = useState(true);

  function handleToggle(){
    setToggleFrontBack( (toggleFrontBack) => !toggleFrontBack);
  }

  return (
    <Card>
      <div onClick={handleToggle}>
        <div className="image">
          {toggleFrontBack 
          ? <img src={sprites.front} alt={name} /> 
          : <img src={sprites.back} alt={name}/>
          }
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;

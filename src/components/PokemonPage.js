import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [pokemonList, setPokemonList] = useState([]);
  
  //for adding pokemon
  const [newName, setNewName] = useState("");
  const [newHp, setNewHp] = useState("");
  const [newFrontImg, setNewFrontImg] = useState("");
  const [newBackImg, setNewBackImg] = useState("");

  //for searching pokemon
  const [search, setSearch] = useState("");

  useEffect( () => {
    fetch(`http://localhost:3001/pokemon`)
    .then(r => r.json())
    .then(data => setPokemonList(data));

  }, []);

  function handleName(e){
    setNewName(e.target.value);
  }

  function handleHp(e){
    setNewHp(e.target.value);
  }

  function handleFrontImg(e){
    setNewFrontImg(e.target.value);
  }

  function handleBackImg(e){
    setNewBackImg(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();

    fetch(`http://localhost:3001/pokemon`, {
      method: "POST",
      headers:{
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: newName,
        hp: parseInt(newHp),
        sprites:{ 
          front: newFrontImg,
          back: newBackImg
        }
      })
    })
    .then(r => r.json())
    .then(data => setPokemonList([...pokemonList, data]));

    setNewName("");
    setNewHp("");
    setNewFrontImg("");
    setNewBackImg("");
  }

  function handleChange(e){
    setSearch(e.target.value);
  }

  const pokemonToDisplay = pokemonList.filter( item => {
    if(search.length > 0){
      return item.name.toLowerCase().includes(search)
    }
    else{
      return true;
    }
  });


  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm
      newName={newName}
      newHp={newHp}
      newFrontImg={newFrontImg}
      newBackImg={newBackImg}
      handleName={handleName}
      handleHp={handleHp}
      handleFrontImg={handleFrontImg}
      handleBackImg={handleBackImg}
      handleSubmit={handleSubmit}
       />
      <br />
      <Search
      search={search}
      handleChange={handleChange}
       />
      <br />
      <PokemonCollection
      pokemonList={pokemonToDisplay} />
    </Container>
  );
}

export default PokemonPage;

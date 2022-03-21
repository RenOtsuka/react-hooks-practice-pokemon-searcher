import React from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({newName,newHp,newFrontImg,newBackImg,handleName,handleHp,handleFrontImg,handleBackImg, handleSubmit}) {
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={newName} onChange={handleName}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={newHp} onChange={handleHp}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={newFrontImg}
            onChange={handleFrontImg}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={newBackImg}
            onChange={handleBackImg}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;

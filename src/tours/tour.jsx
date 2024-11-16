import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";

function Tour({
  id,
  name,
  powerstats,
  biography,
  image,
  deleteHero,
  connections,
}) {
  // prop drilling
  const [readMore, setReadMore] = useState(false);
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image.url} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <h4>Intelligence : {powerstats.intelligence}</h4>
        <h4>Combat : {powerstats.combat}</h4>
        <h4>Strength : {powerstats.strength}</h4>
        <h4>Speed : {powerstats.speed}</h4>
        <p>
          {readMore
            ? connections.relatives
            : connections.relatives.substring(0, 50)}

          <button
            className="underline text-indigo-600 ml-2"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "Show Less" : "Read more"}
          </button>
        </p>
        <Button>{biography.publisher}</Button>
      </Card.Body>
      <Button variant="danger" className="m-2" onClick={() => deleteHero(id)}>
        Remove
      </Button>
    </Card>
  );
}

export default Tour;

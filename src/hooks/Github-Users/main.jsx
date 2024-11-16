import React from "react";
import { Button, Card } from "react-bootstrap";

function Main({ avatar_url, login, html_url, id, removeUser }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={avatar_url} />
      <Card.Body>
        <Card.Title>{login}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">
          <a href={html_url} className="no-underline text-white">
            Profile
          </a>
        </Button>
      </Card.Body>
      <Button variant="danger" className="m-2" onClick={() => removeUser(id)}>
        Remove
      </Button>
    </Card>
  );
}

export default Main;

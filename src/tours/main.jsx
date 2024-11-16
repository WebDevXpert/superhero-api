import React, { useEffect, useState } from "react";
import Tours from "./tours";
import { Button } from "react-bootstrap";

const url =
  "https://www.superheroapi.com/api.php/b4ff3437ee65c6ae14a966f8f9aa83ac/search/a";
function Main() {
  const [superheros, setSuperHeros] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  async function fetchHeroes() {
    setIsLoading(true);
    const res = await fetch(url);
    const data = await res.json();
    setSuperHeros(data.results);
    console.log(data.results);
    setIsLoading(false);
  }
  function deleteHero(id) {
    const filteredHeros = superheros.filter((mereHeros) => mereHeros.id !== id);
    setSuperHeros(filteredHeros);
  }
  useEffect(() => {
    fetchHeroes();
  }, []);
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <img src="loader.gif" alt="loader" />
      </div>
    );
  }
  if (superheros.length === 0) {
    return (
      <div className="flex justify-end m-2">
        <Button variant="success" onClick={fetchHeroes}>
          Fetch Again
        </Button>
      </div>
    );
  }
  return (
    <div className="container">
      <div className="header flex justify-center">
        <h1 className="text-center">Super Heroes</h1>
      </div>
      <div className="text-center my-2">
        <input
          type="search"
          className="border w-48"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button
          variant="danger"
          className="m-2"
          onClick={() => setSuperHeros([])}
        >
          Clear All
        </Button>
      </div>
      <Tours superheros={superheros} deleteHero={deleteHero} query={query} />
    </div>
  );
}

export default Main;

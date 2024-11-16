import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";

const url =
  "https://newsapi.org/v2/everything?q=bitcoin&apiKey=5e378979d098495bb02a5c0e34908fbd";
function NewsComponent() {
  const [news, setNews] = useState([]);

  async function getNews() {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setNews(data.articles);
  }
  useEffect(() => {
    getNews();
  }, []);
  return (
    <div className="w-3/4 mx-auto">
      <h1>News</h1>
      <div className="flex flex-wrap gap-1">
        {news.map((meriNews) => {
          return (
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={meriNews.urlToImage} />
              <Card.Body>
                <Card.Title>{meriNews.title}</Card.Title>
                <Card.Text>{meriNews.description}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default NewsComponent;

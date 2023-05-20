import React, { useState } from "react";
import "./App.css";
import data from "./data.json";
const App = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    setPosts(data.user);
  };

  if (posts.length > 0) {
    return posts.map((post) => (
      <Card name={post.name} location={post.location} date={post.date} />
    ));
  }
  return (
    <div id="main">
      <button data-testid="Enter" onClick={() => fetchPosts()}>
        Enter
      </button>
    </div>
  );
};

const Card = ({ name, location, date }) => {
  return (
    <div>
      <h1 data-testid={name}>{name}</h1>
      <p data-testid={location}>{location}</p>
      <p data-testid={date}>{date}</p>
    </div>
  );
};

export default App;

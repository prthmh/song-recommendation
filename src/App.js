import React from "react";
import { useState } from "react";
import "./styles.css";
const songsDB = {
  indie: [
    { name: "Kaafizyada", by: "Udhav" },
    { name: "Yaqeen", by: "Poor Rich Boy" },
    { name: "Heeriye", by: "Karun, Udbhav" },
    { name: "Sunheri Zindagi", by: "Bharg, Rawal" },
    { name: "Aisay Kaisay", by: "Hasan Raheem" }
  ],

  rock: [
    { name: "California Dreamin", by: "The Mamas & The Papas" },
    { name: "Just Dance", by: "David Bowie" },
    { name: "People are Strange", by: "The Doors" }
  ],

  jpop: [
    { name: "Plastic Love", by: "Mariya Takeuchi" },
    { name: "4:00A.M.", by: "Taeko Onuki" },
    { name: "Fly-day Chinatown", by: "Yasuha" }
  ],

  jazz: [
    { name: "Rain in my heart", by: "Frank Sinatra" },
    { name: "Autumn Leaves", by: "Eric Clapton" },
    { name: "The End of The World", by: "Julie London" }
  ]
};

export default function App() {
  var [selectedGenre, setGenre] = useState("indie");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>🎵Songs I recommend</h1>
      <p style={{ fontSize: "smaller" }}>
        Checkout songs that I like to hear regularly
      </p>
      <div>
        {Object.keys(songsDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {songsDB[selectedGenre].map((song) => (
            <li
              key={song.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {song.name} </div>
              <div style={{ fontSize: "smaller" }}> {song.by} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

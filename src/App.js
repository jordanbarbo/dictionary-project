import React from "react";
import './App.css';
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="Book">
          <header className="App-header">Dictionary</header>
          <main>
            <Dictionary defaultKeyword="Dictionary" />
          </main>
        </div>
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/groundjordan/"
            target="_blank"
            rel="noreferrer"
          >
            Jordan Barbo
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/jordanbarbo"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://app.netlify.com/sites/trusting-villani-32b6a1/overview"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;

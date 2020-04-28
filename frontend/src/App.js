import React from "react";
import "./App.css";
import SearchBar from "./SearchBar";

function App() {
  return (
    <div className="page">
      <div className="profx"></div>
      <div className="App">
        <header className="App-header">
          <p className="quote">
            "Tell the strongest among you. Those with the greatest power protect
            those without."
          </p>
          <p className="author"> -- Professor Charles Xavier</p>
        </header>
        <main>
          Professor X needs you help in refining his mind-reading abilities.
          Enter a word and hit 'train' a few times. Refresh the page. Next time
          you begin to type the word, Professor X will predict the contents of
          your mind.
        </main>
        <SearchBar />
      </div>
    </div>
  );
}

export default App;

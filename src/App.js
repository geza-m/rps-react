import './App.css';

function App() {
  return (
    <div className="app">
      <header>
        ROCK PAPER SCISSORS
      </header>
      <main className='main'>
        <div id='messageBox'>
          <div>Fistful of Fury</div>
          <div>Win 5 rounds to defeat the Machine!</div>
        </div>
        <div id='rounds-counter'>
          ROUND {1}
        </div>
        <div id='game-area'>
          <div className='score-label' id='player-score'>
            You 0
          </div>
          <div className='score-label' id='comp-score'>
            CPU 0
          </div>
        </div>
      </main>
      <footer>
        Géza Maurer. &#169; 2023. 
      </footer>
    </div> 
  );
}

export default App;

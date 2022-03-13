import "./App.css";
import PlayerCard from "./components/Card/PlayerCard";
import data from "./data/Players";

function App() {
  return (
    <div className="App">
      <div id="header">TÜRK MİLLİ TAKIMI OYUNCULARI</div>
      <center>
        {data.map((player) => ( 
          <PlayerCard data={player} />
        ))}
      </center>
    </div>
  );
}

export default App;

import "./App.css";
import PlayList from "./features/PlayList/PlayList";
import Player from "./features/Player/Player";
import PlayerProvider from "./features/context/MP3PlayerProvider";

function App() {
  return (
    <PlayerProvider>
      <PlayList />
      <Player />
    </PlayerProvider>
  );
}

export default App;

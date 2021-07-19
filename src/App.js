import React,{useState, useRef} from 'react';
import Song from "./components/Song";
import Player from "./components/Player";
import Library from "./components/Library";
import "./assets/app.scss";
import Data from "./data";

function App()
{
  const [songs,setSongs] = useState(Data());
  const[currentSong, setCurrentSong] = useState(songs[0]);
  const[isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);


  return(
    <div className="App">
      <Song 
          song={songs}
          setSongs={setSongs}
          currentSong={currentSong}
          setCurrentSong={setCurrentSong}
      />
      <Player
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          currentSong={currentSong}
          audioRef={audioRef}
          songs={songs}
          setCurrentSong={setCurrentSong}
          setSongs={setSongs}
      />
      <Library
          audioRef={audioRef}
          songs={songs}
          setCurrentSong={setCurrentSong}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          setSongs={setSongs}
      />
    </div>
  );

}


export default App;

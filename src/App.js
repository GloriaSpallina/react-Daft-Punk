
import { useState } from 'react';
import './App.css';
import ButtonSong from './components/ButtonSong';

import samples from './data/samples';



function App() {
 const [lyrics, setLyrics] = useState("");
  const playSong = (link,name) =>{
    const song = new Audio(link)
    setLyrics(name)
    song.play();
  }

  return (
   <div className="mx-8">
     <h1 className="text-white text-5xl">Joue du Daft Punk en live</h1>
     <div className="flex flex-wrap">
     { samples.map((sample)=>(
      <ButtonSong 
        key={sample.id} 
        nameSong={sample.name} 
        play={() => playSong(sample.link, sample.name)} />
      ))}
     </div>
    
      <br/>
      <div className="bg-pink-300 text-white m-5 text-5xl"> 
        Lyrics : {lyrics}
        
      </div>
      <div className="flex flex-wrap justify-between">
        <div>
          <img src="gif/boule.gif"></img>
        </div>
        <div>
          <img src="gif/daftpunk.gif"></img>
        </div>
      </div>
      
   </div>
  );
}



export default App;

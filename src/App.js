
import { useState } from 'react';
import './App.css';
import ButtonSong from './components/ButtonSong';
import { pauseInstru, playInstru, restartInstru } from './components/PlayPause';
import highSounds from './data/highSounds';
import instru from './data/instru';
import lowSounds from './data/lowSounds';


function App() {
 const [lyrics, setLyrics] = useState("");
  
 const play = (link, name) =>{
   const song = new Audio(link);
    setLyrics(name);
    song.play();
 }

 const playKeyboard = (event) => {
  if(event.key === 'a'){
    play("low/1.mp3", "work it (low)")
  }
  if(event.key === 'z'){
    play("low/2.mp3", 'make it (low)')
  }
  if(event.key === 'e'){
    play("low/3.mp3", 'do it (low)')
  }
  if(event.key === 'r'){
    play("low/4.mp3", 'makes us (low)')
  }
  if(event.key === 't'){
    play("low/5.mp3", 'harder (low)')
  }
  if(event.key === 'y'){
    play("low/6.mp3", 'better (low)')
  }
  if(event.key === 'u'){
    play("low/7.mp3", 'faster (low)')
  }
  if(event.key === 'i'){
    play("low/8.mp3", 'stronger (low)')
  }
  if(event.key === 'o'){
    play("low/9.mp3", 'more than (low)')
  }
  if(event.key === 'p'){
    play("low/10.mp3", 'hour (low)')
  }
  if(event.key === 'q'){
    play("low/11.mp3", 'our (low)')
  }
  if(event.key === 's'){
    play("low/12.mp3", 'never (low)')
  }
  if(event.key === 'd'){
    play("low/13.mp3", 'ever (low)')
  }
  if(event.key === 'f'){
    play("low/14.mp3", 'after (low)')
  }
  if(event.key === 'g'){
    play("low/15.mp3", 'work is (low)')
  }
  if(event.key === 'h'){
    play("low/16.mp3", 'over (low)')
  }
  if(event.key === 'j'){
    play("high/1.mp3", "work it (high)")
  }
  if(event.key === 'k'){
    play("high/2.mp3", 'make it (high)')
  }
  if(event.key === 'l'){
    play("high/3.mp3", 'do it (high)')
  }
  if(event.key === 'm'){
    play("high/4.mp3", 'makes us (high)')
  }
  if(event.key === 'w'){
    play("high/5.mp3", 'harder (high)')
  }
  if(event.key === 'x'){
    play("high/6.mp3", 'better (high)')
  }
  if(event.key === 'c'){
    play("high/7.mp3", 'faster (high)')
  }
  if(event.key === 'v'){
    play("high/8.mp3", 'stronger (high)')
  }
  if(event.key === 'b'){
    play("high/9.mp3", 'more than (high)')
  }
  if(event.key === 'n'){
    play("high/10.mp3", 'hour (high)')
  }
  if(event.key === '1'){
    play("high/11.mp3", 'our (high)')
  }
  if(event.key === '2'){
    play("high/12.mp3", 'never (high)')
  }
  if(event.key === '3'){
    play("high/13.mp3", 'ever (high)')
  }
  if(event.key === '4'){
    play("high/14.mp3", 'after (high)')
  }
  if(event.key === '5'){
    play("high/15.mp3", 'work is (high)')
  }
  if(event.key === '6'){
    play("high/16.mp3", 'over (high)')
  }
  if(event.key === '7'){
    playInstru();
  }
  if(event.key === '8'){
    pauseInstru();
  }
  if(event.key === '9'){
    restartInstru();
  }
  
}


  return (
   <div className="mx-8">
     <h1 className="text-white text-5xl">Daft Punk en live</h1>
     <div className="flex flex-wrap justify-around container">
        <div className="grid grid-cols-2 gap-2">
          { lowSounds.map((ls)=>(
          <ButtonSong 
            color="blue"
            key={ls.id} 
            nameSong={ls.name} 
            kb = {ls.kb}
            play={() => play(ls.link, ls.name)} />
          ))}
       </div>
        <div>
        <ButtonSong color="purple" nameSong= "Instrumental - Play" kb = "7" play={() => playInstru()} />
        <ButtonSong color="yellow" nameSong="Instrumental - Pause" play={pauseInstru} kb="8" />
        <ButtonSong color="red" nameSong="Instrumental - Restart" play={restartInstru} kb="9" />
        <input className="m-1 w-60 bg-white text-black py-2 px-4 border-b-4 rounded" onKeyDown={playKeyboard} placeholder="Joue avec le clavier"/>
        <img className="w-60" src="gif/boule.gif"></img>
      
      </div> 

        <div className="grid grid-cols-2 gap-2">
          { highSounds.map((hs)=>(
            <ButtonSong 
              color="pink"
              key={hs.id} 
              nameSong={hs.name}
              kb={hs.kb}
              play={() => play(hs.link, hs.name, true)} />
          ))}
        </div>
    </div>
      <br/>
      <div className="flex flex-wrap justify-around">
      <div > 
        <div className="bg-pink-300 text-pink-700 w-72 h-20 py-2 px-4 text-xl border-b-4 rounded ">Lyrics : {lyrics} </div>
      </div>
      <div>
        <img className="object-contain h-48 w-full" src="gif/daftpunk.gif"/>
      </div>
      </div>
      
   </div>
  );
}



export default App;

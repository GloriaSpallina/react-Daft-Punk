let instru;
export const playInstru = (name) =>{
   instru = new Audio("instru/song-instrumental.mp3");
  instru.play();
}
export const pauseInstru = ()=>{
  instru.pause();
}

export const restartInstru = () =>{
  instru.currentTime = 0;
}
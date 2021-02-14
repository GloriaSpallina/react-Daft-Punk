

function ButtonSong({nameSong, play, color, kb}){
  const clazz = `bg-${color}-500 border-${color}-700 hover:border-${color}-500 hover:bg-${color}-400'} m-1 w-60 text-white font-bold py-2 px-4 border-b-4 rounded`;
  return(
    <div>
        <button className={clazz} type="button" onClick={() => play()}>{nameSong} - ({kb})</button>
    </div>
  );

}

export default ButtonSong;
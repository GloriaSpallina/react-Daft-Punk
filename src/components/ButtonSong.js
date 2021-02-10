

function ButtonSong({nameSong, play}){
  const clazz = "bg-blue-500 m-1 w-60 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
  return(
    <div>
        <button className={clazz} type="button" onClick={() => play()}>{nameSong}</button>

    </div>
  );

}

export default ButtonSong;
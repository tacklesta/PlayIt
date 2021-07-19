import React from "react";

const LibrarySong = (
    {
        song,
        songs,
        setCurrentSong,
        audioRef,
        isPlaying,
        setIsPlaying,
        setSongs,
        id,
    }
) =>{
    const songSelector = async()=>{
        await setCurrentSong(song);
        if(isPlaying) audioRef.current.play();
        const newSong = songs.map((song)=>{
            if(song.id===id)
            {
                return {...song,active:true};
            }
            else{
                return {...song,active:false};
            }
        });
        setSongs(newSong);
    };
    return(
        <div
        onClick={songSelector}
        className={`library-song ${song.active ? "selected" : ""}`}
        >
            <img alt={song.name} src={song.cover}></img>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    );
};

export default LibrarySong;
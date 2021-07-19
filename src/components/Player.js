import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faPlay,
    faAngleLeft,
    faAngleRight,
    faPause,
} from "@fortawesome/free-solid-svg-icons";

const Player =({
    currentSong,
    isPlaying,
    setIsPlaying,
    audioRef,
    songs,
    setCurrentSong,
    setSongs,
})=>{
    const [duration,setDuration] = useState({
        currentTime: 0,
        duration: 0,
        animationPercentage: 0,
    });

    const activeLibraryHandler = (nextPrev) =>{
        const newSong = songs.map((song)=>{
            if(song.id === nextPrev.id)
            {
                return {...song, active: true};
            }
            else{
                return {...song, active: false};
            }
        });
        setSongs(newSong);
    };

    const playSong = ()=>
    {
        if(isPlaying)
        {
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
            return;
        }
        else{
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }
    };

    const timeupdate = (e)=>
    {
        const current = e.target.currentTime;
        const duration = e.target.duration;
        const roundedCurrent = Math.round(current);
        const roundedDuration = Math.round(duration);
        const animate = Math.round((roundedCurrent / roundedDuration) * 100);
        setDuration({
            ...duration,
            currentTime: current,
            duration: duration,
            animationPercentage: animate,
        });
    };

    const getTime = (time)=>{
        return(
            Math.floor(time/60)+":"+("0"+Math.floor(time % 60)).slice(-2)
        );
    };

    const dragHandler = (e) =>{
        audioRef.current.currentTime = e.target.value;
        setDuration({...duration, currentTime: e.target.value});
    };

    const skipTrackHandler = async(direction) =>{
        let currentIndex = songs.findIndex((song)=> song.id === currentSong.id);
        if(direction === "skip-forward"){
            await setCurrentSong(songs[(currentIndex+1) % songs.length]);
            if(isPlaying) audioRef.current.play();
            activeLibraryHandler(songs[(currentIndex+1) % songs.length]);
        }
        else if(direction === "skip-back")
        {
            if(currentIndex===0)
            {
                currentIndex=songs.length;
                await setCurrentSong(songs[currentIndex-1]);
                if(isPlaying) audioRef.current.play();
                activeLibraryHandler(songs[currentIndex-1]);
                return;
            } else{
                await setCurrentSong(songs[currentIndex-1]);
                if(isPlaying) audioRef.current.play();
                activeLibraryHandler(songs[currentIndex-1]);
            }
        }
    };
    const songEndHandler = async()=>{
        let currentIndex = songs.findIndex((song)=> song.id === currentSong.id);

        await setCurrentSong(songs[(currentIndex+1) %  songs.length]);
        if(isPlaying) audioRef.current.play();
    };

    const trackAnim = {
        transform : `translateX(${duration.animationPercentage}%)`,
    };

    return (
        <div className="player">
            <div className="time-control">
                <p>{getTime(duration.currentTime)}</p>
                <div 
                style={{
                    background: `linear-gradient(to right, ${currentSong.color[0]},${currentSong.color[1]})`,
                }}
                className="track">
                    <input
                        min={0}
                        max={duration.duration}
                        value={duration.currentTime}
                        onChange={dragHandler}
                        type ="range"
                        name=""
                        id=""
                    />
                    <div style={trackAnim} className="animate-track"></div>
                </div>
                <p>{duration.duration ? getTime(duration.duration): "0:00"}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon
                onClick={()=>{
                    skipTrackHandler("skip-back");
                }}
                className="skip-back"
                size="2x"
                icon={faAngleLeft}
                />
                <FontAwesomeIcon 
                onClick={playSong}
                className="play"
                size="2x"
                icon={!isPlaying ? faPlay:faPause}
                />
                <FontAwesomeIcon
                onClick={()=>{
                    skipTrackHandler("skip-forward");
                }}
                className="skip-forward"
                size="2x"
                icon={faAngleRight}
                />
            </div>
            <audio
            onTimeUpdate={timeupdate}
            onLoadedMetadata={timeupdate}
            ref={audioRef}
            onEnded={songEndHandler}
            src={currentSong.audio}
            ></audio>
        </div>
        );
};

export default Player;

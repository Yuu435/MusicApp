import React, { useEffect, useRef } from "react";
import { usePlayer } from "../hook/usePlayer";
import "./Player.css"

const Player = () => {
  const {
    playing,
    currentSong,
    onPlay,
    onPause,
    onNext,
    onPrev,
    onShuffle,
    onLoop,
  } = usePlayer();

  const audioRef = useRef();

  // làm thế nào truy cập được thẻ audio
  // đồng bộ trạng thái playing với thẻ audio
  useEffect(() => {
    const audioEle = audioRef.current;
    if (playing) {
      audioEle.play();
    } else {
      audioEle.pause();
    }
  }, [playing, currentSong]);

  return (
    <div className="player-wrap">
      <audio src={currentSong.src} ref={audioRef} />

      <h1>{currentSong.title}</h1>
      <p>{currentSong.artist}</p>
      <div>
        <input type="range"  max={currentSong.duration} />
        <button onClick={onShuffle}>Shuffle</button>
        <button onClick={onPrev}>Prev</button>
        <button onClick={playing ? onPause : onPlay}>
          {playing ? "Pause" : "Play"}
        </button>
        <button onClick={onNext}>Next</button>
        <button onClick={onLoop}>Loop</button>
      </div>
    </div>
  );
};

export default Player;

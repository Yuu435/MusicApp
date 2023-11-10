import { useContext } from "react";
import { PLAYER } from "../reducer/playerReducer";
import { PlayerContext } from "../context/MP3PlayerProvider";
import { song } from "../../Data/song";

export const usePlayer = () => {

    const { state, dispatch } = useContext(PlayerContext)

    const handlePlay = () => {
        dispatch({ type: PLAYER.PLAY })
    }
    const handlePause = () => {
        dispatch({ type: PLAYER.PAUSE })
    }
    const handleNext = () => {
        dispatch({ type: PLAYER.NEXT })
    }
    const handlePrev = () => {
        dispatch({ type: PLAYER.PREV })
    }
    const currentSong = song[state.currentSongIndex]



    return {
        ...state,
        currentSong,
        onPlay: handlePlay,
        onPause: handlePause,
        onNext: handleNext,
        onPrev: handlePrev,
    }
}
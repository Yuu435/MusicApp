import { song } from "../../Data/song";

export const PLAYER = {
  PLAY: "player/play",
  PAUSE: "player/pause",
  NEXT: "player/next",
  PREV: "player/prev",
  SHUFFLE: "player/shuffle",
  LOOP: "player/loop",
  ADJUST_TIME: "player/adjustTime",
  SET_SONG: "player/setSong",
};

// { playing: false, currentTime: 0, currentSong: 1, loop: false, shuffle: false }

export const playerReducer = (state, action) => {
  switch (action.type) {
    case PLAYER.PLAY: {
      return {
        ...state,
        playing: true,
      };
    }
    case PLAYER.PAUSE: {
      return {
        ...state,
        playing: false,
      };
    }
    case PLAYER.NEXT: {
      let nextSongIndex = state.currentSongIndex + 1;
      if (nextSongIndex >= song.length) {
        nextSongIndex = 0;
      }
      return {
        ...state,
        currentSongIndex: nextSongIndex,
        playing: true,
      };
    }
    case PLAYER.PREV: {
      let prevSongIndex = state.currentSongIndex - 1;
      if (prevSongIndex < 0) {
        prevSongIndex = song.length - 1;
      }
      return {
        ...state,
        currentSongIndex: prevSongIndex,
        playing: true,
      };
    }
    case PLAYER.SHUFFLE: {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * song.length);
      } while (randomIndex === state.currentSongIndex);
      return {
        ...state,
        currentSongIndex: randomIndex,
        playing: true,
      };
    }
    case PLAYER.LOOP: {
      const isSongEnd = state.currentTime >= action.payload;
      if (state.loop && isSongEnd) {
        return {
          ...state,
          currentTime: 0,
        };
      }
      return {
        ...state,
        playing: true,
        loop: true,
      };
    }

    default:
      throw new Error("Invalid action ${action.type}");
  }
};

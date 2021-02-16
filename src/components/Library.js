import React from "react";

// Import Components
import LibrarySong from "./LibrarySong";

const Library = ({
  songs,
  setCurrentSong,
  setSongs,
  audioRef,
  libraryOpen,
  isPlaying,
}) => {
  return (
    <div className={`library ${libraryOpen ? "active-library" : ""}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            isPlaying={isPlaying}
            audioRef={audioRef}
            songs={songs}
            song={song}
            id={song.id}
            setCurrentSong={setCurrentSong}
            setSongs={setSongs}
            key={song.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;

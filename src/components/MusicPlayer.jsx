import { useRef, useState } from "react";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div>
      <FontAwesomeIcon
        icon={faMusic}
        onClick={toggleMusic}
        style={{ cursor: "pointer", fontSize: "24px" }}
      />
      <audio ref={audioRef} loop>
        <source
          src="https://archive.org/download/tvtunes_632/The%20Office.mp3"
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
export default MusicPlayer;

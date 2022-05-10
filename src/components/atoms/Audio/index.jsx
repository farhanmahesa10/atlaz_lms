import React, { useEffect, useRef, useState } from "react";
import moment from "moment";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import "./style.scss";

const momentDurationFormat = require("moment-duration-format");
const Audio = (props) => {
  const [totalDuration, setTotalDuration] = useState("");
  const playerButtonRef = useRef(),
    audioRef = useRef(),
    timelineRef = useRef(),
    soundButtonRef = useRef(),
    totalMinuteRef = useRef(),
    minuteRunRef = useRef(),
    playIcon = `
      <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.333496 1.25145V10.7481C0.333496 11.4723 1.131 11.9123 1.74516 11.5181L9.20683 6.76978C9.77516 6.41228 9.77516 5.58728 9.20683 5.22062L1.74516 0.48145C1.131 0.0872835 0.333496 0.527284 0.333496 1.25145Z" fill="#2A384C"/>
      </svg>
      
    `,
    pauseIcon = `
    <svg version="1.1" width="10" height="12" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 277.338 277.338" style="enable-background:new 0 0 277.338 277.338;"
    xml:space="preserve"> <g>
    <path d="M14.22,45.665v186.013c0,25.223,16.711,45.66,37.327,45.66c20.618,0,37.339-20.438,37.339-45.66V45.665
      c0-25.211-16.721-45.657-37.339-45.657C30.931,0,14.22,20.454,14.22,45.665z"/>
    <path d="M225.78,0c-20.614,0-37.325,20.446-37.325,45.657V231.67c0,25.223,16.711,45.652,37.325,45.652s37.338-20.43,37.338-45.652
      V45.665C263.109,20.454,246.394,0,225.78,0z"/>
      </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> 
    </svg>
  `,
    soundIcon = `
    <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.75 6.16667V9.83333C0.75 10.3375 1.1625 10.75 1.66667 10.75H4.41667L7.4325 13.7658C8.01 14.3433 9 13.9308 9 13.115V2.87583C9 2.06 8.01 1.6475 7.4325 2.225L4.41667 5.25H1.66667C1.1625 5.25 0.75 5.6625 0.75 6.16667ZM13.125 8C13.125 6.3775 12.19 4.98417 10.8333 4.30583V11.685C12.19 11.0158 13.125 9.6225 13.125 8ZM10.8333 1.07917V1.2625C10.8333 1.61084 11.0625 1.91334 11.3833 2.04167C13.7483 2.98584 15.4167 5.305 15.4167 8C15.4167 10.695 13.7483 13.0142 11.3833 13.9583C11.0533 14.0867 10.8333 14.3892 10.8333 14.7375V14.9208C10.8333 15.4983 11.4108 15.9017 11.9425 15.7C15.05 14.5175 17.25 11.52 17.25 8C17.25 4.48 15.05 1.4825 11.9425 0.300002C11.4108 0.0891683 10.8333 0.501668 10.8333 1.07917Z" fill="#2A384C"/>
    </svg>
    `,
    muteIcon = `
    <svg version="1.1"height="16" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 153.667 153.667" style="enable-background:new 0 0 153.667 153.667;" xml:space="preserve">
  <g>
    <path style="fill:#1D1D1B;" d="M143.221,141.225L97.919,89.519V7.501c0-2.931-1.707-5.593-4.37-6.815
      c-2.665-1.225-5.796-0.784-8.018,1.127L48.76,33.411L21.728,2.559c-2.73-3.115-7.469-3.428-10.583-0.698
      C8.029,4.59,7.716,9.328,10.446,12.443l26.568,30.323H16.087c-4.142,0-7.5,3.357-7.5,7.5V103.4c0,4.143,3.358,7.5,7.5,7.5h21.787
      l47.658,40.954c1.388,1.192,3.129,1.812,4.89,1.812c1.06,0,2.127-0.225,3.128-0.685c2.663-1.223,4.37-3.885,4.37-6.815v-33.885
      l34.02,38.828c1.483,1.692,3.558,2.558,5.644,2.558c1.754,0,3.517-0.612,4.939-1.859
      C145.638,149.078,145.951,144.34,143.221,141.225z M82.919,23.835v48.564L58.645,44.694L82.919,23.835z M23.587,57.767h9.566V95.9
      h-9.566V57.767z M82.919,129.832L48.153,99.956V55.481l34.766,39.68V129.832z"/>
  </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
    `;

  const formatDuration = (duration) => {
    return moment
      .duration(duration, "seconds")
      .format("mm:ss", { trim: false });
  };

  const toggleAudio = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      playerButtonRef.current.innerHTML = pauseIcon;
    } else {
      audioRef.current.pause();
      playerButtonRef.current.innerHTML = playIcon;
    }
  };

  const changeTimelinePosition = () => {
    const percentagePosition =
      (100 * audioRef.current.currentTime) / audioRef.current.duration;
    timelineRef.current.style.backgroundSize = `${percentagePosition}% 100%`;
    timelineRef.current.value = percentagePosition;

    minuteRunRef.current.innerHTML = formatDuration(
      audioRef.current.currentTime
    );
    let totalTime = formatDuration(audioRef.current.duration);
    if (totalTime !== "∞:NaN") {
      totalMinuteRef.current.innerHTML = totalTime;
    }
  };

  useEffect(() => {
    audioRef.current.ontimeupdate = changeTimelinePosition;
    audioRef.current.onended = audioEnded;
  }, [audioRef]);

  const audioEnded = () => {
    playerButtonRef.current.innerHTML = playIcon;
  };

  const changeSeek = () => {
    const time = (timelineRef.current.value * audioRef.current.duration) / 100;
    audioRef.current.currentTime = time;
  };

  const toggleSound = () => {
    audioRef.current.muted = !audioRef.current.muted;
    soundButtonRef.current.innerHTML = audioRef.current.muted
      ? muteIcon
      : soundIcon;
  };

  return (
    <div className="audio-player w-full bg-white d-flex align-items-center border border-neutral-100">
      <audio src={props.src} ref={audioRef}></audio>
      <div className="controls w-full px-24">
        <button
          className="player-button"
          ref={playerButtonRef}
          onClick={toggleAudio}
          type="button"
        >
          <PlayArrowIcon />
        </button>
        <div className="d-flex text-neutral-300">
          <span className="currentTime " ref={minuteRunRef}>
            00:00
          </span>
          <span>&nbsp;/&nbsp;</span>
          <span className="currentTime mr-16" ref={totalMinuteRef}>
            00:00
          </span>
        </div>
        <input
          type="range"
          className="timeline w-full"
          max="100"
          value="0"
          ref={timelineRef}
          onChange={changeSeek}
        />
        <button
          className="sound-button"
          ref={soundButtonRef}
          onClick={toggleSound}
          type="button"
        >
          <svg
            width={18}
            height={16}
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.75 6.16667V9.83333C0.75 10.3375 1.1625 10.75 1.66667 10.75H4.41667L7.4325 13.7658C8.01 14.3433 9 13.9308 9 13.115V2.87583C9 2.06 8.01 1.6475 7.4325 2.225L4.41667 5.25H1.66667C1.1625 5.25 0.75 5.6625 0.75 6.16667ZM13.125 8C13.125 6.3775 12.19 4.98417 10.8333 4.30583V11.685C12.19 11.0158 13.125 9.6225 13.125 8ZM10.8333 1.07917V1.2625C10.8333 1.61084 11.0625 1.91334 11.3833 2.04167C13.7483 2.98584 15.4167 5.305 15.4167 8C15.4167 10.695 13.7483 13.0142 11.3833 13.9583C11.0533 14.0867 10.8333 14.3892 10.8333 14.7375V14.9208C10.8333 15.4983 11.4108 15.9017 11.9425 15.7C15.05 14.5175 17.25 11.52 17.25 8C17.25 4.48 15.05 1.4825 11.9425 0.300002C11.4108 0.0891683 10.8333 0.501668 10.8333 1.07917Z"
              fill="#2A384C"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Audio;

import React, { useRef, useState } from 'react';
import {BsFillPlayFill , BsPauseFill} from 'react-icons/bs'
import { meal } from '../../constants';

import './Intro.css';

const Intro = () =>
{

  const [PlayVideo, setPlayVideo] = useState(false);
  const VidRef = useRef();
  
  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);

    if (PlayVideo) {
      VidRef.current.pause();
    } else {
      VidRef.current.play();
    }
  }

  return (
    
  <div className="app__video">
    <video src={meal}
      ref={VidRef}
      type="video/mp4"
      Loop
      controls={false}
      muted
      />
      
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={handleVideo}
        >
          {PlayVideo ?
            (
            <BsPauseFill color="#fff" fontSize={30}/>
            ) :
            (<BsFillPlayFill color="#fff" fontSize={30} />)}

        </div>
      </div>


  </div>
  )
};

export default Intro;

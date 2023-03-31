import { useEffect, useRef, useState } from 'react'

export function KeyClicker (props) {
    const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current.load();
  }, []);

    return (
        <div>
            <button 
             id={props.id} 
             onClick={() => {
                audioRef.current.currentTime = 0;
                audioRef.current.play();
              }}
            className="button is-primary is-medium drum-pad">
            {props.id}
            <audio 
                    ref={audioRef} 
                    src={props.src} 
                    className="clip"
                    id={props.id}
                />
            </button>
                
        </div>
    )
}
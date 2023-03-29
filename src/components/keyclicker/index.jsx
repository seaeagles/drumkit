import { useEffect, useRef } from 'react'

export function KeyClicker (props) {
    const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current.load();
  }, []);

    return (
        <div>
            <button 
             id={props.id} 
             onClick={() => audioRef.current.play()} 
            className="button is-primary is-medium drum-pad">
            Q</button>
            <audio ref={audioRef} src={props.src} />
        </div>
    )
}
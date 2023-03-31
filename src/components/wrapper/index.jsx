import { KeyClicker } from "../keyclicker"
import { useState, useEffect, useRef } from 'react'
import './style.css';

export function Wrapper() {
    const [pressedKey, setPressedKey] = useState(null);
    const [clipName, setClipName] = useState('');
    const audioRefs = useRef({})


    const keyClickers = [
      { id: "Q", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3", name: "Heater-1" },
      { id: "W", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3", name: "Heater-2" },
      { id: "E", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3", name: "Heater-3" },
      { id: "A", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3", name: "Heater-4" },
      { id: "S", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3", name: "Heater-6" },
      { id: "D", src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3", name: "Dsc_Oh" },
      { id: "Z", src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3", name: "Kick_n_Hat" },
      { id: "X", src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3", name: "RP4_KICK_1" },
      { id: "C", src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3", name: "Cev_H2" },
    ];

      const handleKeyClickerClick = (clickedKey, clipName) => {
        setPressedKey(keyPressed)
        setClipName(clipName)
        const audio = audioRefs.current[clickedKey]
        console.log(audio)
        audio.currentTime = 0
        audio.play()
      };

      useEffect(() => {
        const handleKeyDown = (event) => {
          const keyPressed = event.key.toUpperCase();
          const keyClicker = keyClickers.find((keyClicker) => keyClicker.id === keyPressed);
          if (keyClicker) {
              setPressedKey(keyPressed)
              setClipName(keyClicker.name)
              const audio = audioRefs.current[keyPressed]
              audio.currentTime = 0;
              audio.play()
          }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => {
          document.removeEventListener('keydown', handleKeyDown);
        };
      }, []);

    return (
    <div id="drum-machine" className="card container is-primary">
      <h1>Drumkit</h1>
        <div id="display" className="card-content">
            {clipName}
            <div className="key-grid">
           {keyClickers.map((keyClicker) => (
             <KeyClicker
                key={keyClicker.id}
                id={keyClicker.id}
                src={keyClicker.src}
                isPressed={keyClicker.id === pressedKey}
                onClick={() => handleKeyClickerClick(keyClicker.id, keyClicker.name)}
            />
           ))}
           </div>
        </div>
        <footer className="card-footer"></footer>
    </div>
    )
}


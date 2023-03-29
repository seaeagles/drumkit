import { KeyClicker } from "../keyclicker"
import './style.css';

export function Wrapper() {
    const keyClickers = [
        { id: 'Q', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },
        { id: 'W', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },
        { id: 'E', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },
        { id: 'A', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },
        { id: 'S', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },
        { id: 'D', src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },
        { id: 'Z', src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },
        { id: 'X', src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },
        { id: 'C', src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' },
      ];

    return (
    <div id="drum-machine" className="card container is-primary">
        <h1>Drumkit</h1>
        <div id="display" className="card-content">
            <div className="key-grid">
           {keyClickers.map((keyClicker) => (
             <KeyClicker
                key={keyClicker.id}
                id={keyClicker.id}
                src={keyClicker.src}
            />
           ))}
           </div>
        </div>
        <footer className="card-footer"></footer>
    </div>
    )
}


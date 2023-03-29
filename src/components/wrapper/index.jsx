import { KeyClicker } from "../keyclicker"

export function Wrapper() {
    const keyClickers = [
        { id: 'Q', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },
        { id: 'W', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },
        { id: 'E', src: 'audio3.mp3' },
        { id: 'A', src: 'audio4.mp3' },
        { id: 'S', src: 'audio5.mp3' },
        { id: 'D', src: 'audio6.mp3' },
        { id: 'Z', src: 'audio7.mp3' },
        { id: 'X', src: 'audio8.mp3' },
        { id: 'C', src: 'audio9.mp3' },
      ];

    return (
    <div id="drum-machine" className="card container is-primary">
        <h1>Drumkit</h1>
        <div id="display" className="card-content">
           {keyClickers.map((keyClicker) => (
             <KeyClicker
                key={keyClicker.id}
                id={keyClicker.id}
                src={keyClicker.src}
            />
           ))}
        </div>
        <footer className="card-footer"></footer>
    </div>
    )
}


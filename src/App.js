import "./style/css/style.css";
import Background from "./components/background.js";
import SoundPlayer from "./components/player";

import riverSound from "./assets/sounds/river.mp3";
import thunderstormSound from "./assets/sounds/thunderstorm.mp3";
import forestSound from "./assets/sounds/birds.mp3";
import nightSound from "./assets/sounds/night.mp3";
import riverIcon from "./assets/icons/river.svg";
import thunderstormIcon from "./assets/icons/thunderstorm.svg";
import forestIcon from "./assets/icons/forest.svg";
import nightIcon from "./assets/icons/night.svg";

function App() {
  const sounds = [
    { sound: riverSound, label: "River", icon: riverIcon },
    { sound: thunderstormSound, label: "Thunderstorm", icon: thunderstormIcon },
    { sound: forestSound, label: "Forest", icon: forestIcon },
    { sound: nightSound, label: "Night", icon: nightIcon },
  ];
  return (
    <div className="App">
      <span>humm</span>
      <div className="sounds-container">
        {sounds.map((sound) => (
          <SoundPlayer
            src={sound.sound}
            label={sound.label}
            icon={sound.icon}
          />
        ))}
      </div>
      <Background />
    </div>
  );
}

export default App;

import "./styles.css";
import { useState } from "react";

export default function App() {
  const [Rating, setRating] = useState(0);
  const [Hover, setHover] = useState(0);
  const [Color, setColor] = useState("#b3b3b3b3");
  const setColorProperty = (e, flag) => {
    if (flag) {
      if (e <= 2) {
        setColor("red");
      } else if (e <= 4) {
        setColor("orange");
      } else {
        setColor("green");
      }
    } else {
      setColor("#b3b3b3b3");
    }
  };
  return (
    <div className="App">
      <h1>RATING BAR</h1>

      {[1, 2, 3, 4, 5].map((e) => {
        return (
          <button
            value={e}
            style={{ "--dynamic-color": Color }}
            className={`star ${
              e <= Hover || (e <= Rating && Rating === Hover) ? "on" : "of"
            } `}
            // ${e <= Rating || e <= Hover ? "on" : "of"}
            onClick={(e) => {
              setRating(e.target.value);
              setColorProperty(e.target.value, true);
            }}
            onMouseOver={(e) => {
              setColorProperty(e.target.value, true);

              setHover(e.target.value);
            }}
            onMouseLeave={(e) => {
              setHover(Rating);
              setColorProperty(Rating, true);
              // setColorProperty(e.target.value, false);
            }}
          >
            &#9733;
          </button>
        );
      })}
      <h2>Current Rating : {Rating}</h2>
    </div>
  );
}

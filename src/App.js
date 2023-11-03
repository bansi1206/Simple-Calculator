import "./App.css";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const handleInput = (value) => {
    setInput(input + value);
  };

  const handleDel = () => {
    setInput(input.slice(0, -1));
  };

  const handleClear = () => {
    setInput("");
  };

  const calculateResult = () => {
    try {
      if (/[\d-+*/.]--|[\d-+*/.]\+\+/.test(input) || /[-+*/.]$/.test(input)) {
        setInput("Syntax Error");
      } else {
        setInput(eval(input));
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <>
      <div className="cal-container">
        <input type="text" value={input} className="display" readOnly />
        <div className="button-container">
          <div className="row">
            <button onClick={() => handleInput("7")}>7</button>
            <button onClick={() => handleInput("8")}>8</button>
            <button onClick={() => handleInput("9")}>9</button>
            <button onClick={handleDel} className="clear">
              DEL
            </button>
            <button onClick={handleClear} className="clear">
              AC
            </button>
          </div>
          <div className="row">
            <button onClick={() => handleInput("4")}>4</button>
            <button onClick={() => handleInput("5")}>5</button>
            <button onClick={() => handleInput("6")}>6</button>
            <button onClick={() => handleInput("*")} className="operation">
              *
            </button>
            <button onClick={() => handleInput("/")} className="operation">
              /
            </button>
          </div>
          <div className="row">
            <button onClick={() => handleInput("1")}>1</button>
            <button onClick={() => handleInput("2")}>2</button>
            <button onClick={() => handleInput("3")}>3</button>
            <button onClick={() => handleInput("+")} className="operation">
              +
            </button>
            <button onClick={() => handleInput("-")} className="operation">
              -
            </button>
          </div>
          <div className="row">
            <button onClick={() => handleInput("0")}>0</button>
            <button onClick={() => handleInput(".")}>.</button>
            <button onClick={calculateResult} className="equal">
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

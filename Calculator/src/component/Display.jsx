import "./display.css"
const Display = ({ inputDisplay, resultDisplay }) => {
    return (
        <div className="display-container">
              <div className="input-display">{inputDisplay}</div>
      <div className="result-display">{resultDisplay}</div>
        </div>
    );
};

export default Display;

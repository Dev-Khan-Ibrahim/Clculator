import { useState } from "react";
import Display from "./component/Display";
import "./App.css"
import Button from "./component/Button";
const App = () => {
  const [inputDisplay, setInputDisplay] = useState('');
  const [resultDisplay, setResultDisplay] = useState('');
  const buttonLabels = [
    "C", "%", "÷", "*",
    "7", "8", "9", "-",
    "4", "5", "6", "+",
    "1", "2", "3", "CL",
    "AC", "0", ".", "=" // '=' added twice to place it in the last two cells
  ];
  const handleClick = (label) => {
    if (label === "AC") {
      setInputDisplay('');
      setResultDisplay('');
    } else if (label === "CL") {
      setResultDisplay('');
    } else if (label === "=") {
      try {
        const result = eval(inputDisplay);
        setResultDisplay(result.toString());
      } catch (error) {
        setResultDisplay("Error");
      }
    } else if (label === "C") {
      if (inputDisplay.length > 0) {
        setInputDisplay(prevInput => prevInput.slice(0, -1)); // Remove the last character from inputDisplay
      }
    } else {
      let modifiedLabel = label;
      if (label === "÷") modifiedLabel = "/";
      if (label === "%") modifiedLabel = "/100*";
      setInputDisplay(prevInput => prevInput + modifiedLabel);
    }
  };

  return (
    <div className="App" >
      <Display inputDisplay={inputDisplay} resultDisplay={resultDisplay} />
      <div className="button-container">
        {buttonLabels.map((label, index) => (
          <Button key={index} label={label} handleClick={handleClick}  />
        ))}
      </div>
      </div>
       


      
   
  );
};

export default App;
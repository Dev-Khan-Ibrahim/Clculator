import "./Button.css"

const getClassByLabel = (label) => {
    switch (label) {
      case "+":
      case "=":
        return "special";
      case "÷":
      case "*":
      case "-":
      case "%":
        return "operator";
      case "AC":
        return "clear";
        case "":
            return "wide-equal";
          default:
            return "+"
    }
  };


const Button = ({ label,handleClick,}) => {
  return (
    <button className={`button ${getClassByLabel(label)}`} onClick={() => handleClick(label)}>
    {label}
  </button>
  );
};

export default Button;

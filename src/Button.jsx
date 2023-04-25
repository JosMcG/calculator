import "./Button.css"
import {evaluate} from "mathjs"

const Button = (props) => {
    const handleClick = () => {
      let current = props.display;
      let thisEntry = props.obj.value;
      let numStr = props.nums;

      if (/\d || ./.test(numStr) && !props.obj.action){
        if (thisEntry === "." && numStr.includes(".")) {
          return;
        }else {
          props.setNums(numStr + thisEntry);
          props.setDisplay(current + thisEntry);
        }
      } else if (/[+-\/*]/.test(thisEntry)) {
          if (/[+-\/*]/.test(current.slice(-1)) && thisEntry !== "-") {
                console.log("two operators " + current.slice(-1) + thisEntry);
                props.setDisplay(current.slice(0, -1) + thisEntry);
              } else if (current.slice(-1) === "-" && thisEntry === "-") {
                props.setDisplay(current.slice(0, -1) + thisEntry);
              } else if (/[+\/*]/.test(current.slice(-1)) && thisEntry === "-") {
                props.setDisplay(current + thisEntry);
              } else {
                props.setDisplay(current + thisEntry);
              }
          props.setNums("");
        return;
      }
      if (thisEntry === "AC") {
        props.setNums("")
        return props.setDisplay("")
      }
      if (thisEntry === "=") {
        props.setNums("")
        return props.setDisplay(evaluate(current));
      }
      props.setDisplay(current + thisEntry);
    }
      
    return(
      <button id={props.obj.id}
              number={props.obj.value}
              action={props.obj.action}
              onClick={handleClick}>{props.obj.value}
      </button>
    );
  }

  export default Button
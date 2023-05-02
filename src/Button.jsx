import "./Button.css"
import {evaluate} from "mathjs"

const Button = (props) => {
    const handleClick = () => {
      let current = props.display;
      let thisEntry = props.obj.value;
      let numStr = props.nums;
      //don't allow multiple beginning zeros
      if(current[0] == 0 && current[1] != "." && /\d/.test(thisEntry)){
        props.setNums(thisEntry);
        props.setDisplay(thisEntry);
        return
      //don't allow more than one decimal per number
      } else if (/\d || ./.test(numStr) && !props.obj.action){
        if (thisEntry === "." && numStr.includes(".")) {
          return;
        }else {
          props.setNums(numStr + thisEntry);
          props.setDisplay(current + thisEntry);
        }
      //if multiple operators are entered in a row, use the last operator
      //allow negative numbers
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
        return props.setDisplay("0")
      }
      if (thisEntry === "=") {
        try {
          return props.setDisplay(evaluate(current))
        }
        catch(error){
          return;
        }
        finally{
          props.setNums("")
        }
      }
      props.setDisplay(current + thisEntry);
    }
      
    return(
        <button className="buttons"
                id={props.obj.id}
                number={props.obj.value}
                action={props.obj.action}
                onClick={handleClick}>{props.obj.value}
        </button>
    );
  }

  export default Button
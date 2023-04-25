import "./NumButtons.css"
import Button from "./Button"
import {NumsObj} from "./KeyObjects"

function NumButtons(props) {

    const numPadButtons = NumsObj.map(n => <Button obj={n}
                                                   key={n.value}
                                                   setDisplay={props.setDisplay} 
                                                   display={props.display} 
                                                   nums={props.nums} 
                                                   setNums={props.setNums}
                                                   />);

    return (
      <div className="buttons">
         {numPadButtons}
      </div>
    )
  }
  
  export default NumButtons
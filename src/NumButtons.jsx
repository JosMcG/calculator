import "./NumButtons.css"
import Button from "./Button"
import {NumsObj} from "./KeyObjects"

function NumButtons(props) {

    const numPadButtons = NumsObj.map(n => <Button obj={n}
                                                   id={n.id}
                                                   key={n.value}
                                                   setDisplay={props.setDisplay} 
                                                   display={props.display} 
                                                   nums={props.nums} 
                                                   setNums={props.setNums}
                                                   />);

    return (
      <div className="num-pad-buttons">
         {numPadButtons}
      </div>
    )
  }
  
  export default NumButtons
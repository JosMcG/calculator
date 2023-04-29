import "./OperatorButtons.css"
import {OpsObj} from "./KeyObjects"
import Button from "./Button"

function OperatorButtons(props) {
    const operators = OpsObj.map(o => <Button obj={o}
                                              id={o.value}
                                              key={o.id} 
                                              setDisplay={props.setDisplay} 
                                              display={props.display}
                                              nums={props.nums}
                                              setNums={props.setNums}
                                              />)
    return (
      <div className="ops">
        {operators}
      </div>
    )
  }
  
  export default OperatorButtons
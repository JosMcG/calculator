import {Clear} from "./KeyObjects"
import Button from "./Button"
import "./ClearButton.css"

function ClearButton(props) {
    return(
        <Button obj={Clear[0]}
                setDisplay={props.setDisplay} 
                display={props.display}
                nums={props.nums}
                setNums={props.setNums}
                />
    )
  }
  
  export default ClearButton
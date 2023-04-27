import {useState} from 'react'
import './App.css'
import Display from "./Display"
import NumButtons from "./NumButtons"
import OperatorButtons from "./OperatorButtons"
import ClearButton from "./ClearButton"


function App() {
  const [display, setDisplay] = useState("");
  const [nums, setNums] = useState("");

  return (
    <div className="app">
      <Display display={display}/>
      <div id="all-buttons">
        <div id="clear-nums">
          <ClearButton setDisplay={setDisplay} display={display} 
                      nums={nums} setNums={setNums}/>
          <div id="nums-deci">
            <NumButtons setDisplay={setDisplay} display={display} 
                        nums={nums} setNums={setNums}/>
          </div>
        </div>
        <div id="ops">
          <OperatorButtons setDisplay={setDisplay} display={display}
                          nums={nums} setNums={setNums}/>
        </div>
      </div>
    </div>
  )
}

export default App

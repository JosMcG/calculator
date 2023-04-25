import {useState} from 'react'
import './App.css'
import Display from "./Display"
import NumButtons from "./NumButtons"
import OperatorButtons from "./OperatorButtons"


function App() {
  const [display, setDisplay] = useState("");
  const [nums, setNums] = useState("");

  return (
    <div className="App">
      <Display display={display}/>
      <div id="num-ops">
        <div id="nums-deci">
          <NumButtons setDisplay={setDisplay} display={display} 
                      nums={nums} setNums={setNums}
          />
        </div>
        <div id="ops">
          <OperatorButtons setDisplay={setDisplay} display={display}
                           nums={nums} setNums={setNums}
          />
        </div>
      </div>
    </div>
  )
}

export default App

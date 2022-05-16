import { useState } from "react"
import Button from "./Button"

const initState=[
  {
    id:1,
    firstName:"Amaan",
    phone:"999939999"
  },
  {
    id:2,
    firstName:"haider",
    phone:"8888888888"
  },

]

function App() {

  const [contacList, setContacList] = useState(initState)
  const List = contacList.map(item=>
    <div>{item.name}</div>
    )
    console.log(List)
  
  return (
    <div className="App">
  
  <div>
    {
      contacList.map((e)=>(
        <h1 style={{
          display: "flex",
          padding: "1rem",
        }}>
          {e.firstName}
        </h1>
      ))
    }
  </div>


  <div>

    <input placeholder="add name" type="text" />
  </div>
    {/* <Button title={"1"} handleClick={()=>alert("react1")} color={"red"}></Button>
    <Button title={"2"} handleClick={()=>alert("react2")} backCol={"red"}></Button>
    <Button title={"3"} handleClick={()=>alert("react3")}></Button> */}
    </div>
  )
}

export default App

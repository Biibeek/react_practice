
import Conditionalrendering from "./conditionalrendering"
import Student from "./Student"
import './index.css';
import List from "./List";
import Button from "./Button";
import Picture from "./Picture"
import MyComponent from "./MyComponent";
import SetComponent from "./Onclick";
import Onchange from "./Onchange";
import UseState from "./UseState";
import ColorPicker from "./ColorPicker";

function App() {
  // const fruits = [{ id: 1, name: "apple", calorie: 50 },
  // { id: 2, name: "banana", calorie: 20 },
  // { id: 3, name: "mango", calorie: 30 },
  // { id: 4, name: "Grapes", calorie: 39 },
  // { id: 5, name: "pineapple", calorie: 33 },
  // ]

  return (

    <>
      {/* <Conditionalrendering isLogged={true} name="bibek"></Conditionalrendering> */}
      {/* <Student age={18}></Student> */}
      {/* <List items={fruits} category="fruit" /> */}
      {/* <Button /> */}
      {/* <Picture /> */}
      {/* <MyComponent /> */}
      {/* <SetComponent/> */}
      {/* <Onchange /> */}
      {/* <UseState/> */}
      <ColorPicker />
    </>



  )
}

export default App

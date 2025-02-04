import { useState } from "react";
import ColorButton,{PickedColor} from "./ColorButton.jsx";

const App =() => {
  const [selectedColor, setSelectedColor] = useState()
  return (
    <>
    <h1>Color Picker</h1>
    <PickedColor colorPicked="yellow"/>
    <ColorButton colorName="yellow" setSelectedColor={setSelectedColor}/>
    <ColorButton colorName="green" setSelectedColor={setSelectedColor}/>
    <ColorButton colorName="black" setSelectedColor={setSelectedColor}/>
    
    </>
  )
}

export default App

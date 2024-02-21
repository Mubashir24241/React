import { useState } from "react"


function App() {
  const [color, setColor] = useState("skyblue")

  return (
    
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="flex justify-center items-center h-full">
        <h1 className="text-4xl font-bold text-gray-800">Hello React!</h1>
      </div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          
          <button
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}
          >Red</button>
          
          <button
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "green"}}
          >Green</button>
          
          <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "blue"}}
          >Blue</button>
          
          <button
          onClick={() => setColor("yellow")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: "yellow"}}
          >Yellow</button>
          
          <button
          onClick={() => setColor("black")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "black"}}
          >Black</button>
          
          <button
          onClick={() => setColor("White")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: "White"}}
          >White</button>
          
          <button
          onClick={() => setColor("olive")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "olive"}}
          >Olive</button>
          
          <button
          onClick={() => setColor("pink")}
          className="outline-none px-4 py-1 rounded-full text-#D95499 shadow-lg"
          style={{backgroundColor: "pink"}}
          >Pink</button>
          
          <button
          onClick={() => setColor("violet")}
          className="outline-none px-4 py-1 rounded-full text-violet shadow-lg"
          style={{backgroundColor: "violet"}}
          >violet</button>

          <button
          onClick={() => setColor("Aqua")}
          className="outline-none px-4 py-1 rounded-full text-Aqua shadow-lg"
          style={{backgroundColor: "Aqua"}}
          >Aqua</button>

          <button
          onClick={() => setColor("Lime")}
          className="outline-none px-4 py-1 rounded-full text-Lime shadow-lg"
          style={{backgroundColor: "Lime"}}
          >Lime</button>

        </div>
      </div>
    </div>
  )
}

export default App

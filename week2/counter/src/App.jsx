import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    console.log("increase 가 클릭됨");
    setCount(count + 1);
  }

  const decrease = () => {
    console.log("decrease 가 클릭됨");
    setCount(count - 1);
  }

  return (
    <>
      <h2>{count}</h2>
      <div className="buttonContainer" style={{display: "flex", gap: "1vw"}}>
        <button onClick={increase}>+1</button>
        <button onClick={decrease}>-1</button>
      </div>
    </>
  )
}

export default App

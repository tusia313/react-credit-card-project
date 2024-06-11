import { useState } from "react"

const App = () => {
  const [count, setCount] = useState(null)
  console.log(count)

  // function handleClick() {
  //   setCount(count+1)
  // }

  return (
    <div>
      <button onClick={() => setCount(count+1)}>add 1</button>
    </div>
  )
}

export default App;

import { useState } from "react"

const App = () => {
  const [firstName, setFirstName] = useState(null)
  const [email, setEmail] = useState(null)
  console.log(firstName, email)

  return (
    <div>
      <form>
        <input onChange={(e) => setFirstName(e.target.value)} placeholder="first name"></input>
        <input onChange={(e) => setEmail(e.target.value)} placeholder="email" type="email"></input>
      </form>
    </div>
  )
}

export default App;

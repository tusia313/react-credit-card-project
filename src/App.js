import { useState } from "react"

const App = () => {
  const [formData,setFormData] = useState({})

  const chandleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    console.log(formData)
    setFormData(
      {
        ...formData,
        [name]: value
      }
    )
  }

  return (
    <div>
   <form>
    <input onChange={chandleChange} placeholder="first name" value={formData.firstName} name="firstName"></input>
    <input onChange={chandleChange} placeholder="email" type="email" value={formData.email} name="email"></input>
   </form>
   </div>
  )
}

export default App;

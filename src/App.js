import { useState } from "react"
import CreditCard from "./components/CreditCard"

const App = () => {
  const currentMonth = new Date().getMonth() + 1
  const formatting = String(currentMonth).length <= 1 ? "0" : null
  const formattedDate = formatting + currentMonth
  console.log(currentMonth)
  console.log(formatting)
  const currentYear = new Date().getFullYear()
  console.log(currentYear)

  const [formData, setFormData] = useState({
    name: 'Marta Łoskot',
    number: '3827428472366',
    date: currentYear + '-' + formattedDate,
    cvv: '668'
  })

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    
    setFormData({ ...formData, [name] : value })

  }

  const handleSubmit = () => {
    console.log("submitted !")
  }

  return (
    <div className="form-container">
      <CreditCard formData = { formData } />
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Name on card
            <input 
            name = "name"
            value = { formData.name }
            placeholder="123456789" 
            required
            onChange={ handleChange }/>
          </label>
        </div>

        <div className="input-container">
          <label>Card number
            <input
            // value = ""
            placeholder="0000 0000 0000 0000"
            required
            minLength={16}
            maxLength={16} />
          </label>
        </div>

        <div className="supporting-inputs-container">
          <label>Expiry date
            <input type="month" required />
          </label>
          <label>CVV
            <input
            id="cvv"
            placeholder="000"
            required
            minLength={3}
            maxLength={3}/>
          </label>
        </div>

        <input type="submit" value="Submit →" />
        <p className="info-message">info message</p>
      </form>
    </div>
  )
}

export default App;

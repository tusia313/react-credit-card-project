import { useState } from "react"
import CreditCard from "./components/CreditCard"

const App = () => {
  const currentMonth = new Date().getMonth() + 1
  const formatting = String(currentMonth).length <= 1 ? "0" : null
  const formattedDate = formatting + currentMonth
  const currentYear = new Date().getFullYear()

  const [formData, setFormData] = useState({
    name: '',
    number: '',
    date: currentYear + '-' + formattedDate,
    cvv: ''
  })

  const [side, setSide] = useState('front')

  const [message, setMessage] = useState('Please enter Your credit card details.')

  const handleChange = (e) => {
    const name = e.target.name
    let value = e.target.value

    if (name === 'cvv' || name === 'number') {
      value = value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
    }

    setFormData({ ...formData, [name]: value })

    if (name === 'cvv') {
      setSide('back');
    } else {
      setSide('front');
    }

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setMessage('Thank You for your custom !')
  }

  return (
    <div className="form-container">
      <CreditCard formData={formData} side={side} />
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Name on card
            <input
              name="name"
              value={formData.name}
              placeholder="Sherlock Holmes"
              required
              onChange={handleChange} />
          </label>
        </div>

        <div className="input-container">
          <label>Card number
            <input
              name="number"
              value={formData.number}
              placeholder="0000 0000 0000 0000"
              required
              minLength={16}
              maxLength={16}
              onChange={handleChange} />
          </label>
        </div>

        <div className="supporting-inputs-container">
          <label>Expiry date
            <input
              name="date"
              value={formData.date}
              type="month"
              required
              onChange={handleChange} />
          </label>
          <label>CVV
            <input
              name="cvv"
              value={formData.cvv}
              id="cvv"
              placeholder="000"
              required
              minLength={3}
              maxLength={3}
              onChange={handleChange} />
          </label>
        </div>

        <input type="submit" value="Submit →" />
        <p className="info-message">{message}</p>
      </form>
    </div>
  )
}

export default App;

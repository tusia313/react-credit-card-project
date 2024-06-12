import CreditCard from "./components/CreditCard"

const App = () => {
  const handleSubmit = () => {
    console.log("submitted !")
  }

  return (
    <div className="form-container">
      <CreditCard/>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Name on card
            <input placeholder="123456789" required/>
          </label>
        </div>

        <div className="input-container">
          <label>Card number
            <input 
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

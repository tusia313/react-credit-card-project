const CreditCard = ({ formData, side }) => {

    const getCardName = () => {
        if (formData.number.slice(0, 2) === '37' ||
            (formData.number.slice(0, 2) === '34')) {
            return 'amex'
        }
        if (formData.number.slice(0, 1) === '4') {
            return 'mastercard'
        }
        if (formData.number.slice(0, 3) === '550' ||
            formData.number.slice(0, 3) === '555') {
            return 'visa'
        }
        // by default
        return 'visa'
    }

    const numberTile = [
        '- ',
        '- ',
        '- ',
        '- ',
        '- ',
        '- ',
        '- ',
        '- ',
        '- ',
        '- ',
        '- ',
        '- ',
        '- ',
        '- ',
        '- ',
        '-'
    ]

    return (
        <div className="credit-card">
            {side === 'front' && <div className={`${getCardName()}-front-side card`}>
                <div className="card-deatils-container">
                    <div className="detail-container">
                        <p>Cartholder</p>
                        <h2>{formData.name}</h2>

                    </div>
                    <div className="detail-container">
                        <p>Expiry date</p>
                        <h2>{formData.date}</h2>
                    </div>
                </div>
                <div className="number-display">
                    {/* <h3>{formData.number}</h3> */}
                    {/* Dzięki klamrą {} mapujemy każdy jakby obiekt w łańcuchu */}
                    {numberTile.map((item, index) => (
                        <h3 key={index}>{formData.number[index] || item}</h3>
                    ))}
                </div>
            </div>}

            {side === 'back' && <div className={`${getCardName()}-back-side card`}>
                <div id="cvv-display">
                    <p>{formData.cvv}</p>
                </div>
            </div>}
        </div>
    )
}

export default CreditCard
const CreditCard = () => {
    return (
        <div className="credit-card">
            <div className="visa-front-site">
                <div className="card-deatils-container">
                    <div className="detail-container">
                        <p>Expiry date</p>
                        <h2>xxx</h2>
                    </div>
                    <div className="detail-container">
                        <p>Carholder</p>
                        <h2>xxx</h2>
                    </div>

                    <div className="number-display">
                        <h3>xxxxxxx</h3>
                    </div>
                </div>
            </div>

            <div className="visa-back-side">
                <div id="cvv-display">
                    <p>xxx</p>
                </div>
            </div>
        </div>
    )
}

export default CreditCard
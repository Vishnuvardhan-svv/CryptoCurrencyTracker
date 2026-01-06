import './index.css'

const CryptocurrencyItem = props => {
  const {eachItem} = props
  const {currencyName, currencyLogo, usdValue, euroValue} = eachItem
  return (
    <li className="li-container">
      <div className="currency-logo-container">
        <img src={currencyLogo} alt={currencyName} className="logo" />
        <p>{currencyName}</p>
      </div>
      <div className="currency-value-container">
        <p className="usd-value">{usdValue}</p>
        <p className="euro-value">{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem

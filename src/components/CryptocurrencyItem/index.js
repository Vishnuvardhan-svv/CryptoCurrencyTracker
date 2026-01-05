import './index.css'

const CryptocurrencyItem = props => {
  const {eachItem} = props
  const {currencyName, currencyLogo, usdValue, euroValue} = eachItem
  return (
    <li>
      <div>
        <img src={currencyLogo} alt={currencyName} />
        <p>{currencyName}</p>
      </div>
      <div>
        <p>{usdValue}</p>
        <p>{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem

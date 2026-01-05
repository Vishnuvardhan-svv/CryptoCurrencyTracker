import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {cryptocurrenciesList: [], isLoading: true}

  componentDidMount() {
    this.getCryptoData()
  }

  getCryptoData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const formattedData = data.map(eachItem => ({
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
    }))
    this.setState({cryptocurrenciesList: formattedData, isLoading: false})
  }

  render() {
    const {cryptocurrenciesList, isLoading} = this.state
    return (
      <>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div>
            <h1>Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
            />
            <div>
              <div>
                <p>Coin Type</p>
                <div>
                  <p>USD</p>
                  <p>EURO</p>
                </div>
              </div>
              <ul>
                {cryptocurrenciesList.map(eachItem => (
                  <CryptocurrencyItem eachItem={eachItem} key={eachItem.id} />
                ))}
              </ul>
            </div>
          </div>
        )}
      </>
    )
  }
}

export default CryptocurrenciesList

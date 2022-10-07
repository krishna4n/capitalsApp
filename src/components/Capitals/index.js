import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capital extends Component {
  state = {activeId: countryAndCapitalsList[0].id}

  onCapitalSelect = event => {
    this.setState({activeId: event.target.value})
  }

  render() {
    const {activeId} = this.state
    const selectedCapital = countryAndCapitalsList.filter(
      eachCapital => eachCapital.id === activeId.toUpperCase(),
    )

    const country = selectedCapital.length > 0 ? selectedCapital[0].country : ''

    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">Countries And Capitals</h1>
          <p className="description">
            <select className="dropdown-list" onChange={this.onCapitalSelect}>
              {countryAndCapitalsList.map(eachCountry => (
                <option key={eachCountry.id} value={eachCountry.id}>
                  {eachCountry.capitalDisplayText}
                </option>
              ))}
            </select>
            is capital of which country?
          </p>

          <p className="result">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capital

// Write your code here

import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  updateBalance = value => {
    const {amount} = this.state
    if (amount - value >= 0) {
      this.setState(prevState => ({amount: prevState.amount - value}))
    }
  }

  render() {
    const {amount} = this.state
    const {denominationsList} = this.props
    return (
      <div className="bg_container">
        <div className="main_container">
          <div className="profile_container">
            <p className="profile_photo">S</p>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="balance_container">
            <p className="balance">Your Balance</p>
            <div className="rupees">
              <p className="amount">{amount}</p>
              <p>in Rupees</p>
            </div>
          </div>
          <p className="withdraw">WithDraw</p>
          <p className="rupees">CHOOSE SUM (IN RUPEES)</p>
          <ul>
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                denomination={eachDenomination}
                key={eachDenomination.id}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal

import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  withdraw = amount => {
    this.setState(prevState => ({
      balance: prevState.balance - parseInt(amount),
    }))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props
    return (
      <div className="bg-container">
        <div className="account-container">
          <div className="profile-container">
            <p className="photo">S</p>
            <p className="account-holder-name">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <p className="your-balance">Your Balance</p>
            <div>
              <p className="balance">{balance}</p>
              <p className="currency">In Rupees</p>
            </div>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denominations-container">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                key={eachDenomination.id}
                denomination={eachDenomination}
                withdraw={this.withdraw}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal

import './index.css'

const DenominationItem = props => {
  const {denomination, withdraw} = props
  const {value} = denomination
  const deductValue = event => {
    withdraw(event.target.textContent)
  }

  return (
    <li>
      <button
        type="button"
        className="denomination-value"
        onClick={deductValue}
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem

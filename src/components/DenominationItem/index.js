// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denomination, updateBalance} = props

  const onClickButton = () => {
    updateBalance(denomination.value)
  }

  return (
    <li>
      <button type="button" onClick={onClickButton}>
        {denomination.value}
      </button>
    </li>
  )
}

export default DenominationItem

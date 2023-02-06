import './index.css'

const TabItem = props => {
  const {tabDetails, active, onClickTabItem} = props

  const onClickTabItemButton = () => {
    onClickTabItem(tabDetails.tabId)
  }
  return (
    <li className="tab-item">
      <button
        className={`tab-item-button ${active ? 'active-tab' : ''}`}
        type="button"
        onClick={onClickTabItemButton}
      >
        {tabDetails.displayText}
      </button>
    </li>
  )
}
export default TabItem

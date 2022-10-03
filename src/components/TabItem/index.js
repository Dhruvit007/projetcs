import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isSelected} = props
  const activeTabClassName = isSelected ? 'active-tab-btn' : ''
  const {tabId, displayText} = tabDetails
  const onClickTabItem = () => {
    updateActiveTabId(tabId)
  }

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabClassName}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem

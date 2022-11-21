import './index.css'

const History = props => {
  const onDelete = () => {
    const {onDeleteHistory, browseItem} = props
    const {id} = browseItem
    onDeleteHistory(id)
  }
  const {browseItem} = props
  const {timeAccessed, logoUrl, title, domainUrl} = browseItem
  if (title !== undefined) {
    return (
      <li className="list-item">
        <div className="browse-item-container">
          <p className="browse-time">{timeAccessed}</p>
          <div className="domain-container">
            <img src={logoUrl} alt="domain logo" className="logo" />
            <div className="text-container">
              <p className="browse-title">{title}</p>
              <p className="browse-domain">{domainUrl}</p>
            </div>
          </div>
          <button
            type="button"
            className="button"
            onClick={onDelete} // eslint-disable-next-line react/no-unknown-property
            testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
              alt="delete"
              className="image"
            />
          </button>
        </div>
      </li>
    )
  }
  return (
    <li className="list-item">
      <div className="empty">
        <p className="para">There is no History to show</p>
      </div>
    </li>
  )
}

export default History

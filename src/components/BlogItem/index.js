import './index.css'

const BlogItem = props => {
  const {details} = props
  const {title, description, publishedDate} = details

  return (
    <li className="list-item">
      <div className="header-container">
        <h1 className="title">{title}</h1>
        <p className="published-date">{publishedDate}</p>
      </div>
      <div>
        <p className="description">{description}</p>
      </div>
      <hr />
    </li>
  )
}

export default BlogItem

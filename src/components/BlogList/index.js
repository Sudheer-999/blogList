import './index.css'
import BlogItem from '../BlogItem/index'

const BlogList = props => {
  const {blogItems} = props

  return (
    <ul className="blog-list-container">
      {blogItems.map(eachItem => (
        <BlogItem details={eachItem} key={eachItem.id} />
      ))}
    </ul>
  )
}

export default BlogList

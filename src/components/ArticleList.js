import React from 'react'
import Article from './Article'

export default class ArticleList extends React.Component {
  constructor(props) {
    super(props);
  }

  get articles() {
    return this.props.articles.map(article => {
      return (
        <li key = { article.id }>
          <Article article= { article } />
        </li>
      )
    })
  }

  render() {
    return (
        <div>
            <h2>Article List</h2>
            <ul>
                { this.articles }
            </ul>
        </div>
    )
  }
}

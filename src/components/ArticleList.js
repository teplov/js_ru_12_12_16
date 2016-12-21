import React, {PropTypes} from 'react'
import Article from './Article'
import Chart from './Chart'
import toggleOpen from '../decorators/toggleOpen'

export default class ArticleList extends React.Component {
    static propTypes = {
      articles: PropTypes.array.isRequired
    }

    static defaultProps = {
        articles: []
    }

    state = {
        openArticleId: null
    }

    render() {
        return (
            <div>
                <h2>Article List</h2>
                <ul>
                    {this.getArticle()}
                </ul>
            </div>
        )
    }


    getArticle() {
      const { articles } = this.props
      const articleItems = articles.map(article => {
          return (
            <li key = {article.id}>
              <Article
                       onUpdate={this.onUpdate}
                       isOpen={this.state.openArticleId == article.id}
                       article = {article}
              />
            </li>
          )
      })
      return <ul>{articleItems}</ul>
    }

    onUpdate = (val) => {
      console.log('onUpdate', val);
      this.toggleOpenArticle(val);
    }

    toggleOpenArticle = (id) => {
     let state = this.state.openArticleId === id ? null : id;
     console.log('sstate', this.state.openArticleId, id, state);
       this.setState({
           openArticleId: state
       })
    }
}

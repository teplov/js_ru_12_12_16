import React, {PropTypes} from 'react'
import Article from './Article'
import Chart from './Chart'
import toggleOpen from '../decorators/toggleOpen'

class ArticleList extends React.Component {
    static propTypes = {
      articles: PropTypes.array.isRequired
    }

    state = {
        openArticleId: null
    }

    render() {
        const {articles} = this.props
        const articleElements = articles.map(article =>
            <li key={article.id}>
                <Article article={article}
                         isOpen={this.state.openArticleId == article.id}
                         onClick={this.toggleOpenArticle(article.id)}
                />
            </li>)
        return (
            <div>
                <h2>Article List</h2>
                <ul>
                    {/*some comment*/}
                    {articleElements}
                </ul>
                <Chart articles={articles}/>
            </div>
        )
    }

    toggleOpenArticle = id => ev => {
      let state = this.state.openArticleId === id ? null : id;
        this.setState({
            openArticleId: state
        })
    }
}


export default toggleOpen(ArticleList)

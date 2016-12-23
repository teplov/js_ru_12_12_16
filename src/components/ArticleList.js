import React, {PropTypes} from 'react'
import {findDOMNode} from 'react-dom'
import Article from './Article'
import accordion from '../decorators/accordion'

class ArticleList extends React.Component {
    render() {
        const {articles, isOpenItem, toggleOpenItem} = this.props
        const articleElements = articles.map(article =>
            <li key={article.id}>
                <Article article={article}
                         isOpen={isOpenItem(article.id)}
                         onClick={toggleOpenItem(article.id)}
                         ref = {this.getArticleRef}
                />
            </li>)
        return (
            <div>
                <h2>Article List</h2>
                <ul>
                    {this.getArticle()}
                </ul>
            </div>
        )
    }

    getArticleRef = (article) => {
        this.article = article
        console.log('---', findDOMNode(article))
    }

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired,
    isOpenItem: PropTypes.func.isRequired,
    toggleOpenItem: PropTypes.func.isRequired
}

export default accordion(ArticleList)

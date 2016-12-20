import React, {PropTypes} from 'react'
import Article from './Article'
import Chart from './Chart'

export default class ArticleList extends React.Component {
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
        this.setState({
            openArticleId: id
        })
    }
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}

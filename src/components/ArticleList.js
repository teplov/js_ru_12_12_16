import React from 'react'
import Article from './Article'

export default function ArticleList(props) {
    const { articles } = props
    const articleElements = articles.map(article => <li key = {article.id}><Article article = {article} /></li>)
    return (
        <div>
            <h2>Article List</h2>
            <ul>
                {/*some comment*/}
                {articleElements}
            </ul>
        </div>
    )
}
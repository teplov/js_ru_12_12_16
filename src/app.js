import React from 'react'
import ReactDOM from 'react-dom'
import ArticleList from './components/ArticleList'
import {articles} from './fixtures'

ReactDOM.render(<ArticleList articles = {articles} />, document.getElementById('container'))
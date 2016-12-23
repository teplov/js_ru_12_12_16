import React from 'react'
import ReactDOM from 'react-dom'
import AppContainer from './components/AppContainer'
import {articles} from './fixtures'

ReactDOM.render(<AppContainer articles = {articles} />, document.getElementById('container'))
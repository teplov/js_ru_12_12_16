import React, { Component, PropTypes } from 'react'
import CommentList from '../CommentList'
import CSSTransition from 'react-addons-css-transition-group'
import './style.css'

export default class Article extends Component {
    static propTypes = {
        article: PropTypes.object.isRequired,
        isOpen: PropTypes.bool,
        onClick: PropTypes.func
    }

    componentDidMount() {
//        console.log('---', this.refs.container)
    }
    /*
     shouldComponentUpdate(nextProps, nextState) {
     return this.props.isOpen != nextProps.isOpen
     }
     */

    componentWillUpdate() {
        console.log('---', 'updating article')
    }

    render() {
        console.log('---', 123)
        const { article, onClick } = this.props
        return (
            <div ref = "container">
                <h3 onClick = {onClick}>{article.title}</h3>
                <CSSTransition
                    transitionName="article-body"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}
                >
                    {this.getBody()}
                </CSSTransition>
            </div>
        )
    }

    getBody() {
        if (!this.props.isOpen) return null
        return (
            <section>
                {this.props.article.text}
                <CommentList comments = {this.props.article.comments} />
            </section>
        )
    }
}
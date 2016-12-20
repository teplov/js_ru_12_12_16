import React, { PropTypes } from 'react'
import CommentList from './CommentList'
import toggleOpen from '../mixins/toggleOpen'

export default React.createClass({
    mixins: [toggleOpen],
    propTypes: {
        article: PropTypes.object.isRequired
    },

    render() {
        const { article } = this.props
        return (
            <div>
                <h3 onClick = {this.toggleOpen}>{article.title}</h3>
                {this.getBody()}
            </div>
        )
    },
    getBody() {
        if (!this.state.isOpen) return null
        return (
            <section>
                {this.props.article.text}
                <CommentList comments = {this.props.article.comments} />
            </section>
        )
    }

})
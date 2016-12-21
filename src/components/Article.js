import React, { Component, PropTypes } from 'react'
import CommentList from './CommentList'
import toggleOpen from '../decorators/toggleOpen'

class Article extends Component {
    static propTypes = {
        article: PropTypes.object.isRequired,
        isOpen: PropTypes.bool,
        onUpdate: PropTypes.func
    }

    constructor(props) {
      super(props);
      this.state = {
        isOpen: this.props.isOpen
      }
    }

    componentDidMount() {
        console.log('---', this.refs.container)
    }

    componentWillUpdate (nextProps) {
      console.log(nextProps);
    }

    render() {
        return (
            <div ref = "container">
                {this.getTitle()}
                {this.getBody()}
            </div>
        )
    }

    getTitle() {
        const { article: { title } } = this.props
        return  (
            <h3 onClick={this.update}>
                {title}
            </h3>
        )
    }

    update = () => {
        this.props.toggleOpen();
        this.props.onUpdate(this.props.article.id);
    }


    getBody() {
        const { article, isOpen } = this.props
        if (!isOpen) return null
        return (
            <section>
                {article.text}
                <CommentList comments = {this.props.article.comments} />
            </section>
        )
    }
}

export default toggleOpen(Article)

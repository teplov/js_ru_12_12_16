import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    static defaultProps = {
        comments: []
    }

    constructor(props) {
      super(props);

      this.state = {
        user: '',
        text: ''
      }
    }


    render() {
        return (
            <div>
                {this.getLink()}
                {this.getBody()}
                {this.addComment()}
            </div>
        )
    }

    getLink() {
      return (
          <a href="#" onClick = {this.props.toggleOpen}>
            {this.props.isOpen ? 'hide' : 'show'} comments
          </a>
      )
    }

    getBody() {
        const { comments, isOpen } = this.props
        if (!isOpen) return null
        if (!comments.length) return <p>No comments yet</p>
        const commentItems = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)
        return <ul>{commentItems}</ul>
    }

    addComment() {
      return (
        <div>
          <p>Add your comment</p>
          <input type="text" placeholder="Your name" value={ this.state.user } onChange={ this.handlerAddCommentUsername } /><br />
          <textarea onChange={ this.handlerAddCommentText } value={ this.state.text } />
          <button onClick={ this.handlerAddCommentSubmit }>Submit</button>
        </div>
      )
    }

    handlerAddCommentUsername = (ev) => {
      this.setState({
        user: ev.target.value
      });
    }

    handlerAddCommentText = (ev) => {
      this.setState({
        text: ev.target.value
      });
    }

    handlerAddCommentSubmit = (ev) => {
      console.log('Add comment', this.state);
      this.setState({
        user: '',
        text: ''
      });
    }
}

export default toggleOpen(CommentList)

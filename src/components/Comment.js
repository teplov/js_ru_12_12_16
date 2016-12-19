import React from 'react'

export default class Comment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        isOpen: false
    }
  }

  getComments() {
    if (!this.state.isOpen) return null;
    if (this.props.comments) {
      return this.props.comments.map(
        comment => {
          return (
            <li key = {comment.id}>
              <b>{comment.user}</b>
              <p>{ comment.text }</p>
            </li>
          )
        }
      )
    } else {
      return 'No comments';
    }
  }


  toggleOpen = () => {
      this.setState({
          isOpen: !this.state.isOpen
      })
  }


  render() {
    return(
        <div>
          <button onClick={ this.toggleOpen }>
            { !this.state.isOpen ? 'show comments' : 'hide comments' }
          </button>
          <ul>
            { this.getComments() }
          </ul>
        </div>
    );
  }


}

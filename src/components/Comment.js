import React, {PropTypes} from 'react'

export default class Comment extends React.Component{

    static PropTypes = {
      comment: PropTypes.object
    }

    constructor(props) {
      super(props);
    }

    //const { comment: { text, user } } = props
    render() {
      return (
          <div>
              {this.props.comment.text} <b>{this.props.comment.user}</b>
          </div>
      )
    }
}

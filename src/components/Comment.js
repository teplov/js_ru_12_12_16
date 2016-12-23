import React, { PropTypes }  from 'react'

function Comment(props) {
    const { comment: { text, user } } = props
    return (
        <div>
            {text} <b>{user}</b>
        </div>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string.isRequired,
        user: PropTypes.string
    })
}

export default Comment

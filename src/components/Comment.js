import React  from 'react'

function Comment(props) {
    const { comment: { text, user } } = props
    return (
        <div>
            {text} <b>{user}</b>
        </div>
    )
}

export default Comment

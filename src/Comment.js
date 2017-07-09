/**
 * Компонент - комментарий
 */
import React from 'react'

function Comment({comment}) {
  if (!comment) {
    return <div>Loading...</div>
  }
  return (
    <div>
      <div>{comment.user}</div>
      <p>{comment.text}</p>
    </div>
  )
}

export default Comment
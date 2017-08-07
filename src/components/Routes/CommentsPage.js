import React from 'react'
import CommentsPages from '../CommentsPages'

function CommentsPage({match}) {
    return <CommentsPages page = {match.params.page}/>
}

export default CommentsPage
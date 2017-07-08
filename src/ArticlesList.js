import React from 'react'
import Article from './Article'

function ArticleList({ articles }) {
    const articleElements = articles.map(article => <li key = {article.id}><Article article = {article} /></li>)
    const style = {maxWidth: '85%', margin: '0 auto', fontFamily: 'HelveticaNeue'};
    return (
        <ul style={style}>
            {articleElements}
        </ul>
    )
}

export default ArticleList
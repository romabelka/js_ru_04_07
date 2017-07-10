import React from 'react'
import Article from './Article'

function ArticleList({ articles }) {
    const articleElements = articles.map(article => <li key = {article.id}><Article article = {article} /></li>);
    return (
        <div>
            <h1>Статьи</h1>
            <ul>
                {articleElements}
            </ul>
        </div>
    )
}

export default ArticleList
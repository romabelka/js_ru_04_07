import React from 'react'
import {render} from 'react-dom'
import ArticlesList from './ArticlesList'
import {articles} from './fixtures'

render(<ArticlesList articles = {articles} />, document.getElementById('container'))
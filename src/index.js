import React from 'react'
import {render} from 'react-dom'
import App from './components/App'
import {articles} from './fixtures'
import store from './store'
import {Provider} from 'react-redux'

render(<Provider store = {store}>
    <App articles = {articles} />
</Provider>, document.getElementById('container'))
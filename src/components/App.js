import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ArticlesPage from './Routes/ArticlesPage'
import NotFoundPage from './Routes/NotFound'
import CommentsPage from './Routes/CommentsPage'
import UserForm from './UserForm'
import Filters from './Filters'
import Counter from './Counter'
import { Route, Redirect, Link, Switch } from 'react-router-dom'
import Menu, { MenuItem } from './Menu'
import LanguageBar from './LanguageBar'

class App extends Component {
    static propTypes = {

    };

    state = {
        username: '',
        language: 'en'
    }

    static childContextTypes = {
        user: PropTypes.string,
        lang: PropTypes.string
    }

    getChildContext() {
        return {
            user: this.state.username,
            lang: this.state.language
        }
    }


    render() {
        console.log('---', 1)
        return (
            <div>
                <LanguageBar handleClick = {this.handleLanguageClick}/>
                <Menu>
                    <MenuItem to = "/articles"/>
                    <MenuItem to = "/counter"/>
                    <MenuItem to = "/filters"/>
                    <MenuItem to = "/comments"/>
                </Menu>
                <UserForm value = {this.state.username} onChange = {this.handleUserChange} />
                <Switch>
                    <Redirect from = "/" exact to = "/articles" />
                    <Route path = "/articles/new" render = {this.getNewArticle} exact />
                    <Route path = "/articles" component = {ArticlesPage} />
                    <Route path = "/counter" component = {Counter} />
                    <Route path = "/filters" component = {Filters} />
                    <Route path='/comments' component={CommentsPage}/>
                    <Route path = "*" component = {NotFoundPage} />
                </Switch>
            </div>
        )
    }

    handleUserChange = username => this.setState({ username })

    getNewArticle = () => <h1>New Article Page</h1>

    handleLanguageClick = language => (ev) => {
        ev.preventDefault()

        this.setState({language})
    }

}

export default App
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import {loadComments} from '../../AC'
import Paginator from '../Paginator'
import CommentsPageList from '../CommentsPageList'

class CommentPage extends Component {

    render() {
        return (
            <div>
                <h3>Comments:</h3>
                <Route path="/comments/:id" children={this.getComments}/>
            </div>
        )
    }

    getComments = ({match}) => {
        const page = match ? match.params.id : '1'
        const {numberOfPages} = this.props

        return (
            <div>
                <Paginator pages={numberOfPages} baseURL="/comments/"/>
                <CommentsPageList page={page} key={page}/>
            </div>
        )
    }


}

CommentPage.propTypes = {
    numberOfPages: PropTypes.number
}
CommentPage.defaultProps = {}

export default connect(({comments}) => ({
        numberOfPages: comments.pages.numberOfPages,
    }),
    {loadComments})(CommentPage)

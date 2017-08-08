import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import {connect} from 'react-redux'
import Pagination from '../Pagination'
import Comments from '../Comments'


class CommentsPage extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <h3>Comments Page:</h3>
                <Route path = '/comments/:page' children = {this.getCommentsPage}/>
            </div>
        )
    }

    getCommentsPage = ({ match }) => {
      const basePath = '/comments/'
      const currentPage = match ? match.params.page : 1
      return (
        <div>
          <Pagination basePath = { basePath } currentPage = { currentPage } />
          <Comments currentPage = { currentPage } />
        </div>
      )
    }
}

export default connect((state) => ({

}), {  })(CommentsPage)

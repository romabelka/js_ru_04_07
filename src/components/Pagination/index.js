import React, {Component, PureComponent} from 'react'
import PropTypes from 'prop-types'
import Loader from '../Loader'
import {Link} from 'react-router-dom'

class Pagination extends Component {
    static propTypes = {

    }
    state = {
      previousPage: null,
      nextPage: 2
    }

    componentWillReceiveProps(nextProps) {
        this.calculatePageNumbers(nextProps.currentPage);
    }
    componentWillMount() {
        this.calculatePageNumbers(this.props.currentPage);
    }

    render() {
      const {basePath} = this.props
        return (
            <div>
                <Link to =  {basePath + this.state.previousPage}>Previous Page</Link>
                <Link to = {basePath + this.state.nextPage}>Next Page</Link>
            </div>
        )
    }



    calculatePageNumbers(page) {
        let nextPage = +page + 1;

        let previousPage;

        if (page > 1) {
            previousPage = page - 1;
        } else {
            previousPage = 1;
        }

        this.setState({
            previousPage: previousPage,
            nextPage: nextPage,
        });


    }
}

export default Pagination

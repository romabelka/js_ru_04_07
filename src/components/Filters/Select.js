import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import {connect} from 'react-redux'
import {filterSelect} from '../../AC'

import 'react-select/dist/react-select.css'

class SelectFilter extends Component {

    static propTypes = {
        //from connect
    	articles: PropTypes.array.isRequired,
	    selected: PropTypes.array,
	    filterSelect: PropTypes.func.isRequired
    };

    handleChange = selected => this.props.filterSelect(selected)

    render() {

    	const { articles, selected } = this.props

        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={options}
            value={selected}
            multi={true}
            onChange={this.handleChange}
        />
    }
}

export default connect((state) => ({articles: state.articles, selected: state.selected}), {filterSelect})(SelectFilter)

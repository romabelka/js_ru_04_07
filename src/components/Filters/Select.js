import React, { Component } from 'react'
import Select from 'react-select'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {setIdsFilter} from '../../AC'

import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        setIdsFilter: PropTypes.func.isRequired
    };

    state = {
        selected: null
    }

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(selected) {
        this.setState({ selected })
        this.props.setIdsFilter(selected.map(option => option.value))
    }

    render() {
        const { articles } = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={options}
            value={this.state.selected}
            multi={true}
            onChange={this.handleChange}
        />
    }
}

export default connect(
    state => ({ articles: state.articles }),
    { setIdsFilter }
)(SelectFilter)

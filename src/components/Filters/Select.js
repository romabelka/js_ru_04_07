import React, { Component, PropTypes } from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import { connect } from 'react-redux';
import { setSelectFilter } from '../../AC'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        selected: PropTypes.any
    };

    handleChange = selected => this.props.setSelectFilter(selected)

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

const mapStateToProps = ({articles, filters}) => {
    return {
        articles: articles,
        selected: filters.selected
    }
}

export default connect(mapStateToProps, { setSelectFilter })(SelectFilter)
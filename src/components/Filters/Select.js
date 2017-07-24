import React, { Component, PropTypes } from 'react'
import Select from 'react-select'

import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        filterArticles: PropTypes.func.isRequired
    };

    handleChange = selected => this.props.filterArticles( selected )

    render() {
        const { articles, filteredArticles } = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={options}
            value={filteredArticles}
            multi={true}
            onChange={this.handleChange}
        />
    }
}

export default SelectFilter
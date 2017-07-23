import React, { Component, PropTypes } from 'react'
import Select from 'react-select'

import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        setFilter: PropTypes.func
    };

    handleChange = selected => {
        this.props.setFilter( selected );
    }

    render() {
        const { articles, curValue } = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={options}
            value={curValue}
            multi={true}
            onChange={this.handleChange}
        />
    }
}

export default SelectFilter
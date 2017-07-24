import React, { Component, PropTypes } from 'react'
import Select from 'react-select'

import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    static propTypes = {
        handleSelect: PropTypes.func.isRequired,
        filterArticles: PropTypes.func.isRequired,
        selectedArticlesState: PropTypes.array.isRequired
    };

    handleChange = (selected) => {
      const { handleSelect, filterArticles, selectedArticlesState, dateRangeState } = this.props;
      handleSelect(selected);
      filterArticles(selected, dateRangeState);
    };

    render() {
        const { articles, selectedArticlesState } = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={options}
            value={selectedArticlesState}
            multi={true}
            onChange={this.handleChange}
        />
    }
}

export default SelectFilter

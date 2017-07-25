import React, { Component, PropTypes } from 'react'
import Select from 'react-select'
import {connect} from 'react-redux'
import {setSelectValue, filterArticleByTitle} from '../../AC'

import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    static propTypes = {
        selectArticles: PropTypes.array.isRequired,
        setSelectValue: PropTypes.func.isRequired
    };

    render() {
        const { selectArticles, selected } = this.props;

        const options = selectArticles.map(article => ({
            label: article.title,
            value: article.id
        }));

        return <Select
            options={options}
            value={selected}
            multi={true}
            onChange={this.changeSelect}
        />
    }

    changeSelect = (value) => {
        const {setSelectValue} = this.props;
        setSelectValue(value);
    }
}

export default connect(
    (state) => {
        const {filters} = state;
        return {
            selectArticles : filters.selectArticles,
            selected: filters.selected
        }
    },
    { setSelectValue }
)(SelectFilter)
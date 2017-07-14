import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ArticlesChart extends Component {
    componentWillReceiveProps(nextProps) {
        //change chart with d3
    }

    render() {
        return <div ref = {this.setContainerRef}/>
    }

    setContainerRef = container => {
        this.container = container
        //do some logic with d3 on container
    }
}

ArticlesChart.propTypes = {

}

export default ArticlesChart
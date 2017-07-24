/**
 * Created by oem on 7/23/17.
 */
import React, {Component, PureComponent} from 'react';
import PropTypes from 'prop-types';

class ArticlesChart extends Component {
    static propTypes = {

    };

    componentWillReceiveProps(nextProps) {

    }


    render() {
        return (
            <div ref = {this.setContainerRef}/>
        )
    }

    setContainerRef = (container) => {
        this.container = container;

        //do some logick
    }

}

export default ArticlesChart;

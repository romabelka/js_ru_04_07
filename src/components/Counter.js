/**
 * Created by oem on 7/24/17.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import {increment} from '../AC'
import {decrement} from '../AC'

class Counter extends Component {
    static propTypes = {
        count: PropTypes.number,
        handleIncrement: PropTypes.func,
        handleDecrement: PropTypes.func
    };

    render() {
        const {count, handleIncrement, handleDecrement} = this.props;
        return (
            <div>
                <h1>{count}</h1>
                <button onClick={handleIncrement}>Increment meet</button>
                <button onClick={handleDecrement}>Decrement meet</button>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        count: state.counterReducer
    }
};

export default connect(mapStateToProps, (dispatch) => ({
        handleIncrement: () => {
            dispatch({ type: 'INCREMENT' });
        },
        handleDecrement: decrement
    }
))
(Counter);

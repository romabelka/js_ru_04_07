import React, {Component} from 'react';
import PropTypes from 'prop-types';

class LanguageBar extends Component {

    render() {
        return (
            <div>
                Language:
                <ul>
                    <li><a href="#" onClick={this.props.handleClick('en')}>English</a></li>
                    <li><a href="#" onClick={this.props.handleClick('ru')}>Русский</a></li>
                </ul>
            </div>
        );
    }
}


export default LanguageBar;

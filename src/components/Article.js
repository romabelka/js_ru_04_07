import React, {Component} from 'react';
import CommnetsList from './CommnetsList';
import PropTypes from 'prop-types';

class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.string,
            comments: PropTypes.array
        }).isRequired,
        isOpen:PropTypes.bool,
        toggleOpen: PropTypes.func
    };

    render() {
        const {article, toggleOpen} = this.props;
        return (
            <div>
                <h3 onClick={toggleOpen}>{ article.title }</h3>
                { this.getBody() }
            </div>
        )
    }

    getBody() {
        const {article, isOpen} = this.props;

        if (!isOpen) return null;

        return (
            <div>
                <p>{ article.text }</p>
                <CommnetsList comments={article.comments}/>
            </div>
        )
    }
}

export default Article;

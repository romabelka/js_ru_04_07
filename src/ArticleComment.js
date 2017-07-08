import React, {Component} from 'react'

class ArticleComment extends Component {
    constructor(props) {
        super(props);

        this.state = { opened: false };
        this.toggleText = this.toggleText.bind(this);
    }

    render() {
        const opened = this.state.opened;

        return (
            <li>
                <div>
                    <b>{this.props.user}</b>
                    &nbsp;
                    <em onClick={this.toggleText} style={{cursor: 'pointer'}}>{opened ? 'Скрыть' : 'Раскрыть'}</em>
                </div>
                <div style={{display: opened ? 'block' : 'none'}}>{this.props.text}</div>
            </li>
        );
    }

    toggleText() {
        this.setState({ opened: !this.state.opened });
    }
}

export default ArticleComment

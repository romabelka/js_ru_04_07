import React, {Component} from 'react'

class Article extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            button: false
        }
    }

    render() {
        const { article } = this.props;
        return (
            <div>
                <h3 onClick = {this.handleClick}>{article.title}</h3>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        if (!this.state.isOpen) return null;

        return <div>
            <p>{this.props.article.text}</p>
            <button onClick={this.handleOpenComment}>{this.state.button ? "Открыть комментрий" : "Закрыть комментарий"}</button>
            {this.getComment()}
            </div>
    }

    getComment(){
        if (this.state.button){
            return this.props.article.comments.map(key => {
                return <div>
                    <h4>Комментраий от: {key.user}</h4>
                    <h5>Тескст комментария {key.text}</h5>
                </div>
            })
        }
    }

    handleOpenComment = () => {
        this.setState({
            button: !this.state.button
        })
    };

    handleClick = (ev) => {
        ev.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        })
    };
}

export default Article
import React, {Component} from 'react'

class Article extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false,
			isCommentOpen: false
        }
    }

    render() {
        const { article } = this.props
        return (
            <div>
                <h3 onClick = {this.handleClick}>{article.title}</h3>
                {this.getBody()}
				<h4 onClick = {this.handleClickComment}><i>{this.getCommentOpen()}</i></h4>
				<ul>{this.getCommets()}</ul>
            </div>
        )
    }

    getBody() {
        if (!this.state.isOpen) return null

        return <p>{this.props.article.text}</p>
    }
	
	getCommets() {
        if (!this.state.isCommentOpen) return null

        return this.CommentList(this.props.article.comments)
    }
	
	getCommentOpen(){
		if (!this.state.isCommentOpen) return "Показать комментарии"

        return "Скрыть комментарии"
	}

    handleClick = (ev) => {
        ev.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
	
	handleClickComment =  (ev) => {
        ev.preventDefault()
        this.setState({
            isCommentOpen: !this.state.isCommentOpen
        })
    }
	
	CommentList(comments){
		if(comments){
			return comments.map(comment =>
				<li key = {comment.id}>
					<p><b>{comment.user}</b></p>
					<p>{comment.text}</p>
				</li>
			)
		}
		else 
			return <li>Никто еще не оставил комментриии!</li>
	}
}

/*
function Article(props) {
    const { article } = props
    return (
        <div>
            <h3>{article.title}</h3>
            <p>{article.text}</p>
        </div>
    )
}
*/

export default Article
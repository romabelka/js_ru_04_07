import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import accordion from '../decorators/accordion'
import {connect} from 'react-redux'

class ArticleList extends Component {
    static propTypes = {
        //from connect
        articles: PropTypes.array.isRequired,
	    selected: PropTypes.array,
	    dateRange: PropTypes.shape({
		    from: PropTypes.object,
		    to: PropTypes.object
	    }),
        //from accordion
        openItemId: PropTypes.string,
        toggleOpenItem: PropTypes.func.isRequired
    }
    render() {
        const { articles, openItemId, toggleOpenItem, selected, dateRange } = this.props
		
		//фильтруем по select
		let articleElements = filterSelected(articles, selected)
		
		//фильтруем по dateRange
		articleElements = filterDateRange(articleElements, dateRange)
		
		articleElements = articleElements.map(article => <li key={article.id}>
            <Article
                article = {article}
                isOpen = {article.id === openItemId}
                toggleOpen = {toggleOpenItem(article.id)}
            />
        </li>)

        return (
            <ul>
                {articleElements}
            </ul>
        )
		
		function filterDateRange(articles, dateRange){
			if (dateRange.from && dateRange.to) {
				let filterArticles =  articles.filter(article => {
					let articleDate = new Date(article.date);
					return articleDate >= dateRange.from && articleDate <= dateRange.to
				})
				return filterArticles;
			}
			return articles;
		}
		
		
		function filterSelected(articles, selected){
			if (selected.length > 0) {
				let selectedLabels = {};
				selected.map(selected => selectedLabels[selected.label] = true);

				let articlesSelected = [];
				articles.map(article => {
					if (selectedLabels[article.title]) articlesSelected.push(article);
				});
				return articlesSelected;
			}
			return articles;
		}
    }
}

const mapStateToProps = (state) => {
    return {
        articles: state.articles,
        selected: state.selected,
        dateRange: state.dateRange
    };
};

export default connect(mapStateToProps)(accordion(ArticleList));


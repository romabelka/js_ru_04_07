/**
 * Created by oem on 7/23/17.
 */
import  React, {Component} from 'react';
import PropTypes from 'prop-types';
import ArticlesList from './ArticlesList';
import ArticlesChart from './ArticlesChart';
import UserForm from './UserForm'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import Filters from './Filters/index.js'

class App extends Component {
    static propTypes = {};

    state = {
        selected: null
    };

    render() {
        const {articles} = this.props;
        const options = articles.map(articles => ({
            label: articles.title,
            value: articles.id
        }));

        return (
            <div>
                <UserForm/>
                <Filters articles = {articles}/>
                <Select options={options} onChange = {this.handleSelect} value = {this.state.selected} multi/>
                <ArticlesList articles={articles}/>
                <ArticlesChart articles={articles}/>
            </div>
        )
    }

    handleSelect = (selected) => {
        this.setState( {selected} );
        console.log('selected', this.state.selected);
    }
}

export default App
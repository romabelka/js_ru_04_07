/**
 * Created by oem on 7/23/17.
 */
import  React, {Component} from 'react';
import PropTypes from 'prop-types';
import ArticlesList from './ArticlesList';
import ArticlesChart from './ArticlesChart';
import UserForm from './UserForm';
import 'react-select/dist/react-select.css';
import Filters from './Filters/index.js';
import Counter from './Counter'

class App extends Component {
    static propTypes = {};

    state = {
        selected: null
    };

    render() {
        const {articles} = this.props;

        return (
            <div>
                <Counter />
                <UserForm />
                <Filters />
                <ArticlesList />
            </div>
        )
    }

    handleSelect = (selected) => {
        this.setState( {selected} );
        console.log('selected', this.state.selected);
    }
}

export default App

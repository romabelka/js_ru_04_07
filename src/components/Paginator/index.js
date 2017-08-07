import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom'
import './style.css'

function Paginator(props) {
    const {pages, baseURL} = props
    let comments = [...Array(pages)]
        .map((_, i) => <NavLink to={baseURL + ++i} key={i} activeClassName="active">{i}</NavLink>)

    return (
        <div className="pagination">
            {comments}
        </div>
    );
}

Paginator.propTypes = {
    baseURL: PropTypes.string,
    pages: PropTypes.number
};

Paginator.defaultProps = {
    baseURL: '',
    pages: 0
};

export default Paginator
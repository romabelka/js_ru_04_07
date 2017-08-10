import React from 'react'
import PropTypes from 'prop-types'
import localization from '../decorators/localization'

function Loader({dict}) {
    return (
        <h2>{dict.Loading}...</h2>
    )
}

Loader.propTypes = {
}

export default localization(Loader)
import React from 'react'
import PropTypes from 'prop-types'

export default Component => class Localization extends React.Component {

    static contextTypes = {
        local: PropTypes.object,
        lang: PropTypes.string
    }

    render() {
        const dictionary = this.context.local[this.context.lang]

        return <Component {...this.props} dict={dictionary}/>
    }

}
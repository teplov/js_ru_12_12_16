import React, { Component, PropTypes } from 'react'

class Chart extends Component {
    static propTypes = {

    };

    componentDidMount() {
        //do some magic with this.refs.container
    }

    render() {
        return (
            <div ref = "container"/>
        )
    }
}

export default Chart
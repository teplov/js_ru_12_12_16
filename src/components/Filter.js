import React, { Component, PropTypes } from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

class Filter extends Component {
    static propTypes = {

    };

    state = {
        selected: null
    }

    render() {
        const options = this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
                <Select options={options} value={this.state.selected} onChange={this.handleChange} multi={true}/>
            </div>
        )
    }

    handleChange = selected => this.setState({
        selected
    })
}

export default Filter
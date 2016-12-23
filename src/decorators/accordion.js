import React from 'react'

export default (Component) => class AccordionDecorator extends React.Component {
    constructor() {
        super()
        this.state = {
            openItemId: false
        }
    }

    render() {
        return <Component {...this.props} isOpenItem = {this.isOpen} toggleOpenItem = {this.toggleOpenItem}/>
    }

    isOpen = id => this.state.openItemId == id

    toggleOpenItem = id => ev => {
        this.setState({
            openItemId: this.state.openItemId == id ? null : id
        })
    }

}
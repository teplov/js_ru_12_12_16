export default {
    getInitialState() {
        return {
            isOpen: false
        }
    },
    toggleOpen: function(ev) {
        ev && ev.preventDefault && ev.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}
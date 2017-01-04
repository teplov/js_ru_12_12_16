import { createStore } from 'redux'
import reducer from '../reducer'

const store = createStore(reducer)
//not for prod
window.store = store

export default store
import { INCREMENT } from '../constants'

export default (state = 0, action) => {
    const { type } = action

    switch (type) {
        case INCREMENT:
            return state + 1
    }

    return state

}
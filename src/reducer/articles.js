import { DELETE_ARTICLE } from '../constants'
import { articles } from '../fixtures'

export default (articlesState = articles, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articlesState.filter(article => article.id !== payload.id)
    }

    return articlesState
}
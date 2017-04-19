import {
    LOAD_PAGES_REQUEST,
    LOAD_PAGES_SUCCESS,
    LOAD_PAGE_SUCCESS,

    LOAD_MASTER_REQUEST,
    LOAD_MASTER_SUCCESS,
    LOAD_MASTER_FAILURE
} from '../constants/actionTypes'

const initialState = []
const isLoading = false

export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_PAGES_SUCCESS:
            return action.payload
        case LOAD_PAGE_SUCCESS:
            return [action.payload]
        default:
            return state
    }
}

export const isLoadingData = (state = isLoading, action) => {
    switch (action.type) {
        case LOAD_PAGES_REQUEST:
            return true
        case LOAD_PAGES_SUCCESS:
            return isLoading
        default:
            return state
    }
}

export const getPageById = (state, id) => (
    state.pagesData.find((page) => page.id === +id) || { title: '', content: '' }
)

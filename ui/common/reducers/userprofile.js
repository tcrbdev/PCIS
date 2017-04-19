import { NAV_MENU_CLICK } from '../constants/actionTypes'
const initialState = []
const navMenuOpen = true
const submitting = false

export default (state = initialState, action) => {
    switch (action.type) {
        case '':
            return action.payload
        default:
            return state
    }
}

export const isNavMenuOpen = (state = navMenuOpen, action) => {
    switch (action.type) {
        case NAV_MENU_CLICK:
            return !state
        default:
            return state
    }
}

export const onSubmitting = (state = submitting, action) => {
    switch (action.type) {
        case "@@redux-form/START_SUBMIT":
            return true
        case "@@redux-form/STOP_SUBMIT":
            return false
        default:
            return state
    }
}

export const myTestData = (state = initialState, action) => {
    switch (action.type) {
        case "test":
            console.log("------------------------------ Reducer Open -----------------------------------")
            console.log([action.data])
            return [action.data]
        default:
            return state
    }
}

export const changeValue = (state = initialState, action) => {
    switch (action.type) {
        case "test":
            console.log("------------------------------ Reducer Open -----------------------------------")
            return action.data.myDate
        default:
            return state
    }
}

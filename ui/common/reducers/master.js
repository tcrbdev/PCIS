import {
    //MASTER_PROVINCE
    LOAD_MASTER_PROVINCE_REQUEST,
    LOAD_MASTER_PROVINCE_SUCCESS,
    LOAD_MASTER_PROVINCE_FAILURE,

    //MASTER_AMPHUR
    LOAD_MASTER_AMPHUR_REQUEST,
    LOAD_MASTER_AMPHUR_SUCCESS,
    LOAD_MASTER_AMPHUR_FAILURE,

    //MASTER_DISTRICT
    LOAD_MASTER_DISTRICT_REQUEST,
    LOAD_MASTER_DISTRICT_SUCCESS,
    LOAD_MASTER_DISTRICT_FAILURE,

    //MASTER_SOURCE_TYPE
    LOAD_MASTER_SOURCE_TYPE_REQUEST,
    LOAD_MASTER_SOURCE_TYPE_SUCCESS,
    LOAD_MASTER_SOURCE_TYPE_FAILURE,

    //MASTER_CHANNEL_TYPE
    LOAD_MASTER_CHANNEL_TYPE_REQUEST,
    LOAD_MASTER_CHANNEL_TYPE_SUCCESS,
    LOAD_MASTER_CHANNEL_TYPE_FAILURE,

    //MASTER_BUSINESS_TYPE
    LOAD_MASTER_BUSINESS_TYPE_REQUEST,
    LOAD_MASTER_BUSINESS_TYPE_SUCCESS,
    LOAD_MASTER_BUSINESS_TYPE_FAILURE,

    //MASTER_INTERESTING_PRODUCT
    LOAD_MASTER_INTERESTING_PRODUCT_REQUEST,
    LOAD_MASTER_INTERESTING_PRODUCT_SUCCESS,
    LOAD_MASTER_INTERESTING_PRODUCT_FAILURE,

    //MASTER_OPPORTUNITY_CUSTOMER
    LOAD_MASTER_OPPORTUNITY_CUSTOMER_REQUEST,
    LOAD_MASTER_OPPORTUNITY_CUSTOMER_SUCCESS,
    LOAD_MASTER_OPPORTUNITY_CUSTOMER_FAILURE,

    //MASTER_PRESENT_PRODUCT_TYPE
    LOAD_MASTER_PRESENT_PRODUCT_TYPE_REQUEST,
    LOAD_MASTER_PRESENT_PRODUCT_TYPE_SUCCESS,
    LOAD_MASTER_PRESENT_PRODUCT_TYPE_FAILURE,

    //MASTER_BUSINESS_PREFIX
    LOAD_MASTER_BUSINESS_PREFIX_REQUEST,
    LOAD_MASTER_BUSINESS_PREFIX_SUCCESS,
    LOAD_MASTER_BUSINESS_PREFIX_FAILURE,

    //MASTER_APPOINTMENT_REASON
    LOAD_MASTER_APPOINTMENT_REASON_REQUEST,
    LOAD_MASTER_APPOINTMENT_REASON_SUCCESS,
    LOAD_MASTER_APPOINTMENT_REASON_FAILURE
} from '../constants/actionTypes'

const initialState = []

export const MASTER_PROVINCE = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_MASTER_PROVINCE_SUCCESS:
            return action.payload
        default:
            return state
    }
}

export const MASTER_AMPHUR = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_MASTER_AMPHUR_SUCCESS:
            return action.payload
        default:
            return state
    }
}

export const MASTER_DISTRICT = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_MASTER_DISTRICT_SUCCESS:
            return action.payload
        default:
            return state
    }
}

export const MASTER_SOURCE_TYPE = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_MASTER_SOURCE_TYPE_SUCCESS:
            return action.payload
        default:
            return state
    }
}

export const MASTER_CHANNEL_TYPE = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_MASTER_CHANNEL_TYPE_SUCCESS:
            return action.payload
        default:
            return state
    }
}

export const MASTER_BUSINESS_TYPE = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_MASTER_BUSINESS_TYPE_SUCCESS:
            return action.payload
        default:
            return state
    }
}

export const MASTER_INTERESTING_PRODUCT = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_MASTER_INTERESTING_PRODUCT_SUCCESS:
            return action.payload
        default:
            return state
    }
}

export const MASTER_OPPORTUNITY_CUSTOMER = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_MASTER_OPPORTUNITY_CUSTOMER_SUCCESS:
            return action.payload
        default:
            return state
    }
}

export const MASTER_PRESENT_PRODUCT_TYPE = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_MASTER_PRESENT_PRODUCT_TYPE_SUCCESS:
            return action.payload
        default:
            return state
    }
}

export const MASTER_BUSINESS_PREFIX = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_MASTER_BUSINESS_PREFIX_SUCCESS:
            return action.payload
        default:
            return state
    }
}

export const MASTER_APPOINTMENT_REASON = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_MASTER_APPOINTMENT_REASON_SUCCESS:
            return action.payload
        default:
            return state
    }
}

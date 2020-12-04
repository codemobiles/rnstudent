import { APP_ADD, APP_DEL } from "../constants"

const initialState = {
    counter:0
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case APP_ADD:
        return { ...state, counter: state.counter + payload }
    case APP_DEL:
        return { ...state, counter: state.counter - payload }        

    default:
        return state
    }
}

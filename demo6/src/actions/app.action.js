import { APP_ADD, APP_DEL } from "../constants";

export const setApptoAdd = (payload) => ({
    type: APP_ADD,
    payload
})

export const setApptoDel = (payload) => ({
    type: APP_DEL,
    payload
})


export const add = (value)=>{
    return dispatch=>{
        setApptoAdd(value)
    }
}


export const del = (value)=>{
    return dispatch=>{
        setApptoDel(value)
    }
}

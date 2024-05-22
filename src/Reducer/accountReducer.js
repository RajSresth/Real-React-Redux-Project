import { decr, incr } from "../Action/action.js"


export function accReducer(state={amount:1},action){
    switch (action.type) {
        case incr:
            return {amount:state.amount+1}
        case decr:
            return {amount:state.amount-1}
    
        default:
            return state
    }
}
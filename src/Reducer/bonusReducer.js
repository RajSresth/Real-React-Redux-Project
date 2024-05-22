import { decPoint, incPoint } from "../Action/action.js"


export function bnsReducer(state={points:0},action){
        switch (action.type) {
            case incPoint:
                return {points:state.points+1}

            case decPoint:
            return {points:state.points-1}
        
            default:
                return state
        }
}
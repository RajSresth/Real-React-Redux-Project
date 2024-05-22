
// Action Names:- Accounts
export const incr = "account/inc"
export const decr = "account/dec"


// Action Names:- Bonus
export const incPoint = "bonus/incPoint"
export const decPoint = "bonus/decPoint"




// Action Creator for Account
export function incAmount(){
    return {type:incr}
}

export function decAmount(){
    return {type:decr}
}

// Action Creator for Bonus
export function incBonus(){
    return {type:incPoint}
}

export function decBonus() {
    return {type:decPoint}
}
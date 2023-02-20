export const depositeMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type :"deposite",
            payload : amount
        })
    }
}

export const withdrawMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type :"Withdraw",
            payload : amount
        })
    }
}
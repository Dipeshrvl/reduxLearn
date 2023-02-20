const reducer = (state = 0, actions) => {
    if (actions.type === "deposite") {
        return state + actions.payload;
    } else if (actions.type === "Withdraw") {
        return state - actions.payload;
    } else {
        return state;
    }
}

export default reducer;
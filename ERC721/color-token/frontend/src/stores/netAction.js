export const types = {
    NET_ACCOUNT_SET: "NET_ACCOUNT_SET",
    NET_WEB3_SET: "NET_WEB3_SET",
}

export const setAccount = (payload) => dispatch => {
    dispatch({
        type: types.NET_ACCOUNT_SET,
        payload
    })
};

export const setWeb3Context = (payload) => dispatch => {
    dispatch({
        type: types.NET_WEB3_SET,
        payload
    })
}
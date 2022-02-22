import { types } from './netAction'

const initialState = {
  account: {
    address: ''
  },
  web3context: {
    library: {
      provider: null
    },
    connector: null,
  },
};

const netReducer = (netState = initialState, { type, payload }) => {
  switch (type) {
    case types.NET_ACCOUNT_SET:
      return {
        ...netState,
        account: payload
      };
    case types.NET_WEB3_SET:
      return {
        ...netState,
        web3context: payload
      };
    default:
      return netState;
  }
};

export default netReducer;

export const getNet = (state) => state.net;

import { AccountBalance } from '@material-ui/icons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InjectedConnector } from '@web3-react/injected-connector';
import { RootState } from './store';

export type Account = {
  address: string;
}

export type Web3ContextLibrary = {
  provider: any;
}

export type Web3Context = {
  library: Web3ContextLibrary;
  connector: InjectedConnector;
}

export interface NetState {
  account: Account | null;
  web3context: Web3Context | null;
}

const initialState: NetState = {
  account: null,
  web3context: null,
};

export const netSlice = createSlice({
  name: 'account',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setAccount: (state, action: PayloadAction<any>) => {
      state.account = action.payload;
    },
    setWeb3Context: (state, action: PayloadAction<any>) => {
      state.web3context = action.payload;
    },
  },
});

export const { setAccount, setWeb3Context } = netSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const getNet = (state: RootState) => state.net;

export default netSlice.reducer;

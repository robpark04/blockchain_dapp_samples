import { connectRouter, routerMiddleware } from "connected-react-router";
import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import net from './netReducer';
import thunk from 'redux-thunk'

const rootReducer = history => 
  combineReducers({
    router: connectRouter(history),
    net
  })

const buildStore = (history, reduxState = undefined) => {
  const router = routerMiddleware(history);

  const store = createStore(
    rootReducer(history),
    reduxState,
    compose(applyMiddleware(router, thunk))
  )

  return store;
}

export default buildStore;
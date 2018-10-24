import * as React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import promiseMiddleware from "redux-promise-middleware";
import thunk from "redux-thunk";
import App from "./App";
import rootReducer, { IRootState } from "./reducers";

const logger = (createLogger as any)();
const promise = promiseMiddleware();

let middleware = applyMiddleware(logger, thunk, promise);
// let middleware = applyMiddleware(logger, thunk);

if (process.env.NODE_ENV === "development") {
  middleware = composeWithDevTools(middleware);
}

const store = createStore(rootReducer, {}, middleware) as Store<IRootState>;

class ReduxRoot extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default ReduxRoot;

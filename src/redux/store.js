import { createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from "./reducers";

const composeEnhancers = composeWithDevTools({
    // Specify custom devTools options
  });
  const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
    // other store enhancers if any
  ));

  export default store;
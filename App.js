/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { Provider } from "react-redux";
import Router from "./src/router/Router";
import store from "./src/setup/store";
const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;

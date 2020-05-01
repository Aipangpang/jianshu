import React, { Fragment } from 'react';
import { Provider } from 'react-redux'
import GloablStyle from './style'
import Header from './common/header/index'
import IconfontStyle from "./statics/iconfont/iconfont";
import store from './store/index'

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <GloablStyle />
        <IconfontStyle />
        <Header />
      </Fragment>
    </Provider>
  );
}

export default App;

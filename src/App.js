import React, { Component } from 'react';
import Home from './pages/home';
import ForRouter from './pages/forRouter';
import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers';


//创建store
const store = createStore(rootReducer);

console.log('initial state:', store.getState());

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home></Home>
        <Provider store={store}>
            <ForRouter></ForRouter>
        </Provider>
      </div>
    );
  }
}

export default App;

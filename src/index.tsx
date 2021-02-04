import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import store from './app/redux/store'
// import Data from './components/data-comp/data.comp'
import LoginPage from './app/pages/login-page/LoginPage'

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <Data /> */}
      {<LoginPage />}
    </div>
  );
}


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GlobalStyle from './style/GlobalStyle';
import { Provider } from 'react-redux';
// import { store } from "./redux/store";

//import configureStore

import { PersistGate } from 'redux-persist/integration/react';

import configureStore from './redux/reducers';

const root = ReactDOM.createRoot(document.getElementById('root'));

const { store, persistor } = configureStore();

root.render(
   <Provider store={store}>
      <GlobalStyle />

      <PersistGate loading={null} persistor={persistor}>
         <App />
      </PersistGate>
   </Provider>
);

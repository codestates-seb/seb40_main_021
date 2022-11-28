import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GlobalStyle from './style/GlobalStyle';
import { Provider } from 'react-redux';
import { store } from './redux/store/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Provider store={store}>
      <GlobalStyle />
      <App />
   </Provider>
);

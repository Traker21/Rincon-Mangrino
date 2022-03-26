import React from 'react';
import ReactDOM from 'react-dom';
import Rutas from './routes/Routes';
import { Provider } from 'react-redux';
import store from './Reducer/store'




ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Rutas />
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);


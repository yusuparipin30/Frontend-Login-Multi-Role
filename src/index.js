import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import "bulma/css/bulma.css";

//1.import axios
import axios from "axios";

/*2.men set default Credentials,di set di file inex.js tujuannya
agar setiap reques yang kita lakukan ke server selalu menyertakan credentialnya ,ini berlaku secara global
dan tidak perlu lgi menyertakan credentialnya secara manual di setiap reques*/
axios.defaults.withCredentials = true;

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);



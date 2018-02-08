import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routers from './Routers';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux"
import store from './store'
 
ReactDOM.render(
   <Provider store={store}> 
       <Routers />
   </Provider>, document.getElementById('root'));
registerServiceWorker();

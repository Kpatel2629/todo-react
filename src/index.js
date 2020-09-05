import React from 'react';
import ReactDOM from 'react-dom';
import { createStore,applyMiddleware,compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './store/reducer';
import createSagaMiddleware from 'redux-saga';
import { watchDelete } from './store/Sagas/Index';


const sagaMiddleware = createSagaMiddleware();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const logger = store => {
//     return next => {
//         return action => {
//             console.log('[Middleware] Dispatching', action);
//             const result = next(action);
//             console.log('[Middleware] next state', store.getState());
//             return result;
//         }
//     }
// };

const store = createStore(reducer,composeEnhancer(applyMiddleware(thunk,sagaMiddleware)));

sagaMiddleware.run(watchDelete);

ReactDOM.render(<Provider store={store}><App /></Provider> , document.getElementById('root'));
registerServiceWorker();

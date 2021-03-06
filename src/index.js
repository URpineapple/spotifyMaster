import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { createStore } from 'redux'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

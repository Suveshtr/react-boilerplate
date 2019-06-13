//import {greeting} from "./greet"
//import getGreeting from './greet'
//console.log(getGreeting("World!"));
import React from 'react'
import ReactDOM from 'react-dom'
import '@babel/polyfill'
import App from './App'

import './style.css'

ReactDOM.render(
  <App/>,
  document.getElementById('app')
)


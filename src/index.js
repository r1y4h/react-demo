import React from 'react'
import ReactDOM from 'react-dom'
import smoothscroll from 'smoothscroll-polyfill'
import { ThemeProvider } from 'styled-components'

import App from './App'
import './sass/main.scss'

// eslint-disable-next-line import/no-webpack-loader-syntax
const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!./sass/_vars.scss')

smoothscroll.polyfill()

const render = module.hot ? ReactDOM.render : ReactDOM.hydrate
render(
  <ThemeProvider theme={{ theme }}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)

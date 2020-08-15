import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {GlobalStyle} from './style'
import {IconFontGlobalStyle} from './statics/icontfont/iconfont'

ReactDOM.render(
  <div>
    <GlobalStyle />
    <IconFontGlobalStyle />
    <App />
  </div>,
  document.getElementById('root')
);



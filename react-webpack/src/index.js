import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
 
function onListShow(ev) {
  console.log('ev: ', ev)
  console.log('on list view')
    ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>, kintone.app.getHeaderSpaceElement());
    return ev;
 }
  
 kintone.events.on("app.record.index.show", onListShow);
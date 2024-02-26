import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Menu, Item } from "./Menu";
import { JSX } from 'react/jsx-runtime';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Menu
      renderTrigger={(props: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLButtonElement> & React.ButtonHTMLAttributes<HTMLButtonElement>) => <button {...props}>Actions</button>}
      onAction={alert}
    >
      <Item key="copy">Copy application</Item>
      <Item key="rename">Rename application</Item>
      <Item key="move" title="Move to">
        <Item key="move-to-shared">Shared</Item>
        <Item key="move-to-desktop">Desktop</Item>
        <Item key="move-to-favorite">Favorite</Item>
      </Item>
      <Item key="delete">Delete application</Item>
    </Menu>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

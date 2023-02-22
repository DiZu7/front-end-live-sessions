import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import UsersList from './UserList';

const users = [
  { id: 11, name: 'Tom', age: 20 },
  { id: 22, name: 'Bob', age: 100 },
  { id: 3424, name: 'Rob', age: 32 },
  { id: 10, name: 'Rim', age: 45 },
  { id: 12, name: 'Skin', age: 27 },
  { id: 13, name: 'Bobby', age: 26 },
  { id: 14, name: 'Jack', age: 19 },
  { id: 15, name: 'Bom', age: 21 },
  { id: 16, name: 'DOM', age: 22 },
  { id: 17, name: 'Toretto', age: 60 },
];

const rootElement = document.querySelector('#root');

ReactDOM.render(<UsersList users={users} />, rootElement);

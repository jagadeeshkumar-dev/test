import logo from './logo.svg';
import React,{useEffect,useState} from 'react'

import './App.css';

import Counter from './components/Counter'
import Todo from './components/Todo'
function App() {

  

  return (
    <div className="App">
     <Counter/>
     <Todo/>
    </div>
  );
}

export default App;

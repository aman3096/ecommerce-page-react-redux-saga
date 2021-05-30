import React,{useState} from "react";
import { createStore } from "redux";
import logo from './logo.svg';
import './App.css';
import store from "./redux/store"
import {addBug, removeBug, resolveBug} from "./redux/actionCreators"

const unsubscribe = store.subscribe(()=>{
  console.log("store changed", store.getState());
})

store.dispatch(addBug("Bug1"));
store.dispatch(addBug("Bug2"));
store.dispatch(resolveBug(1, "resolved bug 1"));
store.dispatch(removeBug(1))



function App() {
  const [ data, setData]  = useState(store.getState());
  return (
    <div className="App">
    {JSON.stringify(data)}
    </div>
  );
}

export default App;

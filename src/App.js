import React from 'react';
import logo from './logo.svg';
import './App.less';
import {Button} from "antd";
import { Switch, Route} from "react-router-dom";
import {view as RouteContainer} from "./router/index"

function App() {
  return (
    <div className="App">
        <RouteContainer/>
    </div>
  );
}

export default App;

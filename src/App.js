import React from 'react';
import logo from './logo.svg';
import './App.less';
import {Button} from "antd";
import { Switch, Route} from "react-router-dom";
import {view as ContainerCard} from "./router/index"
import {Layout} from "antd";

const {Header,Content} = Layout;

function App() {
  return (
    <div className="App">
        <Layout className="layout">
            <div className="Header">
                <ContainerCard/>
            </div>
        </Layout>
    </div>
  );
}

export default App;

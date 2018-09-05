import React, { Component } from 'react';

import './App.css';
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl';
import Main from './components/main';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header title="Title" scroll>
            <Navigation>
               
                <a href="/resume">Details</a>
                <a href="/projects">Services </a>
                <a href="/contact">Contact</a>
                <a href="/aboutme">About us</a>
                <a href="/counter">Items</a>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <a href="/">Details</a>
                <a href="/">Services</a>
                <a href="/">Contact</a>
                <a href="/">About us</a>
                <a href="/">Items</a>

            </Navigation>
        </Drawer>
        <Content class="items">
          
            <Main />
        </Content>
    </Layout>
</div>



    );
  }
}

export default App;

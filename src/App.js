import React,{ Component } from 'react';
import './assets/css/App.css';
import Header from './components/Header';
import Postlist from './components/Postlist';

class App extends Component{
    render(){
      return(
        <>
        <Header />
        <Postlist />
        </>
      )
    }
}

export default App;
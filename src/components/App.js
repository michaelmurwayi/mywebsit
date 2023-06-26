import './App.css';
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './Home/Home'

class App extends React.Component{
  render(){
    return(
      <div>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' Component={Home}/>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
export default App;

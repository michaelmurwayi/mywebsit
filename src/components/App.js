import './App.css';
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './Home/Home'
import Resume from './Resume/Resume'
import NotFound  from './NotFound';

class App extends React.Component{
  render(){
    return(
      <div>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' Component={Home}/>
            <Route exact path='resume' Component={Resume}/>
            <Route exact path ='*' Component={NotFound}/>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
export default App;

import React from 'react'
import {Switch, Route} from 'react-router-dom'

import './App.css';
import ErrorBoundary from './components/error-boundry/error-boundry.component'
import HomePage from './pages/homepage.component'


function App() {
  return (
    <div className='App'>
      <ErrorBoundary>
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
        </Switch>
      </ErrorBoundary>
    </div>
  );
}

export default App;

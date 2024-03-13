import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MentorList from './components/MentorList';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
function App() {
  return (
    <Router>
    <div className="App">
      <Route path="/" exact component={MentorList}/>
    </div>
    </Router>
  );
}

export default App;

import React, { Component } from 'react';
import TaskList from './TaskList.js';
import Date from './Date.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div style={{padding: '30px 30px'}}>
          <Date />
          <br />
          <TaskList />
      </div>
    );
  }
}

export default App;

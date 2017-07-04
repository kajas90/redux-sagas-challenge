import React from 'react';

// import components from react-router-dom if needed
import AddNote from './AddNote'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Add Note Container</h1>
        <AddNote/>
      </div>
    );
  }
}

export default App;

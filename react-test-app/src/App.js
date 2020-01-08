import React from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends React.Component {
  state = {
    todos: [
      { 
        id: 1,
        title: 'Take out garbage',
        completed: false
      },
      { 
        id: 2,
        title: 'Read book',
        completed: true
      },
      { 
        id: 2,
        title: 'Meeting with boss',
        completed: false
      }
    ]
  }
  render() {
   console.log(this.state.todos[0].title);
    console.log(this.state.todos);
    return (
      <div className="App">
       <h1>App</h1>
       <Todos todos={this.state.todos} />
      </div>
    );
  }
 
}

export default App;

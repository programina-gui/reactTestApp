import React from 'react';

class Todos extends React.Component {

    render () {

        return this.props.todos.map((todo) => (
            <h3>{todo.title }</h3>
        ))
        // option 1: 
        // console.log('Todos Component', this.props.todos)
        // return (
        //     <div className="App">
        //         <h2>Todos - First Component</h2>
        //     </div>
        // )
    }

}

export default Todos;
import { Component } from 'react';
import TodoList from './TodoList';
import AddTask from './AddTask';

class App extends Component {
  state = {
    tasks: [
      {
        id: 1,
        description: 'Buy Tabac !',
        done: false,
      },
      {
        id: 2,
        description: 'Buy more Tabac !',
        done: false,
      },
      {
        id: 3,
        description: 'Save the world !',
        done: false,
      },
    ]
  }

  addTask = (task) =>{ 
    if(task.description.trim() === ''){
      alert('Please enter a task description');
      return;
    }
    this.setState({
    tasks: [...this.state.tasks, task]
    }
  )}

  doneTask = (id) => this.setState({
    tasks: this.state.tasks.map((el) => {
      if (el.id === id) {
        return { ...el, done: !el.done }
      }
      return el
    })
  })
  deleteTask = (id) => this.setState({
    tasks: this.state.tasks.filter((el) => el.id !== id)
  })
  render() {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
      }} >
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }} >
          <h1>Here is a list of what you should do</h1>
        </div>
        <TodoList todos={this.state.tasks} handleDelete = {this.deleteTask} handleDone = {this.doneTask}/>
        <AddTask handleAdd={this.addTask} />
      </div>
    );
  }
}

export default App;

import {Component} from 'react'
import TodoItem from '../TodoItem/index'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
    completed: false,
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
    completed: false,
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
    completed: false,
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
    completed: false,
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
    completed: false,
  },
  {
    id: 6,
    title: 'Fix the production issue',
    completed: false,
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
    completed: false,
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
    completed: false,
  },
]

// Write your code here

class SimpleTodos extends Component {
  state = {todosCardList: initialTodosList, newTodo: ''}

  addNewTodo = event => {
    this.setState({
      newTodo: event.target.value,
    })
  }

  deleteItem = id => {
    const {todosCardList} = this.state
    const filteredItemsList = todosCardList.filter(
      eachItem => eachItem.id !== id,
    )

    this.setState({
      todosCardList: filteredItemsList,
    })
  }

  onSubmitAddTask = () => {
    const {newTodo, todosCardList} = this.state
    const todoListLength = todosCardList.length

    const newTodoItem = {
      id: todoListLength + 1,
      title: newTodo,
    }
    this.setState(prevState => ({
      todosCardList: [...prevState.todosCardList, newTodoItem],
      newTodo: '',
    }))
    console.log(newTodo)
  }

  toggleComplete = id => {
    this.setState(prevState => {
      const updatedTodoList = prevState.todosCardList.map(todo =>
        todo.id === id ? {...todo, completed: !todo.completed} : todo,
      )
      return {todosCardList: updatedTodoList}
    })
  }

  render() {
    const {todosCardList, newTodo} = this.state
    console.log(newTodo)
    return (
      <div className="container">
        <div className="simpleTodos-container">
          <h1 className="heading">Simple Todos</h1>
          <div>
            <input
              type="text"
              placeholder="add task"
              value={newTodo}
              className="task-input"
              onChange={this.addNewTodo}
            />
            <button
              type="button"
              className="add-button"
              onClick={this.onSubmitAddTask}
            >
              Add
            </button>
          </div>
          <ul>
            {todosCardList.map(eachTodoItem => (
              <TodoItem
                todoItemDetails={eachTodoItem}
                deleteItem={this.deleteItem}
                key={eachTodoItem.id}
                toggleComplete={this.toggleComplete}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos

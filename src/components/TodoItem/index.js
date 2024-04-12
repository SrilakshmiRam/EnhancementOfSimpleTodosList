// Write your code here
import {useState} from 'react'

import './index.css'

const TodoItem = props => {
  const {todoItemDetails, deleteItem, toggleComplete} = props
  const {title, id} = todoItemDetails
  const [onClickEdit, setButtonText] = useState(false)
  const [isChecked, setCheckboxSelected] = useState(false)
  const [updatedTitle, setUpdatedTitle] = useState(title)

  const OnDelete = () => {
    deleteItem(id)
  }

  const onClicktextBtn = () => {
    setButtonText(prevStateText => !prevStateText)
  }

  const onClickCheckbox = () => {
    setCheckboxSelected(prevState => !prevState)
    toggleComplete(id)
  }

  const updateTodo = event => {
    setUpdatedTitle(event.target.value)
  }

  const btnText = onClickEdit ? 'Save' : 'Edit'
  const todoisChecked = isChecked ? 'todo-checked' : 'title'

  return (
    <li className="TodoCard-Container">
      <div className="text-checkbox-container">
        <input
          type="checkbox"
          className="input-checkbox"
          onClick={onClickCheckbox}
        />
        {onClickEdit ? (
          <input
            type="text"
            className="add-todo-task"
            onChange={updateTodo}
            value={updatedTitle}
          />
        ) : (
          <p className={todoisChecked}>{updatedTitle}</p>
        )}
      </div>
      <div className="button-container">
        <button type="button" className="button" onClick={OnDelete}>
          Delete
        </button>
        <button type="button" className="button-edit" onClick={onClicktextBtn}>
          {btnText}
        </button>
      </div>
    </li>
  )
}

export default TodoItem

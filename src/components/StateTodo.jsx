'use client'
import React, { useState } from 'react'

let maxId = 0
export default function StateTodo() {
  const [title, setTitle] = useState('')
  const [todo, setTodo] = useState([])

  const handleChangeTitle = (e) => {
    setTitle(e.target.value)
  }

  const handleClick = () => {
    setTodo([
      ...todo,
      { id: maxId++,
        title,
        created: new Date(),
        idDone: false
      }
    ])
  }

  const handleDone = (e) => {
    console.log(e)
    setTodo(
      todo.map(item => {
        if (item.id === e.target.dataset.id) {
          return {
            ...item,
            isDone: true
          }
        }
        return item
      })
    )
  }

  return (
    <div>
      <label htmlFor="">やること
      <input type="text" name='title' value={title} onChange={handleChangeTitle} />
      </label>
      <button type='button' onClick={handleClick}>追加</button>
      <hr/>
      <ul>
        {todo.map(item =>  (
          <li key={item.id} className={item.isDone ? 'done' : ''}>
            {item.title}
            <button onClick={handleDone} data-id={item.id} type='button'>済み</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
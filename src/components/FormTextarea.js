'use client'
import React, { useState } from 'react'

export default function FormTextarea(props) {
  const [form, setForm] = useState({
    comment: ''
  })

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const show = () => {
    console.log('コメント：' + form.comment)
  }

  return (
    <form>
      <label htmlFor='comment'>コメント：</label>
      <textarea
        id='comment'
        name='comment'
        cols='30'
        rows='7'
        value={form.comment}
        onChange={handleForm}
      />
      <button type='button' onClick={show}>送信</button>
    </form>
  )
}
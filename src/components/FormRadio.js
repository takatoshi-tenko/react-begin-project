'use client'
import React, { useState } from 'react'

export default function FormRadio() {
  const [form, setForm] = useState({
    os: 'Windows'
  })

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const show = () => {
    console.log('コメント：' + form.os)
  }

  return (
    <form>
      <fieldset>
        <legend>OSを選択してください</legend>
        <label>
          <input
            type='radio'
            name='os'
            value='Windows'
            checked={form.os === 'Windows'}
            onChange={handleForm}
          />
          Windows
        </label>
        <label>
          <input
            type='radio'
            name='os'
            value='Mac'
            checked={form.os === 'Mac'}
            onChange={handleForm}
          />
          Mac
        </label>
        <label>
          <input
            type='radio'
            name='os'
            value='Linux'
            checked={form.os === 'Linux'}
            onChange={handleForm}
          />
          Linux
        </label>
        <button type='button' onClick={show}>送信</button>
      </fieldset>
    </form>
  )
}
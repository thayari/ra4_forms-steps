import React, { useState } from 'react'
import { nanoid } from 'nanoid'

function validate({date, distance}) {
  if (distance.search(/[^.,\d]/) !== -1 || date === '') {
    return false;
  } else {
    return true;
  }
}

function Form({ onAdd }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate(form)) {
      const newItem = {...form, id: nanoid()};
      onAdd(newItem);
    }
  }

  const [form, setForm] = useState({
    date: '',
    distance: '',
  })

  const handleChange = ({ target }) => {
    const name = target.name;
    const value = target.value;
    setForm(prevForm => ({ ...prevForm, [name]: value }))
  }

  return (
    <form className="form_container" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="date">Дата</label>
        <input type="date" name="date" id="date" onChange={handleChange}></input>
      </div>
      <div>
        <label htmlFor="distance">Пройдено км</label>
        <input type="text" name="distance" id="distance" onChange={handleChange}></input>
      </div>
      <button type="button submit">ОК</button>
    </form>
  )
}

export default Form

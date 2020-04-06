import React, { useState } from 'react'
import Form from './Form'
import List from './List'
import { nanoid } from 'nanoid'

function StepsLogger() {
  const [list, setList] = useState([]);

  const [form, setForm] = useState({
    date: '',
    distance: '',
  })

  const deleteItem = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const newList = list;
    newList.push({...form, id: nanoid()})
    setList(newList);
    console.log(newList)
  }

  const handleChange = ({ target }) => {
    const name = target.name;
    const value = target.value;
    setForm(prevForm => ({ ...prevForm, [name]: value }))
  }

  return (
    <>
      <Form onSubmit={handleSubmit} onChange={handleChange} />
      <List list={list} onDelete={deleteItem} />
    </>
  )
}

export default StepsLogger

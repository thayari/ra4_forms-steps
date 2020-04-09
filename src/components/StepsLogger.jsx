import React, { useState } from 'react'
import Form from './Form'
import List from './List'

function StepsLogger() {
  const [list, setList] = useState([]);
  
  const handleAdd = (item) => {
    setList(prevList => [...prevList, item]);
  }

  const deleteItem = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  }

  return (
    <>
      <Form onAdd={handleAdd}/>
      <List list={list} onDelete={deleteItem} />
    </>
  )
}

export default StepsLogger
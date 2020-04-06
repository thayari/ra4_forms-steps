import React from 'react'

function Form(props) {
  return (
    <form className="form_container" onSubmit={props.onSubmit}>
      <div>
        <label htmlFor="date">Дата</label>
        <input type="date" name="date" id="date" onChange={props.onChange}></input>
      </div>
      <div>
        <label htmlFor="distance">Пройдено км</label>
        <input type="text" name="distance" id="distance" onChange={props.onChange}></input>
      </div>
      <button type="submit">ОК</button>
    </form>
  )
}

export default Form

import React from 'react'

export default function List({ list, onDelete }) {
  const sortedList = list.sort((a, b) => {
    if (a.date > b.date) return 1;
    if (a.date < b.date) return -1;
    else return 0;
  });
  const elems = sortedList.map((item) => {
    return (<li key={item.id}>
      <div className="list-item_date">{item.date}</div>
      <div className="list-item_distance">{item.distance}</div>
      <button className=" button delete" onClick={() => onDelete(item.id)}>×</button>
    </li>)
  })
  elems.sort((a, b) => {
    if (a.date > b.date) return 1;
    if (a.date < b.date) return -1;
    else return 0;
  });
  return (
    <ul className="list">
      {elems}
    </ul>
  )
}
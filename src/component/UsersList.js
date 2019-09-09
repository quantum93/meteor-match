import React from 'react'
import Users from './Users.js'

var masterUsersList = [
  {
    name: 'Neil',
    title: 'CEO',
  },
  {
    name: 'Astro Volkanovski',
    title: 'CTO',
  },
  {
    name: 'Astrogirl',
    title: 'COO',
  },
]

export default function UsersList() {
  return (
    <div>
      {masterUsersList.map((user, index) =>
        <Users
        name={user.name}
        title={user.title}
        key={index}/>
      )}
      </div>
  );
}

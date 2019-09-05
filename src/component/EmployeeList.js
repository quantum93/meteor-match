import React from 'react'
import EmployeeCard from './EmployeeCard.js'

var masterEmployeeList = [
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
  {
    name: 'AstroJake',
    title: 'Senior Software Developer'
  },
  {
    name: 'AstroSam',
    title: 'Senior Software Engineer'
  },
  {
    name: 'AstroHugh',
    title: 'Junior Software Developer'
  }
];

export default function EmployeeList() {
  return (
    <div>
      {masterEmployeeList.map((employee, index) =>
        <EmployeeCard
        name={employee.name}
        title={employee.title}
        key={index}/>
      )}
      </div>
  );
}

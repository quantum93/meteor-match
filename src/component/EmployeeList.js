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
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    
      {masterEmployeeList.map((employee, index) =>
        <EmployeeCard
        name={employee.name}
        title={employee.title}
        key={index}/>
      )}
      </div>
  );
}

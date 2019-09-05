import React from 'react'
import EmployeeList from './EmployeeList.js'
import JobLink from './JobLink.js'


export default function Body() {
  var cardStyle = {
    textAlign: 'center',
    justifyContent: 'center',
    maxWidth: '1400px',
    margin: '0 auto 0 auto',
  }
  return (
    <div>
    <h2>Do you ever feel lost in a vacuum? We can help, We promise to bring those together who are lost in space.</h2>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    <div style={ cardStyle }>
    <EmployeeList />
    </div>
    <JobLink/>
    </div>
  );
}

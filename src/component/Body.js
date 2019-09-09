import React from 'react'
import EmployeeList from './EmployeeList.js'
import UsersList from './UsersList.js'
import JobLink from './JobLink.js'
import { Switch, Route } from 'react-router-dom';
import SignUp from './SignUp';


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
    <div style={ cardStyle }>
    <Switch>
      <Route path='/users' component={UsersList} />
      <Route path='/about_us' component={EmployeeList} />
      <Route path='/sign_up' component={SignUp} />
    </Switch>
    </div>
    <JobLink/>
    </div>
  );
}

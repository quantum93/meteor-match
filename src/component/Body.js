import React from 'react'
import EmployeeList from './EmployeeList.js'
import UsersList from './UsersList.js'
import JobLink from './JobLink.js'
import { Switch, Route } from 'react-router-dom';
import SignUp from './SignUp';
import EmployeeControl from './EmployeeControl';
import PropTypes from 'prop-types';



export default class Body extends React.Component {

  constructor(props) {
  super(props);
  this.state = {
    masterEmployeeList: []
    };
    this.handleAddingNewEmployeeToList = this.handleAddingNewEmployeeToList.bind(this);
  }

  handleAddingNewEmployeeToList(newEmployee){
    var newMasterEmployeeList = this.state.masterEmployeeList.slice();
    newMasterEmployeeList.push(newEmployee);
    this.setState({masterEmployeeList: newMasterEmployeeList});
  }

render(props){

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
      <Route exact path='/about_us' render={()=><EmployeeList employeeList={this.state.masterEmployeeList} />} />
      <Route path='/new_employee' render={()=><EmployeeControl onNewEmployeeCreation={this.handleAddingNewEmployeeToList} />} />
      <Route path='/sign_up' component={SignUp} />
    </Switch>
    </div>
    <JobLink/>
    </div>
  );
}
}

EmployeeList.propTypes = {
  ticketList: PropTypes.array
};

import React from 'react';
import ConfirmationQuestions from './ConfirmationQuestions';
import NewEmployeeForm from './NewEmployeeForm';
import PropTypes from "prop-types";

class EmployeeControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleTroubleshootingConfirmation = this.handleTroubleshootingConfirmation.bind(this);
  }

  handleTroubleshootingConfirmation(){
    this.setState({formVisibleOnPage: true});
  }

  render() {
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewEmployeeForm onNewEmployeeCreation={this.props.onNewEmployeeCreation}/>;
    } else {
      currentlyVisibleContent = <ConfirmationQuestions onTroubleshootingConfirmation={this.handleTroubleshootingConfirmation}/>;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

EmployeeControl.propTypes = {
  onNewEmployeeCreation: PropTypes.func
};

export default EmployeeControl;

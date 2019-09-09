import React from 'react';
import PropTypes from 'prop-types';

function NewEmployeeForm(props) {
  let _name = null;
  let _title = null;

  function handleNewEmployeeFormSubmission(event) {
    event.preventDefault();
    props.onNewEmployeeCreation({name: _name.value, title: _title.value});
    _name.value = '';
    _title.value = '';

  }

  return (
    <div>
    <form onSubmit={handleNewEmployeeFormSubmission}>
    <input
    type='text'
    id='names'
    placeholder='Pair Names'
    ref={(input) => {_name = input;}}/>
    <input
    type='text'
    id='title'
    placeholder='title'
    ref={(input) => {_title = input;}}/>

    <button type='submit'>Create!</button>
    </form>
    </div>
  );
}

NewEmployeeForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewEmployeeForm;

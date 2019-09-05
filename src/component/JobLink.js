import React from 'react';
import Button from 'react-bootstrap/Button';

export default function JobLink() {
  var buttonSection = {
    textAlign: 'center',
    paddingBottom: '80px',
  }
  return (
    <div>
    <hr/>
      <div style={buttonSection}>
        <Button variant="outline-secondary">Secondary</Button>
        <Button variant="warning">Warning</Button>
      </div>
    </div>
  );
}

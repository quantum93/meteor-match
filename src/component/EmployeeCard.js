import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import astroDude from "../public/astroDude.jpg";


export default function EmployeeCard(props) {
  var cardStyles = {
    margin: '25px',
    display: 'inline-flex',
    height: '400px',
    width: '20%',
  }
  return (
    <div style={cardStyles}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" alt="employee picture" src={astroDude}/>
        <Card.Body>
        <Card.Title><h3>{props.name}</h3></Card.Title>
        <Card.Text>{props.title}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

EmployeeCard.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string
}

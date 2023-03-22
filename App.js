import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Card} from 'react-bootstrap';
import {TestButton, PrimaryButton} from './Components/Buttons';

function App() {
  return (
    <div className="App">
    <img class= "logo" src="https://raw.githubusercontent.com/EeshahAbrar/cartoon-hero/main/img/logo.png"/>  
    <TestButton ButtonName = {"Barbie"}/>
    <PrimaryButton ButtonName = {"Ken"}/>
    <h1 className='center card'/>
    <div className='container'>
      <div className='row'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/564x/bf/e0/fa/bfe0fa8c90a951778e8e029f9d08e2de.jpg" />
      <Card.Body>
        <Card.Title>Barbie</Card.Title>
        <Card.Text>
          I'm a Barbie Girl! In a Barbie world! Life in plastic, its fantastic!
        </Card.Text>
        <Button variant="danger">Barbie</Button>
      </Card.Body>
      </Card>
      </div>
      </div>
    </div>
  );
} 

export default App;

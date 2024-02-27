// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import { Card, Button } from 'react-bootstrap'

function App() {
  return (
    <>
      <Card style={{ width: '18rem', margin: '2em' }}>
        <Card.Img variant="top" src="test.jpg" alt='gambar' />
        <Card.Body>
          <Card.Title>Test</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default App;

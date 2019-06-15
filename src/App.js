import React from 'react';
import logo from './logo.svg';
import './App.css';

import Nav from 'react-bootstrap/Nav';


function App() {
  return (
    <div className="App">

      <Nav
        activeKey="/home"
        onSelect={selectedKey => alert(`selected ${selectedKey}`)}
        variant = "pills"
      >
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled  
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <header className="App-header">
        
        
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is a paragraph
        </p>
        
      </header>

      
    </div>
  );
}

export default App;

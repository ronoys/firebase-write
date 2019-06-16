import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import Users from './users'
import Contact from './contact'
//import { Link } from 'react-router-dom'
import { MenuList, MenuItem } from '@material-ui/core';
const routing = (
  <Router>

    <MenuList>
      <MenuItem component= {Link} to='/'>Home</MenuItem>
      <MenuItem component={Link} to = '/Users'>Users</MenuItem>
    </MenuList>

    <Route exact path="/" component={App} />
    <Route path="/users" component={Users} />
    <Route path="/contact" component={Contact} />

  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))

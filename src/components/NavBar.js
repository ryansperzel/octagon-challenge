import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';

export default class NavBar extends Component {

  render() {
    return (
      <div className="Nav">
        <Navbar className="main-head" inverse>
          <Navbar.Header>
            <Navbar.Brand>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Nav pullRight>
            <IndexLinkContainer to="/">
              <NavItem className="link" eventKey={1}>HOME</NavItem>
            </IndexLinkContainer>
            <LinkContainer to="/contact">
              <NavItem className="link" eventKey={2}>CONTACT</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar>
      </div>
    )
  }
}

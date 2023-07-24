import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { Link } from 'react-router-dom'

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="p-3 mb-2 bg-warning text-white">
        <NavbarBrand>   
    Chimken Brefkst <span></span>
        <img className="square bg-primary rounded-circle"
        alt="logo"
        src="https://static.vecteezy.com/system/resources/previews/008/441/867/original/crispy-fried-chicken-leg-illustration-flat-icon-illustration-design-fast-food-fried-chicken-leg-flat-design-vector.jpg"
        style={{
            height: 40,
            width: 40, 
        }}
        />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/view">
                Looky-Loos
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/">
                Chimken
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Fixin's
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem tag={Link} to="/submit">Submit!</DropdownItem>
                <DropdownItem href="https://www.google.com/search?channel=fenc&client=firefox-b-1-d&q=buy+chicken" target="_blank">Buy Chicken</DropdownItem>
                <DropdownItem href="https://www.youtube.com/watch?v=xS1BYUknI6U" target="_blank">Cluck Cluck, motherf-</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Close</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;


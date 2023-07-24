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
  NavbarText,
} from 'reactstrap';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar>
        <NavbarBrand /*nav link here*/  >   
    Chimken Brefkst 
        <img
        alt="logo"
        src="https://static.vecteezy.com/system/resources/previews/008/441/867/original/crispy-fried-chicken-leg-illustration-flat-icon-illustration-design-fast-food-fried-chicken-leg-flat-design-vector.jpg"
        style={{
            height: 40,
            width: 40
        }}
        />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Nav69</NavLink>
            </NavItem>
            <NavItem>
              <NavLink >
                Chimken
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Settings?
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Ratings</DropdownItem>
                <DropdownItem>Profiles</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Close</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Cluck Cluck, motherf-</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;


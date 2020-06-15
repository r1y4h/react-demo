import { Button, Container, Nav, Navbar, NavbarBrand, NavItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'

import Search from 'components/Common/Header/Search'

export default () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="sticky-top">
      <Container className="header">
        <Navbar dark expand="md">
          <NavbarBrand href="/" className="mr-auto text-primary">
            React Template
          </NavbarBrand>
          <Nav navbar className="ml-auto w-50 justify-content-end">
            <NavItem className="w-100">
              <Button color="white" className="w-100 text-right" onClick={() => setIsSearchOpen(true)}>
                <i className="material-icons-outlined text-white md-36" tooltip="Click to search">
                  search
                </i>
              </Button>
            </NavItem>
            <NavItem>
              <Link to="/" className="nav-button d-inline-block">
                <i className="material-icons-outlined text-white md-36" tooltip="Account">
                  person_outline
                </i>
              </Link>
            </NavItem>
          </Nav>
        </Navbar>
      </Container>
      <Search show={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </header>
  )
}

import { Button, Container, Nav, Navbar, NavbarBrand, NavItem } from 'reactstrap'
import React, { useState } from 'react'

import Search from 'components/Common/Header/Search'

export default () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="sticky-top">
      <Container className="header">
        <Navbar dark expand="md">
          <NavbarBrand href="/" className="text-primary">
            React Demo App
          </NavbarBrand>
          <Nav navbar className="ms-auto w-100 justify-content-end">
            <NavItem className="w-100">
              <Button
                color="white"
                className="d-flex justify-content-end align-items-center w-100"
                onClick={() => setIsSearchOpen(true)}
              >
                <span className="me-4 text-white">Search a food to begin</span>
                <i className="material-icons-outlined text-white md-36" tooltip="Click to search">
                  search
                </i>
              </Button>
            </NavItem>
          </Nav>
        </Navbar>
      </Container>
      <Search show={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </header>
  )
}

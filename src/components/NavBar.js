import React, { useContext } from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import { useLocation, useHistory } from "react-router-dom";
import { userContext } from "./../userProvider";
import { signOut } from "./../firebase";

const NavBar = () => {
  const location = useLocation();
  const history = useHistory();
  const user = useContext(userContext);
  const handleSignOut = async (e) => {
    await signOut();
    history.push("/signup");
  };
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        style={{ padding: `10px 20px` }}
      >
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-end"
          id="responsive-navbar-nav"
        >
          <Nav activeKey={location.pathname}>
            {user ? (
              <>
                <Nav.Link href="/profile">Profile</Nav.Link>
                <Button onClick={handleSignOut}>Sign Out</Button>
              </>
            ) : (
              <>
                <Nav.Link href="/signin">Sign In</Nav.Link>
                <Nav.Link href="/signup">Sign Up</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;

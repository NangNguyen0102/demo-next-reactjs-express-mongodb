import Link from "next/link";
import Head from "next/head";
import { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Register from "./Register";
import SignIn from "./Login";

import { connect } from "react-redux";
import {
  userSignUp,
  userSignIn,
  userSignOut,
  restore,
} from "../../redux/actions/main";

function Header(props) {
  const [show, handleClose] = useState(false);
  const [showSignIn, handleCloseSignIn] = useState(false);
  const [form, setFormValue] = useState({});
  const { userInfo, restore } = props;

  const register = () => props.userSignUp(form);
  const signIn = () => props.userSignIn(form);
  const signOut = () => props.userSignOut();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user_info"));
    if (userData) {
      restore(userData);
    }
  }, []);

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
          integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
          crossOrigin="anonymous"
        />
      </Head>

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>
          <Link href="/">
            <a className="text-white">Demo App</a>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link href="/weather">
              <a className="text-white mr-2 mt-1">Weather</a>
            </Link>
            <Link href="/todo">
              <a className="text-white mr-2 mt-1">Todo</a>
            </Link>
          </Nav>
          {userInfo.token && (
            <Nav>
              <NavDropdown
                title={`Welcome ` + userInfo.name}
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item onClick={() => signOut()}>
                  Sign out
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          )}
          {!userInfo.token && (
            <Nav>
              <Nav.Link onClick={() => handleCloseSignIn(true)}>
                Sign In
              </Nav.Link>
              <Nav.Link onClick={() => handleClose(true)}>Register</Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Navbar>
      <Register
        show={show && !userInfo.token}
        setShow={handleClose}
        form={form}
        setFormValue={setFormValue}
        register={register}
        isLoading={userInfo.loading}
        error={userInfo.error}
      />

      <SignIn
        show={showSignIn && !userInfo.token}
        setShow={handleCloseSignIn}
        form={form}
        setFormValue={setFormValue}
        signIn={signIn}
        isLoading={userInfo.loading}
        error={userInfo.error}
      />
    </>
  );
}

const mapStateToProps = (state) => ({
  userInfo: state.main,
});

const mapDispatchToProps = {
  userSignUp,
  userSignIn,
  userSignOut,
  restore,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

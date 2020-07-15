import React from "react";
import { Navbar, Icon, NavItem } from "react-materialize";
import { Link } from "react-router-dom";

function NavMobil() {
  return (
    <div>
      <Navbar
        className="black white-text  "
        alignLinks="right "
        brand={
          <a className="brand-logo" href="/">
            VeganHub
          </a>
        }
        id="mobile-nav"
        menuIcon={<Icon>menu</Icon>}
        options={{
          draggable: true,
          edge: "left",
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200,
          preventScrolling: true,
        }}
      >
        <NavItem href="/">
          <ul>
            <li className="center">
              {" "}
              <Link className="center" to="/">
                Recipes
              </Link>
            </li>
            <li className="center">
              {" "}
              <Link className="center" to="/tech">
                Donations
              </Link>
            </li>
            <li className="center">
              {" "}
              <Link className="center" to="/tech">
                Sources
              </Link>
            </li>
          </ul>
        </NavItem>
      </Navbar>
    </div>
  );
}

export default NavMobil;

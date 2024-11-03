import React from "react";
import { slide as Menu } from "react-burger-menu";
import { CgProfile } from "react-icons/cg";

export default props => {
  return (
    // Pass on our props
    <Menu 
      {...props} 
      right={false} 
      styles={{
        bmMenu: {
          background: '#0d6efd', // Bootstrap primary color
        },
        bmItem: {
          color: '#ffffff', // Text color
        },
        bmOverlay: {
          background: 'rgba(0, 0, 0, 0.3)', // Optional: overlay background
        }
      }}
    >
      <a className="menu-item" href="/">
        Catalogo
      </a>

      <a className="menu-item" href="/burgers">
        Eventi
      </a>

      <a className="menu-item" href="/pizzas">
        Crea
      </a>

      <a className="menu-item" href="/desserts">
        Gruppi di Lettura
      </a>

      <a className="menu-item" href="/desserts">
        Profilo
      </a>
    </Menu>
  );
};

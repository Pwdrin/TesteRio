import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import * as C from "./styles";

function Header() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <>
      <C.Header>
  <a href="/" className="logo-container">
    <img
      src="https://i.ibb.co/XxVWGG0b/pomba-4.png"
      alt="Logo"
      className="logo"
    />
        </a>
        <C.Nav ref={navRef}>
          {/* <a href="/">Home</a>
          <a href="/Service">Serviço</a>
          <a href="/Contact">Contato</a> */}
          {/* <button className="nav-btn nav-btnclose" onClick={showNavbar}>
            <FaTimes />
          </button> */}
        </C.Nav>
        {/* <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button> */}
      </C.Header>
    </>
  );
}

export default Header;

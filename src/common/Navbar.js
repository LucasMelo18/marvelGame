import React, { Component } from 'react';
import './Navbar.css';
import logoMarvelNav from '../assets/images/marvelLogo.png';

class Nav extends Component {
  render() {
    return (
      <div id="mainNav">
        <nav className="Nav">
          <section>
            <img src={logoMarvelNav} alt="Logo Marvel" className='logoQuiz'/> 
          </section>
          <section id="linksDesktop">
            <a rel="noopener noreferrer" href="https://github.com/LucasMelo18" target="_blank">Github</a>
            <a rel="noopener noreferrer" href="https://www.linkedin.com/in/lucasmelo18/" target="_blank">Linkedin</a>
            <a rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=5511985861957&text=Ola" target="_blank">Whatsapp</a>
          </section>

        </nav>

      </div>
    );
  }
}

export default Nav;

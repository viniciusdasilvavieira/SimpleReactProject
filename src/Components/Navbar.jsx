import '../style/navbar.css';

const Navbar = () => {
   
    return (
      <header id='navbar' >
        <nav className='container'>
            <ul className='options-navbar-desk'>
            {/*opções da navbar são exemplos não funcionais*/}
              <li>
                <a>home</a>
              </li>
              <li>
                <a>ajuda</a>
              </li>
              <li>
                <a>sobre</a>
              </li>
            </ul>          
        </nav>
      </header>
    );
  };
  
  export default Navbar;
  
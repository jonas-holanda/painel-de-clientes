import { Link } from "react-router-dom";
import './index.css';
import './index-responsive.css'

function Header() {

    let darkMode = localStorage.getItem('darkMode');

    const enableDarkMode = () => {
        document.body.classList.add('darkmode');
        localStorage.setItem('darkMode', 'enabled');
    }

    const disableDarkMode = () => {
        document.body.classList.remove('darkmode');
        localStorage.setItem('darkMode', 'disabled');
    }

    if (darkMode === 'enabled') {
        enableDarkMode();
    }

    const darkModeToggle = () => {
        darkMode = localStorage.getItem('darkMode');
        if (darkMode !== 'enabled') {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    };

    // const setActive = () => {
    //   const home =  document.querySelector('#link-home');
    //   const clientesView =  document.querySelector('#link-clientesView');
    //   const addCliente =  document.querySelector('#link-addCliente');

    //   if (!home.classList.contains('active')) {
    //     home.classList.add('active');
    //   }

    //     if (clientesView.classList.contains('active')) {
    //         clientesView.classList.remove('active');
    //     }

    //     if (addCliente.classList.contains('active')) {
    //         addCliente.classList.remove('active');
    //     }
    // }

    // const setActive = (li) => {
    //     console.log(li);
    // }

    return (
        <>
            <header className="header">
                <ul id="nav">
                    <li id="link-home" className="active"><span className="iconify-inline" data-icon="ion:home-sharp"></span><Link to={'..'}> Home</Link></li>
                    <li id="link-clientesView"><span className="iconify-inline" data-icon="mdi:people-group"></span><Link to={'../cliente/view'}> Clientes</Link></li>
                    <li id="link-addCliente"><span className="iconify-inline" data-icon="icon-park-twotone:people-plus-one"></span><Link to={'../cliente/'}> Adicionar Cliente</Link></li>
                    <li className="last"><span className="iconify-inline" data-icon="line-md:light-dark-loop"></span><button onClick={darkModeToggle}> Mudar Tema</button></li>
                </ul>
            </header>
        </>
    );
}

export default Header;
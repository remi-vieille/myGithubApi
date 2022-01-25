
// pour les images en local, il faut les modulariser
// webpack refait les chemins des assets une fois compiler
// si c'est un module, il le retrouvera de lui même
import logo from './logo-github.png';
import './style.scss';

import Nav from '../Nav';

export default function Header() {
    return (
        <header className="app-header">
            <img src={logo} alt="Github logo" />
            <Nav />
        </header>
    );
}
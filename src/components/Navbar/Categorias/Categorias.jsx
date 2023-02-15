import React from 'react';

const Categorias = () => {
    return (
        
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            StreetWear
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Sneakers</a></li>
                    <li><a className="dropdown-item" href="#">Chlotes</a></li>
                    <li><a className="dropdown-item" href="#">Accesories</a></li>
                </ul>
            </li>
    );
}

export default Categorias;

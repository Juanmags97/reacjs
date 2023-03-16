import React from 'react';
import { Link } from 'react-router-dom';
const CardWidget = ({cantCarrito}) => {
    return (
        <>
            <Link className="nav-link" to={"/cart"}><button className='btn btn-dark'>Carrito</button></Link>
            <p>{cantCarrito}</p>
        </>
    );
}

export default CardWidget;

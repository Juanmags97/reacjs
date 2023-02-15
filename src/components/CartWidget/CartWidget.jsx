import React from 'react';

const CardWidget = ({cantCarrito}) => {
    return (
        <>
            <button className='btn btn-dark'>Carrito</button>
            <p>{cantCarrito}</p>
        </>
    );
}

export default CardWidget;

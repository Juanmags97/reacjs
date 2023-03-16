import React from 'react';
import { Link } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
const Cart = () => {
    const carrito =[ {id:1, idCategoria:1, nombre: "Sneaker:", marca: "Jordan", modelo: "Retro 4 Lightning", precio:85000 ,stock: 50, img: "air-jordan-4-lightning.webp"}]
    return(
        <>
        {
            carrito.length === 0 
            ?//si no existen productos en el carrito
            <>
                <h2> Carrito vacio </h2>
                <Link className="navlink" to={"/"}><button className="btn btn-primary">Continuar Comprando</button></Link>
            </>
            : //si extisten productos en el carrito
            <div className="container cartContainer">
                <ItemList prods={carrito} plantilla="ItemCart"/>
                <div className="divButtons">
                    <p>Resumen de la Compra: PrecioTotal </p>
                    <button className="btn btn-danger" onClick={()=>console.log("productos eliminados")}> vaciar carrito </button>
                    <Link className="nav-link" to={"/"}><button className='btn btn-dark'> Continuar comprando </button></Link>
                    <Link className="nav-linkl" to={"/checkout"}><button className='btn btn-dark'> Finalizar compra</button></Link>
                </div>
            </div>


}
        </>
    )
}

export default Cart;

import React from 'react';
import { useState, useEffect } from 'react';
import { consultarBDD } from '../../Utils/funciones';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    
    const [producto, setProductos] = useState([])

    useEffect(() => {
        consultarBDD('../json/productos.json').then(prods =>{
            const prod = prods.find(item => item.id === 1) 
            setProductos(prod)
        })
    }, [])
    
    
    return (
        <div className="card mb-3 container itemDetail"> 
            <ItemDetail prod={producto} />
        
        </div>
    );
}

export default ItemDetailContainer;

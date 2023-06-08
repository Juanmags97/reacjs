import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducto } from '../../Utils/firebase';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const {id} = useParams()
    const [producto, setProductos] = useState([])

    useEffect(() => {
        getProducto(id).then(prod =>{
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

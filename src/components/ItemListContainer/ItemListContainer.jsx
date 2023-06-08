import React from 'react';
import { useState, useEffect } from 'react';
import { getProductos } from '../../Utils/funciones';
import { useParams } from 'react-router-dom';

import ItemList from '../ItemList/ItemList';

export const ItemListContainer = () => {
    const {idCategoria} = useParams()
    const [productos, setProductos] = useState([])

    useEffect(()=> {
        if(idCategoria){
            getProductos().then(products => {
                const prods = products.filter(prod => prod.idCategoria === parseInt (idCategoria))
                const items = <ItemList prods={prods} plantilla="Item"/>
                setProductos(items)
            
            })

        } else{
            getProductos().then(prods => {
                const items = <ItemList prods={prods} plantilla="Item"/>
                setProductos(items)
            
            })

        }
        

        },[idCategoria])
        
        
        
        
        
        return (
            <div className='row cardProductos'>
                {productos}
            </div>
        );
    
    }


    


export default ItemListContainer;

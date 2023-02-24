
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
//Components
import Navbar from './Navbar/Navbar';
import ItemCount from './ItemCount/ItemCount';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import Item from './Item/Item';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';

export const App =() => {
  
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={ <ItemListContainer/> }/>
          <Route path='/category/:idCategoria' element={ <ItemListContainer/> }/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          
        </Routes>
      
      </BrowserRouter>
    
    </>
  );
  }

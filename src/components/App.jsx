
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

//React Router 
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Toastify
import { ToastContainer, toast } from 'react-toastify';


//Components
import  Navbar  from './Navbar/Navbar'; 
import ItemCount from './ItemCount/ItemCount';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import Item from './Item/Item';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Checkout from './Checkout/Checkout';
import Cart from './Cart/Cart';
import ItemCart from './ItemCart/ItemCart';


export const App =() => {
  
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={ <ItemListContainer/> }/>
          <Route path='/category/:idCategoria' element={ <ItemListContainer/> }/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/cart' element={<Cart/>}/>

        </Routes>
      <ToastContainer/>
      </BrowserRouter>
    
    </>
  );
  }


import './App.css';
//Components
import Navbar from './Navbar/Navbar';
import ItemCount from './ItemCount/ItemCount';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import Item from './Item/Item';
export const App =() => {
  
  return (
    <>
    <Navbar valor={"Liberace"}/>
    <ItemCount ValInicial={1} stock={17} />
    <ItemListContainer/>
    
    </>
  );
  }

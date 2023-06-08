
import { initializeApp } from "firebase/app";
import {getFirestore, collection, doc, addDoc, getDocs, getDoc, updateDoc} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBVAsbr8hc7pN_sXPJy2S77rz4LZd7C2cc",
  authDomain: "proyecto-final-gonzalez.firebaseapp.com",
  projectId: "proyecto-final-gonzalez",
  storageBucket: "proyecto-final-gonzalez.appspot.com",
  messagingSenderId: "943615176769",
  appId: "1:943615176769:web:8a8cf7d27e60dc271b16c0"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore();


export const cargarBDD = async() =>{
  const promise = await fetch('./json/productos.json')
  const productos = await promise.json()
  productos.forEach (async(prod)=> {
          await addDoc(collection(db, "productos"),{
              nombre: prod.nombre,
              marca: prod.marca,
              modelo: prod.modelo,
              idCategoria: prod.idCategoria,
              stock:prod.precio,
              precio: prod.precio,
              img: prod.img
          })
  })
}

export const getProductos = async ()=> {
  const productos = await getDocs(collection(db,"productos"))
  const items = productos.docs.map(prod =>{
    return { ...prod.data(), id: prod.id }
  })
  return items
}
export const getProducto = async (id)=>{
  const producto = await getDoc(doc(db,"prodcutos",id))
  const item = {...producto.data(),id:producto.id}
  return item
}
export const updateProducto = async(id, info) => {
  await updateDoc(doc(db,"productos", id), info)
}

export const deleteProductos = async(id) =>{
  await deleteDoc(doc(db,"productos", id))
}

export const createOrdenCompra = async(cliente, productos,precioTotal,fecha) =>{
  const OrdenCompra = await addDoc(collection(db,"ordenesCompra"),{
      datosCliente: cliente,
      producots: productos,
      precioTotal: precioTotal,
      fecha: fecha
  })
  return OrdenCompra
}
export const getOrdenCompra = async(id) => {
  const oC = await getDoc(doc(db, "ordenesCompra",id))
  const ordenCompra = {...oC.data(),id:oC.id}
  return ordenCompra
}

import { initializeApp } from "firebase/app";
import {getFirestore, collection, addDoc} from 'firebase/firestore'

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
import React from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import{ toast } from 'react-toastify';
const Checkout = () => {
    let navigate = useNavigate()
    const datosform = useRef()
    const consultarform = (e) =>{
        e.preventDefault()
        console.log(datosform.current)
        const data = new FormData(datosform.current)
        console.log(data)
        const cliente = Object.fromEntries(data)
        console.log(cliente)
        e.target.reset()
        toast.success('Muchas Gracias por Comprar')
        navigate ("/")
    }
    return (
        <div className="container contFront" >
            <form onSubmit={consultarform} ref={datosform}>
                <div className="mb-3">
                    <label htmlFor="nombre" className= "form-label"> Nombre y Apellido </label>
                    <input type="text" className= "form-control" name="nombre" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className= "form-label"> email </label>
                    <input type="email" className= "form-control" name="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="dni" className= "form-label"> Documento </label>
                    <input type="number" className= "form-control" name="dni" />
                </div>
                <div className="mb-3">
                    <label htmlFor="celular" className= "form-label"> Numero de Telefono </label>
                    <input type="number" className= "form-control" name="celular" />
                </div>
                <div className="mb-3">
                    <label htmlFor="direccion" className= "form-label"> Direccion </label>
                    <input type="text" className= "form-control" name="direccion" />
                </div>
                
                <button type="submit" className="btn btn-primary"> Finalizar Compra </button>
            </form> 

        </div>
    );
}

export default Checkout;

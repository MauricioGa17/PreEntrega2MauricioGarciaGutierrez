import React, {useState} from 'react'
import { BiCart } from "react-icons/bi";

const CartWidget = () => {

    const [ carrito, setCarrito ] = useState(2)

    return (
        <a className='nav-link d-flex flex-row mx-3 text-light'>
            <BiCart className='text-light h4 me-1 font-weight-bold'/>
            Mi Carrito ({carrito})
        </a>
    )
}

export default CartWidget
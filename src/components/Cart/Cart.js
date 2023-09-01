import React, { useContext } from 'react'
import { CartContext } from '../../contextProv/CartContext'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'

const Cart = () => {

  const { cart, clearCart, totalQuantity, total } = useContext(CartContext)

  if (totalQuantity === 0) {
    return (
      <div>
        <h2 className='text-center my-5'>No hay productos en el carrito</h2>
        <Link to='/' className='btn w-100 text-white'>Ir a Productos</Link>
      </div>
    )
  }

  return (
    <div>
      {cart.map(prod => <CartItem key={prod.id} {...prod} />)}
      <h3 className='text-center my-4'>Total: ${total}</h3>
      <div className='d-flex justify-content-around my-3'>
        <Link to='/' className='btn text-white'>Ir a Productos</Link>
        <button className='btn text-white' onClick={() => clearCart('cart')} >Limpiar Carrito</button>
      </div>
      <Link className='btn w-100 text-white' to='/checkout'>Checkout</Link>
    </div>
  )
}

export default Cart
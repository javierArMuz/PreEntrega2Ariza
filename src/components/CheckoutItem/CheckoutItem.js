import React, { useContext } from 'react'
import { CartContext } from '../../contextProv/CartContext'

const CheckoutItem = () => {

  const { cart, total } = useContext(CartContext)

  return (
    <div>
      <h5 className='my-3'>Resumén del Pedido</h5>
      {cart.map(prod => (
        <div key={prod.id} className='d-flex justify-content-between m-auto' style={{ width: '15rem' }}>
          <span>{prod.name} </span>
          <span>x{prod.quantity} </span>
          <span>${prod.quantity * prod.price}</span>
        </div>
      ))}
      <p className='mt-2'>Total: $<b>{total}</b></p>
      <hr />
    </div>
  )
}

export default CheckoutItem
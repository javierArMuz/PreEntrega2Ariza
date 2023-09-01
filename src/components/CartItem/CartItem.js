import React, { useContext } from 'react'
import { CartContext } from '../../contextProv/CartContext'
import deletIcon from './assets/delete.svg'
import './CartItem.css'

const CartItem = ({ id, image, name, quantity, price }) => {

  const { removeItem } = useContext(CartContext)

  return (
    <div className='cartItem d-flex justify-content-between align-items-center border-bottom border-5 rounded py-1'>
      <div style={{ width: '3rem', height: '3rem' }} >
        <img className='w-100 h-100' style={{ objectFit: 'cover' }} src={image} alt={name} />
      </div>
      <div className='info'>
        <span><b>{name}</b></span>
        <span>Cant: <b>{quantity}</b></span>
        <span>SubTotal: $<b>{quantity * price}</b></span>
      </div>
      <img className='cursorPointer' title="Eliminar producto" src={deletIcon} onClick={() => removeItem(id)} alt='icon de eliminar' />
    </div>
  )
}

export default CartItem
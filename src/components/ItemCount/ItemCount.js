import { useState } from 'react';

const ItemCount = ({ initial, stock, onAdd }) => {
  const [quantity, setQuantity] = useState(initial)

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }
  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1)
    }
  }

  return (
    <div className='counter m-auto w-50'>
      <div className="controls d-flex justify-content-between">
        <button className="btn text-white" onClick={decrement}>-</button>
        <h4 className='number'>{quantity}</h4>
        <button className="btn text-white" onClick={increment}>+</button>
      </div>
      <div>
        <button className="btn text-white mt-2" onClick={() => onAdd(quantity)} disabled={!stock} >
          Agregar al carrito
        </button>
      </div>
    </div>
  )
}

export default ItemCount
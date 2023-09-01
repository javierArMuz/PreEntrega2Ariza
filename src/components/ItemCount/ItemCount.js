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
    <div className='counter'>
      <div className="controls d-flex justify-content-center fw-bold">
        <span className="cursorPointer" onClick={decrement}>-</span>
        <h4 className='number mx-3'>{quantity}</h4>
        <span className="cursorPointer" onClick={increment}>+</span>
      </div>
      <div>
        <button className="btn text-white mt-2 w-100" style={{ width: '10rem' }} onClick={() => onAdd(quantity)} disabled={!stock} >
          Agregar al carrito
        </button>
      </div>
    </div>
  )
}

export default ItemCount
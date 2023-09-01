import React, { useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom';
import { CartContext } from '../../contextProv/CartContext';
import './ItemDetail.css'

const ItemDetail = ({ id, name, image, price, description, category, stock }) => {

  const { addItem } = useContext(CartContext)

  const [quantityAdded, setQuantityAdded] = useState(0);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity)

    const item = { id, name, price, image }

    addItem(item, quantity)
  }

  if (name) {
    return (
      <div className="card cardItemList">
        <div className="card-body">
          <picture className='d-flex flex-column justify-content-center'>
            <img src={image} className="card-img-top" alt={name} />
          </picture>
          <div className='card-information'>
            <section className='text-center'>
              <h5 className="card-title mb-3">{name}</h5>
              <p className="card-text">Categoría: {category}</p>
              <p className="card-text">Descripción: {description}</p>
              <p className="card-text fw-bold">${price}</p>
            </section>
            <footer className='my-3'>
              {(quantityAdded > 0) ?
                <Link to='/cart' className='btn text-white'>Finalizar Compra</Link>
                : <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />}
            </footer>
          </div>
        </div>
      </div>
    )
  } else {
    return <h3 className='text-center mt-3'>Este producto no existe en nuestra tienda</h3>
  }
}

export default ItemDetail
import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ title, image, price, description, category }) => {

  return (
    <div className="card" style={{ width: '24rem', textAlign: 'center' }}>
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title">{title}</h5>
        <picture>
          <img src={image} className="card-img-top" alt={title} />
        </picture>
        <section>
          <p className="card-text">Categoría: {category}</p>
          <p className="card-text">Descripción: {description}</p>
          <p className="card-text">Precio: ${price}</p>
        </section>
        <div className='my-3'>
          <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada: ', quantity)} />
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
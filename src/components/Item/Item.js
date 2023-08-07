import React from 'react';
import './item.css';
import { Link } from 'react-router-dom'

const Item = ({ id, title, image, price, stock }) => {

  return (
    <article className="card" style={{ width: '18.4rem', textAlign: 'center' }}>
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title">{title}</h5>
        <picture>
          <img src={image} className="card-img-top" alt={title} />
        </picture>
        <section>
          <p className="card-text">Precio: ${price}</p>
          <p className="card-text">Stock disponible: {stock}</p>
        </section>
        <footer className='my-3'>
          <Link className="btn text-white w-100" to={`/item/${id}`}>Ver detalle</Link>
        </footer>
      </div>
    </article>
  )
}

export default Item
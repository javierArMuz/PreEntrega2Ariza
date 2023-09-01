import React from 'react';
import { Link } from 'react-router-dom'

const Item = ({ id, name, image, price, stock }) => {

  return (
    <article className="card text-center w-100 shadow">
      <div className="card-body d-flex flex-column justify-content-between">
        <picture>
          <img src={image} className="card-img-top" alt={name} />
        </picture>
        <div>
          <section className='card-information'>
            <h5 className="card-name">{name}</h5>
            <p className="card-text fw-bold">${price}</p>
            <p className="card-text">Disponible: {stock}</p>
          </section>
          <footer className='my-3'>
            <Link className="btn text-white w-100" to={`/item/${id}`}>Ver detalle</Link>
          </footer>
        </div>
      </div>
    </article>
  )
}

export default Item
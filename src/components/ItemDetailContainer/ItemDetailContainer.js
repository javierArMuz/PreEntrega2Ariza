import React, { useEffect, useState } from 'react'
import { getProductById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null)

  const { itemId } = useParams();

  useEffect(() => {
    getProductById(itemId)
      .then((response) => setProduct(response))
      .catch((error) => console.error(error))
  }, [])

  return (
    <div className='d-flex justify-content-center py-2'>
      <ItemDetail {...product} />
    </div>
  )
}

export default ItemDetailContainer
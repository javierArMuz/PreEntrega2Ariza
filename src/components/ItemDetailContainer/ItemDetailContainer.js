import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null)
  const [Loading, setLoading] = useState(true)

  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true)

    const docRef = doc(db, 'products', itemId)

    getDoc(docRef)
      .then(response => {
        const data = response.data()
        const productAdapted = { id: response.id, ...data }
        setProduct(productAdapted)
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false))
  }, [itemId])

  if (Loading) {
    return <p className='text-center mt-5'>Cargando ...</p>
  }

  return (
    <div className='d-flex justify-content-center pt-3'>
      <ItemDetail {...product} />
    </div>
  )
}

export default ItemDetailContainer
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";

import { useParams } from "react-router-dom";

import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemListConteiner = ({ greeting }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const { categoryId } = useParams()

  useEffect(() => {
    setLoading(true)

    const collectionRef = categoryId
      ? query(collection(db, 'products'), where('category', '==', categoryId))
      : collection(db, 'products')

    getDocs(collectionRef)
      .then(response => {
        const productsAdapted = response.docs.map(doc => {
          const data = doc.data()
          return { id: doc.id, ...data }
        });
        setProducts(productsAdapted)
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false))
  }, [categoryId])

  if (loading) {
    return <p className='text-center mt-5'>Cargando ...</p>
  }

  return (
    <main className="products">
      {greeting ?
        <h2 className="text-center my-3">{greeting}</h2>
        : <h2 className="text-center my-3">{categoryId}</h2>}
      <ItemList products={products} />
    </main>
  )
}
export default ItemListConteiner;
import { useEffect, useState } from "react";
import { getProducstByCategory, getProducts } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListConteiner = ({ greeting }) => {
  const [products, setProducts] = useState([])

  const { categoryId } = useParams()

  useEffect(() => {
    const asyncFunc = categoryId ? getProducstByCategory : getProducts;

    asyncFunc(categoryId)
      .then((response) => setProducts(response))
      .catch((error) => console.error(error))
  }, [categoryId])

  return (
    <>
      <h2 className="text-center my-2">{greeting}</h2>
      <ItemList products={products} />
    </>
  )
}
export default ItemListConteiner;
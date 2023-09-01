import React, { useState, useContext } from 'react'
import { useNavigate } from "react-router-dom"
import { CartContext } from '../../contextProv/CartContext'
import { addDoc, collection, documentId, Timestamp, writeBatch, where, query, getDocs } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'
import CheckoutForm from '../CheckoutForm/CheckoutForm'

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import CheckoutItem from '../CheckoutItem/CheckoutItem'

const Checkout = () => {

  const MySwal = withReactContent(Swal)

  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)
  const [orderId, setOrderId] = useState('')

  const { cart, total, clearCart } = useContext(CartContext)

  const createOrder = async ({ name, lastName, email, phone }) => {
    setLoading(true)

    let nameField = name.field
    let lastNameField = lastName.field
    let emailField = email.field
    let phoneField = phone.field

    try {
      const objOrder = {
        buyer: {
          nameField,
          lastNameField,
          phoneField,
          emailField
        },
        items: cart,
        total: total,
        date: Timestamp.fromDate(new Date())
      }
      const batch = writeBatch(db)

      const outOfStock = []

      const ids = cart.map(prod => prod.id)

      const productsRef = collection(db, 'products')

      const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

      const { docs } = productsAddedFromFirestore

      docs.forEach(doc => {
        const dataDoc = doc.data()
        const stockDb = dataDoc.stock

        const productAddedToCart = cart.find(prod => prod.id === doc.id)
        const prodQuantity = productAddedToCart?.quantity

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity })
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc })
        }
      });

      if (outOfStock.length === 0) {
        await batch.commit()

        const orderRef = collection(db, 'orders')

        const orderAdded = await addDoc(orderRef, objOrder)

        setOrderId(orderAdded.id)
        clearCart()
      } else {
        console.error('Hay productos que están fuera de stock')
      }

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <h2 className='m-2'>Se está generando su orden...</h2>
  }

  if (orderId) {
    MySwal.fire(
      'La compra se ha realizado exitosamente!',
      `El id de su orden es: ${orderId}`,
      'success'
    )
    navigate('/cart')
  }

  return (
    <div className='text-center'>
      <CheckoutItem />
      <CheckoutForm onConfirm={createOrder} />
    </div>
  )
}

export default Checkout
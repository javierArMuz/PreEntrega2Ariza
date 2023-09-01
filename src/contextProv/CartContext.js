import React, { createContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export const CartContext = createContext({ cart: [] })

export const CartProvider = ({ children }) => {

  const MySwal = withReactContent(Swal)

  // Capturar los productos de LocalStorage
  const getProdsInCart = () => {
    let data = JSON.parse(localStorage.getItem('products_in_cart'))
    if (data) {
      return data;
    } else {
      return []
    }
  }

  const [cart, setCart] = useState(getProdsInCart());
  const [totalQuantity, setTotalQuantity] = useState(0)
  const [total, setTotal] = useState(0)

  const updateTotalQuantity = cart.map(prod => prod.quantity).reduce((anterior, actual) => anterior + actual, 0)
  const updateTotal = cart.map(prod => prod.price * prod.quantity).reduce((anterior, actual) => anterior + actual, 0)

  // Agreagar producto al carrito
  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart(prev => [...prev, { ...item, quantity }])
    } else {
      MySwal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Este producto ya fue agregado',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }

  useEffect(() => {
    setTotal(updateTotal)
    setTotalQuantity(updateTotalQuantity);

    // Registramos los productos en LocalStorage
    localStorage.setItem('products_in_cart', JSON.stringify(cart))
  }, [cart, updateTotal, updateTotalQuantity])

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter(prod => prod.id !== itemId)
    setCart(cartUpdated)
    const subtractProd = cart.filter(prod => prod.id === itemId)
    setTotalQuantity(totalQuantity - subtractProd[0].quantity)
    setTotal(total - (subtractProd[0].price * subtractProd[0].quantity))
  }

  const clearCart = (component) => {
    if (component === 'cart') {
      // Librería sweetAlert2
      MySwal.fire({
        title: 'Está seguro?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, vaciar carrito!'
      }).then((result) => {
        if (result.isConfirmed) {
          MySwal.fire({
            title: 'Carrito vacío!',
            text: 'Se han eliminado todos los productos del carrito.',
            icon: 'success',
            showConfirmButton: false,
            timer: 2500
          })
          setCart([])
          setTotal(0)
          setTotalQuantity(0)
        }
      })
    } else {
      setCart([])
      setTotal(0)
      setTotalQuantity(0)
    }
  }

  const isInCart = (itemId) => {
    return cart.some(prod => prod.id === itemId)
  }

  return (
    <CartContext.Provider value={{ cart, addItem, total, totalQuantity, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}
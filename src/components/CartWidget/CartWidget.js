import cart from './assets/cart.svg'

const CartWidget = () => {
  return (
    <div>
      <img src={cart} alt='carrito de compra' />
      0
    </div>
  )
}
export default CartWidget;
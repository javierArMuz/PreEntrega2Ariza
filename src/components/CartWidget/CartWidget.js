import { useContext } from 'react';
import cart from './assets/cart.svg'
import { CartContext } from '../../contextProv/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {

  const { totalQuantity, total } = useContext(CartContext)

  return (
    <Link to='/cart' style={{ display: (totalQuantity === 0) ? 'none' : 'block' }}>
      <picture>
        <img src={cart} alt='carrito de compra' className='me-1' />
      </picture>
      <span style={{
        backgroundColor: 'var(--bgTitleStripDark)',
        padding: '0 .3rem',
        borderRadius: '50%'
      }}>{totalQuantity}</span> ${total}
    </Link>
  )
}
export default CartWidget;
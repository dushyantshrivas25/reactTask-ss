import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeFromCart } from '../redux/cartSlice'


const Checkout = () => {
    const cartItems = useSelector(state => state.cart.cart)
    const dispatch = useDispatch()
  return (
    <div>
        <h2>cart items</h2>
        {
            cartItems.map(item =>{
                return(
                    <div className='checkout' >
                        <img src={item.image} alt="" />
                        <div>
                            <h4>{item.name}</h4>
                            <h5>{item.price}</h5>
                            <button onClick={()=>dispatch(removeFromCart({id:item.id}))}>remove</button>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Checkout
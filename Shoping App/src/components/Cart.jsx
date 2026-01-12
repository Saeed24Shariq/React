import React, { useEffect, useState, useContext } from 'react'
import { useSelector } from 'react-redux';

export default function Cart() {

    let [isEmpty, setIsEmpty] = useState(true);
    let [cart, setCart] = useState([]);
    let cartInfo = useSelector((state) => state.cart.value)

    const loadCart = () => {
        setCart(cart = cartInfo)
    }

    useEffect(() => {
        loadCart();
        console.log(cart)
        if (cart.length >= 1) {
            setIsEmpty(false);
        }
        else {
            setIsEmpty(true);
        }
    }, [cartInfo])

    return (
        <>
            <div className='h-[90vh]'>
                {
                    (isEmpty) ?
                        <div>
                            <h1 className='text-2xl'>Cart is Empty</h1>
                        </div>
                        :
                        <div className='px-15 py-10 grid grid-cols-4 gap-4'>
                            {
                                cart.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <div>
                                                <img src={item.thumbnail} alt={item.title} />
                                            </div>
                                            <div>
                                                <h1 className='font-bold text-lg'>{item.title}</h1>
                                                <h1 className='font-bold text-lg'>Price: {item.cost}</h1>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                }
            </div>
        </>
    )
}

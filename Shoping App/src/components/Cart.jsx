import React, { useEffect, useState, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeQty, removeValue } from '../store/CartSlice.jsx';
import { decrement } from '../store/CounterSlice.jsx';


export default function Cart() {

    const counter = useSelector((state) => state.counter.value)

    let [isEmpty, setIsEmpty] = useState(true);

    const dispatch = useDispatch();

    const cartInfo = useSelector((state) => state.cart.value);

    let [bill, setBill] = useState(0);

    useEffect(() => {
        if (cartInfo.length >= 1) {
            setIsEmpty(false);
        }
        else {
            setIsEmpty(true);
        }
        let sum = 0;
        cartInfo.forEach((item) => sum += item.qty * item.cost);
        setBill(sum);
    }, [cartInfo])


    const removeItem = (item) => {
        if (item.qty > 1) {
            dispatch(removeQty(item));
        }
        else {
            dispatch(removeValue(item.id));
        }
        dispatch(decrement())
    }

    return (
        <>
            <div className='h-[90vh] flex-col' style={
                {
                    display: "flex",
                    alignItems: (isEmpty === true) ? "center" : "normal",
                    justifyContent: (isEmpty === true) ? "center" : "normal"

                }
            }>
                {
                    (isEmpty) ?
                        <div>
                            <h1 className='text-4xl font-black'>Cart is Empty</h1>
                        </div>
                        :
                        <div className='px-15 py-10 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full'>
                            {
                                cartInfo.map((item, index) => {
                                    return (
                                        <div key={index} className='flex
                                        flex-col justify-center items-center shadow-2xl p-3 rounded-3xl'>
                                            <div>
                                                <img src={item.thumbnail} alt={item.title} />
                                            </div>
                                            <div className='py-3'>
                                                <h1 className='font-bold text-lg'>{item.title}</h1>
                                                <h1 className='font-bold text-lg'>Quantity: {item.qty}</h1>
                                                <h1 className='font-bold text-lg'>Price: {item.cost}</h1>
                                            </div>
                                            <div className='flex justify-center'>
                                                <button className='bg-black p-2 rounded-full text-white w-[200px] cursor-pointer font-bold' onClick={() => removeItem(item)}>Remove</button>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                }
                <div className='bg-black fixed right-0 top-[85vh] m-5 w-[50px] h-[50px] rounded-[50%] flex justify-center items-center'>
                    <h1 className='text-white text-xl font-bold'>{counter}</h1>
                </div>
                <div style={{
                        display: (isEmpty === true)? "none": "flex"
                    }
                }
                className='justify-center font-black text-2xl'>
                    <h1>Total Bill: {bill}</h1>
                </div>
            </div>
        </>
    )
}

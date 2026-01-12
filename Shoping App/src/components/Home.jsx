import React from 'react'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import Tshirt01 from "./../assets/slider/T-Shirt01.jpg"
import Tshirt02 from "./../assets/slider/T-Shirt02.jpg"
import Tshirt03 from "./../assets/slider/T-Shirt03.jpg"
import Watch01 from "./../assets/slider/Watch01.png"
import Watch02 from "./../assets/slider/Watch02.jpg"
import Watch03 from "./../assets/slider/Watch03.jpg"
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addValue } from '../store/CartSlice';

export default function Home() {

    const dispatch = useDispatch();

    let [cart, setCart] = useState([]);
    let [product, setProduct] = useState([]);
    let [items, setItems] = useState(10);
    const fetchData = () => {
        fetch(`https://dummyjson.com/carts?limit=${items}`)
            .then((res) => res.json())
            .then((data) => setProduct(data.carts))
            .catch((err) => console.log("Error: ", err))
    }
    const loadMore = () => {
        setItems(items + 10);
        console.log(items)
    }
    useEffect(() => {
        fetchData();
        console.log(product)
    }, [items])

    const addToCart = (item) => {
        const obj = {
            title: item.title,
            cost: Math.round((item.price) - (item.discountPercentage * item.price / 100)),
            thumbnail: item.thumbnail,
        }
        cart.push(obj);
        setCart(cart);
        dispatch(addValue(obj));
        console.log(cart);
    }

    const sliderImg = [
        {
            original: Tshirt01,
            thumbnail: Tshirt01
        },
        {
            original: Tshirt02,
            thumbnail: Tshirt02
        },
        {
            original: Tshirt03,
            thumbnail: Tshirt03
        },
        {
            original: Watch01,
            thumbnail: Watch01
        },
        {
            original: Watch02,
            thumbnail: Watch02
        },
        {
            original: Watch03,
            thumbnail: Watch03
        },
    ]

    return (
        <div className='h-[90vh]'>
            <div>
                <ImageGallery items={sliderImg} />
            </div>
            <div className='cursor-pointer my-10 grid px-[50px] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2'>
                {
                    product.map((section) => {
                        return (
                            section.products.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <div className='my-5 shadow-xl h-[550px] flex flex-col items-center'>
                                            <div>
                                                <img src={item.thumbnail} alt="" />
                                            </div>
                                            <div className='my-3'>
                                                <h1 className='text-md font-bold my-1'>{item.title}</h1>
                                                <h1 className='my-1 font-bold text-lg line-through'>Price: {item.price}</h1>
                                                <h1 className='my-1 font-bold text-lg'>Discounted Price: {Math.round((item.discountPercentage * item.price) / 100)}</h1>
                                                <h1 className='my-1 font-extrabold text-lg font-black'>Final Price: {Math.round((item.price) - (item.discountPercentage * item.price / 100))}</h1>
                                                <div className='flex items-center justify-center'>
                                                    <button onClick={() => addToCart(item)} className='cursor-pointer bg-black text-white p-2 w-[200px] rounded-full'>Add to Cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        )
                    })
                }
            </div>
            <div className='flex flex-center justify-center py-4'>
                <button onClick={loadMore} className='w-[200px] rounded-full cursor-pointer bg-black text-white p-2'>Load More</button>
            </div>
        </div>  
    )
}
import React from 'react'
import ProductCard from './ProductCard'

const productsData = [
    {
        img: '/product-1.jpg',
        title: 'Jackets',
        desc: 'Nice leather jackets',
        rating: 4,
        price: "150.00"
    },
    {
        img: '/product-2.jpg',
        title: 'Jackets',
        desc: 'Nice leather jackets',
        rating: 3,
        price: "135.00"
    },
    {
        img: '/product-3.jpg',
        title: 'Partywear',
        desc: 'Nice pair of Partywear shoes',
        rating: 4,
        price: "120.00"
    },
    {
        img: '/product-4.jpg',
        title: 'Shirts',
        desc: 'Nice shirt for men',
        rating: 5,
        price: "150.00"
    },
    {
        img: '/product-5.jpg',
        title: 'Skirts',
        desc: 'Nice skirt for women',
        rating: 4,
        price: "100.00"
    },
    {
        img: '/product-6.jpg',
        title: 'Sports shoes',
        desc: 'Sports shoes for men',
        rating: 3,
        price: "200.00"
    },
    {
        img: '/product-7.jpg',
        title: 'Watches',
        desc: 'Analytic watch for men',
        rating: 4,
        price: "190.00"
    },
    {
        img: '/product-8.jpg',
        title: 'Watches',
        desc: 'Mechanical watch for men',
        rating: 5,
        price: "220.00"
    },
    {
        img: '/product-9.jpg',
        title: 'Watches',
        desc: 'Mechanical watch for men',
        rating: 5,
        price: "220.00"
    },
    {
        img: '/product-10.jpg',
        title: 'Watches',
        desc: 'Mechanical watch for men',
        rating: 5,
        price: "220.00"
    },
    {
        img: '/product-11.jpg',
        title: 'Watches',
        desc: 'Mechanical watch for men',
        rating: 5,
        price: "220.00"
    },
    {
        img: '/product-12.jpg',
        title: 'Watches',
        desc: 'Mechanical watch for men',
        rating: 5,
        price: "220.00"
    }
]

const NewProducts = () => {
  return (
    <div>
        <div className="container pt-16">
            <h2 className='font-medium text-2xl pb-4'>New Products</h2>
            <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
                {productsData.map((item, index) => (
                    <ProductCard 
                        key={index}
                        img={item.img}
                        title={item.title}
                        desc={item.desc}
                        rating={item.rating}
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    </div>
  )
}

export default NewProducts
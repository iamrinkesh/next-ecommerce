import React from 'react'

const productsData = [
    {
        img: '/jacket-1.jpg',
        title: 'Jackets',
        desc: 'Nice leather jackets',
        rating: 4,
        price: "150.00"
    },
    {
        img: '/jacket-2.jpg',
        title: 'Jackets',
        desc: 'Nice leather jackets',
        rating: 3,
        price: "135.00"
    },
    {
        img: '/partywear-1.jpg',
        title: 'Partywear',
        desc: 'Nice pair of Partywear shoes',
        rating: 4,
        price: "120.00"
    },
    {
        img: '/shirts-1.jpg',
        title: 'Shirts',
        desc: 'Nice shirt for men',
        rating: 5,
        price: "150.00"
    },
    {
        img: '/skirt-1.jpg',
        title: 'Skirts',
        desc: 'Nice skirt for women',
        rating: 4,
        price: "100.00"
    },
    {
        img: '/sports-1.jpg',
        title: 'Sports shoes',
        desc: 'Sports shoes for men',
        rating: 3,
        price: "200.00"
    },
    {
        img: '/watch-1.jpg',
        title: 'Watches',
        desc: 'Analytic watch for men',
        rating: 4,
        price: "190.00"
    },
    {
        img: '/watch-2.jpg',
        title: 'Watches',
        desc: 'Mechanical watch for men',
        rating: 5,
        price: "220.00"
    }
]

const NewProducts = () => {
  return (
    <div>
        <div className="conatiner pt-16">
            <h2 className='font-medium text-2xl pb-4'>New Products</h2>
        </div>
    </div>
  )
}

export default NewProducts
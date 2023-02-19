import React from 'react';
import image1 from '../../assests/images/articlewebsites.jpg'
import image2 from '../../assests/images/elena-koycheva.jpg'
import image3 from '../../assests/images/blog-header-template.jpg'

const LatestArticle = () => {
    const latestArticle = [
        {
            imageUrl: image1,
            type: "EXPERTISE",
            heading: "10 signs you probably need a new website.",
        },
        {
            imageUrl: image2,
            type: "EXPERTISE STUDIO",
            heading: "How long does it take to design and build a website?",
        },
        {
            imageUrl: image3,
            type: "EXPERTISE",
            heading: "7 must-have features for E-commerce websites.",
        },
    ]
    return (
        <section className='pt-20'>
            <div className="container px-5 md:px-14 max-w-7xl  md:pt-24 lg:pt-28  mx-auto">
                <h2 className='text-5xl font-bold' >Latest Articles</h2>
                <div className='mt-10 sm:flex flex-wrap justify-between'>
                    {
                        latestArticle.map((item) => (
                            <div key={item.heading} className="border border-black my-3 group cursor-pointer hover:bg-pink-500 duration-300 sm:max-w-[290px] lg:max-w-[350px]">
                                <div className='overflow-hidden'>
                                    <img className='w-full object-cover object-center group-hover:scale-110 duration-300' src={item.imageUrl} alt="articleImage" />
                                </div>
                                <div className='pl-5 py-5'>
                                    <h4 className='text-xs font-bold text-pink-500 group-hover:text-black duration-300'>{item.type}</h4>
                                    <h2 className='text-xl font-bold mt-4 group-hover:text-white duration-300'>{item.heading}</h2>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='text-center my-5 md:my-10'>
                    <button className='border-2   border-pink-500 py-4 px-9 mt-8 rounded-3xl text-xs font-bold text-pink-500 hover:bg-pink-500 hover:text-white duration-300'>VIEW ALL BLOG POST</button>
                </div>

            </div>
        </section>
    )
}

export default LatestArticle
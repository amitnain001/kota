import React, { useEffect } from 'react';
import image1 from '../../assests/images/homepage-lovebrands.webp'
import image2 from '../../assests/images/homepage-tribepad.webp'
import image3 from '../../assests/images/homepage-sym.webp'
import Aos from 'aos';


const OurCreative = () => {

    const elements = [
        {
            heading: 'Beauty',
            description: 'Developing stunning one-of-a-kind digital design that catches people’s eye and brings your brand to life online.',
            imageUrl: image1,
        },
        {
            heading: 'Thought',
            description: 'As a web design agency, we love to deliver meaningful and intuitive user experiences that build trust with your target audience.',
            imageUrl: image2,
        },
        {
            heading: 'Impact',
            description: 'Designing tailor made solutions that resonate with your customers and drives them to act.',
            imageUrl: image3,
        },
    ]

    useEffect(() => {
        Aos.init({

        })
    }, [])


    return (
        <section>
            <div className="container px-5 md:px-14 max-w-7xl  md:pt-24 lg:pt-28  mx-auto">
                {elements.map((item, index) => (
                    <div key={item.imageUrl} className='max-w-lg lg:py-28 xl:py-40 lg:flex justify-between items-center lg:max-w-none' >
                        <div className='mt-20 lg:mt-0 lg:max-w-md '>
                            <h2 data-aos="fade-up" className='font-bold text-3xl lg:text-5xl relative' >{item.heading}
                                <span className='text-[10px] lg:text-[16px] absolute -left-4  top-[-5px] lg:left-[-28px] lg:top-[7px] text-pink-600' >0{index + 1}</span>
                            </h2>
                            <p className='my-5 md:my-6 font-semibold lg:text-xl lg:pr-10'>{item.description}</p>
                        </div>
                        <div className='lg:w-[670px]'>
                            <img data-aos="zoom-in" className='w-full object-cover object-center rounded-xl shadow-xl' src={item.imageUrl} alt="threethingsmind" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default OurCreative
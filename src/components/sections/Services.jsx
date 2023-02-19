import React, { useState } from 'react';
import image1 from '../../assests/images/websites.png'
import image2 from '../../assests/images/branding-wogan-web.png'
import image3 from '../../assests/images/marketing.webp';


const Services = () => {

    const allServcies = [
        {
            heading: 'Website Design & Development',
            description: ' Crafting responsive, search engine-friendly websites with instant impact, impressing users and effectively positioning your brand.',
            imageUrl: image1,
        },
        {
            heading: 'Branding',
            description: 'Using strategic thinking to develop your brand positioning and identity, from logo and visuals, to engaging tone of voice.',
            imageUrl: image2,

        },
        {
            heading: 'Digital Marketing',
            description: 'Delivering effective digital strategies & eye - catching online marketing campaigns that earn attention, spark emotion & increase co',
            imageUrl: image3,

        },
    ]

    const [service, setService] = useState({
        heading: 'Website Design & Development',
        description: ' Crafting responsive, search engine-friendly websites with instant impact, impressing users and effectively positioning your brand.',
        imageUrl: "https://kota.co.uk/static/489c980a82262c75fc5296e908dc5221/30425/websites.png",
    });

    return (
        <section className='servicesSection  mt-28 py-28'>
            <div className="container px-5 md:px-14 max-w-7xl  md:pt-24 lg:pt-28  mx-auto">
                <div>
                    <div className='flex flex-col md:flex-row md:justify-between md:items-center'>
                        <div>
                            <p className='text-sm font-bold text-white'>OUR SERVICES</p>
                            {allServcies && allServcies.map((item) => (
                                <div className='py-5 flex' key={item.imageUrl} >
                                    <h2 data-aos="fade-up" className={`cursor-pointer text-4xl md:text-5xl md:mr-5 font-bold ${service.heading === item.heading ? 'text-white' : "text-gray-600/50"} duration-300 `} onClick={() => setService(item)} >{item.heading}</h2>
                                </div>
                            ))}
                            <button className='hidden md:block   border-2 py-4 px-9 mt-8 rounded-3xl text-xs font-bold text-white hover:bg-white hover:text-pink-600 duration-300'>VIEW ALL SERVICES</button>
                        </div>
                        {service && <div data-aos="fade-up" className='mt-5 md:max-w-lg xl:max-w-2xl'>
                            <img className='w-full ' src={service.imageUrl} alt="serviceImage" />
                            <p className='mt-6 text-white'>{service.description}</p>
                        </div>}
                    </div>
                    <button className='  border-2 md:hidden py-4 px-9 mt-8 rounded-3xl text-xs font-bold text-white hover:bg-white hover:text-pink-600 duration-300'>VIEW ALL SERVICES</button>
                </div>
            </div>
        </section>
    )
}

export default Services;
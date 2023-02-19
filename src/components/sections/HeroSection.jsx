import React, { useEffect } from 'react';
import heroImage from '../../assests/images/home-kota.webp';
import AOS from 'aos'
const HeroSection = () => {

    const brandsImage = [
        {
            imageUrl: 'https://kota.co.uk/static/06bd0f13d6cca0d9ed576bd33c1cc699/f4be6/dan_grey%402x.webp'
        },
        {
            imageUrl: 'https://kota.co.uk/static/33f6a75eb3916baabc3e8fb5c4729fe6/1dd59/the-drum-logo.webp'
        },
        {
            imageUrl: 'https://kota.co.uk/static/e48ebdcc0707498a3b3b23b744365f3b/d4b21/Clutch_grey%402x.webp'
        },
        {
            imageUrl: 'https://kota.co.uk/static/1970db9df55649146a13601771da8047/2c55e/awward_grey%402x.webp'
        },
        {
            imageUrl: 'https://kota.co.uk/static/816573f6ad42e12720a2e55ca7ee3da5/23b76/css-design-awards.webp'
        },
    ]

    useEffect(() => {
        AOS.init(
            {
                offset: 200,
                duration: 600,
                easing: 'ease-in-sine',
                delay: 100,
                once: true
            }
        );
    }, [])

    return (
        <>
            <section>
                <div className="container px-5 md:px-14 pt-20 md:pt-24 lg:pt-28 mx-auto">
                    <div className='flex flex-col lg:flex-row items-center justify-center  '>
                        <div className='w-72 sm:w-96 mx-auto lg:mx-0 lg:mr-16'>
                            <img src={heroImage} className="w-full" alt="HeroImage" />
                        </div>
                        <div data-aos="fade-up" className='text-center lg:text-left sm:max-w-md lg:max-w-lg mt-7 max-w-sm   mx-auto lg:mx-0 lg:ml-16'>
                            <h1 className='text-5xl sm:text-6xl lg:text-[80px] text-gray-800 font-bold'>Rebel against boring</h1>
                            <p className='font-semibold mt-7 text-base sm:text-lg lg:text-xl'>
                                We’re a creative web design agency based in London that crafts beautiful and original websites for brands who <span className='text-pink-600'>refuse to blend in.</span>
                            </p>
                        </div>
                    </div>
                    <div className='hidden lg:flex items-center justify-between max-w-xl mt-16'>
                        {brandsImage.map((item) => {
                            return (
                                <div key={item + Math.random()} className="w-24">
                                    <img src={item.imageUrl} className='w-full' alt="brandImage" />
                                    {/* {console.log(item)} */}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
            <section>
                <div className='flex flex-col md:flex-row justify-between lg:items-center pt-20 md:pt-24 lg:pt-28'>
                    <div className='max-h-[500px] xl:max-h-none   md:max-w-md lg:max-w-lg xl:max-w-none xl:w-[1500px]    overflow-hidden'>
                        <div className='lg:hidden '>
                            <img className='w-full object-cover object-center' src="https://kota.co.uk/static/6576c05403991f07dff2916d4b2eaa4f/952a8/intro-image.webp" alt="makingbrandImage" />
                        </div>
                        <div className='hidden lg:block'>
                            <video className='w-full' loop muted autoPlay >
                                <source src="https://content.kota.co.uk/app/uploads/2022/05/Animation-v3.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                    <div data-aos="fade-up" className='container px-5 md:px-14  md:mx-0  mx-auto'>
                        <h2 className='text-4xl sm:text-5xl font-bold pt-10 md:pt-0 max-w-sm  ' >Making brands a damn site better</h2>
                        <p className='pt-10 md:pt-8 text-base font-semibold max-w-xl   '>Let’s face it, first impressions matter. Your website’s an opportunity to wow your audience, so why waste it with bad design? Because brands win new fans when they’re brave enough to go beyond their creative comfort zone.</p>
                    </div>
                </div>
            </section>
            <section>
                <div className="container max-w-7xl px-5 md:px-14 pt-20 md:pt-24 lg:pt-28 mx-auto">
                    <h2 data-aos="fade-up" className='text-[32px] xl:text-5xl md:mt-24 font-bold leading-10 max-w-xl xl:max-w-4xl'>Our creative digital agency designs and develops bespoke websites with <span className='text-pink-600'>three things in mind;</span></h2>
                </div>
            </section>
        </>
    )
}

export default HeroSection
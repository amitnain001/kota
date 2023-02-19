import React from 'react';
import sectionLogoImage from '../../assests/images/home_work_logo.svg';
import image1 from '../../assests/images/Image-wogan-43.webp'
import image2 from '../../assests/images/featured-square-3.webp'
import image3 from '../../assests/images/featured-square-1.webp'
import image4 from '../../assests/images/featured-portrait-1.webp'
import image5 from '../../assests/images/featured-portrait.webp'
import image6 from '../../assests/images/featured-square.webp'
import image7 from '../../assests/images/featured-square-2.webp'
import image8 from '../../assests/images/matchroom-thumbnail-portrait.webp'
import image9 from '../../assests/images/jamie-portrait.webp'
import image10 from '../../assests/images/stoli-featured-square.webp'


const WorkSection = () => {
    const workData = [
        {
            type: 'BRANDING E-COMMERCE MARKETING VIDEO WEB DESIGN',
            heading: 'Wogan Coffee',
            subHeading: `We completely transformed the image of Bristol's finest coffee company.`,
            imageUrl: image1,
        },
        {
            type: 'WEB DESIGNWEB DEVELOPMENT',
            heading: 'tangerine',
            subHeading: 'We took on the challenge of creating the new website for tangerine, a global design pioneer.',
            imageUrl: image2,
        },
        {
            type: 'WEB DESIGNWEB DEVELOPMENT',
            heading: 'SuperYachtsMonaco',
            subHeading: 'We crafted a beautiful website for the boutique yacht brokerage, SuperYachtsMonaco.',
            imageUrl: image3,
        },
        {
            type: 'ART DIRECTION BRANDING WEB DESIGNWEB DEVELOPMENT',
            heading: 'BellSant',
            subHeading: 'We fully branded a pioneering healthcare concept in the USA.',
            imageUrl: image4,
        },
        {
            type: 'BRANDING WEB DESIGN WEB DEVELOPMENT',
            heading: 'Martin Building',
            subHeading: 'We created a cutting edge platform for San Francisco-based firm Martin Building.',
            imageUrl: image5,
        },
        {
            type: 'WEB DESIGN WEB DEVELOPMENT',
            heading: 'Bounce',
            subHeading: 'We designed a highly animated and playful website for Bounce, the home of ping pong.',
            imageUrl: image6,
        },
        {
            type: 'E-COMMERCE WEB DESIGN WEB DEVELOPMENT',
            heading: `Little's Coffee`,
            subHeading: `We designed an E-Commerce platform for Little's, a family run coffee business.`,
            imageUrl: image7,
        },
        {
            type: 'E-COMMERCE WEB DESIGN WEB DEVELOPMENT',
            heading: 'Matchroom',
            subHeading: 'We put the punch into one of the biggest sports promoters in the world.',
            imageUrl: image8,
        },
        {
            type: 'ART DIRECTION MARKETING VIDEO',
            heading: 'Jamie Oliver - 7 Ways',
            subHeading: `We created a campaign packed full of impact for Jamie's new book, 7 Ways.`,
            imageUrl: image9,
        },
        {
            type: 'BRANDING WEB DESIGN WEB DEVELOPMENT',
            heading: 'Stoli Group',
            subHeading: `We refined this brand's positioning in the premium alcoholic beverage market.`,
            imageUrl: image10,
        },
    ]

    let imageHeightChanger = 1;
    let potraite = true;

    return (
        <section className='bg-black/90 py-28  '>
            <div className="container max-w-7xl px-5 md:px-14 pt-20 md:pt-24 lg:pt-28 mx-auto">
                <div className='sm:flex '>
                    <div className='w-11/12 sm:max-w-[250px] mx-auto sm:mx-24 lg:mx-28 xl:mx-36 xl:w-auto xl:max-w-3xl'>
                        <img src={sectionLogoImage} className="w-full object-center object-cover" alt="worklogo" />
                    </div>
                    <h2 className='text-white my-10 sm:my-0 text-5xl   lg:text-7xl  sm:tracking-wide leading-[70px] sm:leading-[80px] lg:leading-[90px] font-bold text-center sm:w-80 xl:w-auto xl:max-w-lg xl:pr-5 sm:text-left xl:mt-48  '>Shit-hot work for hot-shot brands</h2>
                </div>
                <div className='sm:flex flex-wrap items-center justify-between'>
                    {workData.map((item) => {
                        if (imageHeightChanger === 2) {
                            imageHeightChanger = 0;
                            potraite = !potraite;
                        }
                        imageHeightChanger++;
                        if (potraite) {
                            return (
                                <div key={item.subHeading} className="my-14 cursor-pointer group sm:max-w-[280px]  md:max-w-[330px] lg:max-w-[430px] xl:max-w-[540px]">
                                    <div className={`sm:h-96 md:h-[420px] lg:h-[600px] xl:h-[750px] overflow-hidden relative`}>
                                        <div className='absolute top-0 left-0 w-full h-full z-40 hover:bg-pink-400/50 duration-300 '></div>
                                        <img src={item.imageUrl} className="w-full max-h-96 md:max-h-none md:h-full object-cover object-center" alt="workimage" />
                                    </div>
                                    <h3 className='text-xs font-semibold text-pink-500 tracking-[3px] mt-5'>{item.type}</h3>
                                    <h2 className='text-white text-3xl font-bold mt-5 mb-2 group-hover:text-pink-500 duration-300'>{item.heading}</h2>
                                    <p className='text-white'>{item.subHeading}</p>
                                </div>
                            )
                        } if (!potraite) {
                            return (
                                <div key={item.subHeading} className="my-14 cursor-pointer group sm:max-w-[280px]  md:max-w-[330px] lg:max-w-[430px] xl:max-w-[540px]">
                                    <div className='relative'>
                                        <div className='absolute top-0 left-0 w-full h-full z-40 hover:bg-pink-400/50 duration-300 '></div>
                                        <img src={item.imageUrl} className="w-full max-h-96 md:max-h-none md:h-full object-cover object-center" alt="workimage" />
                                    </div>
                                    <h3 className='text-xs font-semibold text-pink-500 tracking-[3px] mt-5'>{item.type}</h3>
                                    <h2 className='text-white text-3xl font-bold mt-5 mb-2 group-hover:text-pink-500 duration-300'>{item.heading}</h2>
                                    <p className='text-white'>{item.subHeading}</p>
                                </div>
                            )
                        }

                        return (
                            console.log('No item returnd_____')
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default WorkSection
import React, { useState } from 'react';
import { AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import image1 from '../../assests/images/dan-global-logo@2x.webp';
import image2 from '../../assests/images/the-drum-logoab.webp';
import image3 from '../../assests/images/glutch@2x.webp';
import image4 from '../../assests/images/awwwards-logo@2x.webp';
import image5 from '../../assests/images/css-design-awards-white.webp';
import footerLogo from '../../assests/images/Kota_logo_white-1.svg';
import { Link } from 'react-router-dom';


const Layout = () => {
    const [clipboardText, setClipboardText] = useState('Copy to clipboard....');
    const copyText = async () => {
        try {
            await navigator.clipboard.writeText('hello@kota.co.uk');
            setClipboardText('Copied!');
            setTimeout(() => {
                setClipboardText('Copy to clipboard....')
            }, 2000);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    }

    return (
        <section className='bg-zinc-800 py-20 '>
            <div className="container px-5 md:px-14 max-w-7xl  md:pt-24 lg:pt-28  mx-auto">
                <div className='lg:flex justify-between'>
                    <div className='hidden lg:block'>
                        <ul className='flex items-start '>
                            <li className='flex flex-col text-white font-bold text-lg items-start mr-6 xl:mr-12'>
                                <Link className='hover:text-pink-500 duration-300 my-2 border-b' to='/' >Home</Link>
                                <Link className='hover:text-pink-500 duration-300 my-2 ' to='/' >Work</Link>
                                <Link className='hover:text-pink-500 duration-300 my-2 ' to='/' >Services</Link>
                                <Link className='hover:text-pink-500 duration-300 my-2 ' to='/' >Agency</Link>
                                <Link className='hover:text-pink-500 duration-300 my-2 ' to='/' >Blog</Link>
                                <Link className='hover:text-pink-500 duration-300 my-2 ' to='/' >Contact</Link>
                                <Link className='hover:text-pink-500 duration-300 my-2 ' to='/' >FAQs</Link>
                                <Link className='hover:text-pink-500 duration-300 my-2 ' to='/' > Privacy Policy</Link>
                            </li>
                            <li className='flex flex-col text-white font-bold  items-start mx-6 xl:mx-12'>
                                <span className='my-2 text-pink-500'>EXPERTS IN</span>
                                <Link className='hover:text-pink-500 duration-300 my-2 ' to='/'>Hospitality</Link>
                                <Link className='hover:text-pink-500 duration-300 my-2 ' to='/'>Property and Architecture</Link>
                                <Link className='hover:text-pink-500 duration-300 my-2 ' to='/'>Film and Television</Link>
                                <Link className='hover:text-pink-500 duration-300 my-2 ' to='/'>Business to Business</Link>
                            </li>
                            <li className='flex flex-col text-white font-bold  items-start mx-6 xl:mx-12'>
                                <span className='my-2 text-pink-500'>OFFICES</span>
                                <Link className='hover:text-pink-500 duration-300 my-2 ' to='/'>London</Link>
                                <Link className='hover:text-pink-500 duration-300 my-2 ' to='/'>New York</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className='text-xs lg:text-base font-semibold text-pink-500  text-center lg:text-right'>FOLLOW</p>
                        <ul className='flex justify-center lg:justify-end  items-center py-7'>
                            <li className='mx-4'>
                                <a target="_blank" rel='noreferrer' className='text-white text-2xl border p-2 rounded-full inline-block hover:text-pink-500 duration-300 hover:border-pink-500  ' href="https://twitter.com/kotacreative"><AiOutlineTwitter /></a>
                            </li>
                            <li className='mx-4'>
                                <a target="_blank" rel='noreferrer' className='text-white text-2xl border p-2 rounded-full inline-block hover:text-pink-500 duration-300 hover:border-pink-500 ' href="https://www.instagram.com/kotalondon"><AiOutlineInstagram /></a>
                            </li>
                            <li className='mx-4'>
                                <a target="_blank" rel='noreferrer' className='text-white text-2xl border p-2 rounded-full inline-block hover:text-pink-500 hover:border-pink-500 duration-300' href="https://www.facebook.com/kotacreative/"><FaFacebookF /></a>
                            </li>
                            <li className='mx-4 lg:mx-0 lg:ml-4'>
                                <a target="_blank" rel='noreferrer' className='text-white text-2xl border p-2 rounded-full inline-block hover:text-pink-500 hover:border-pink-500 duration-300' href="https://www.linkedin.com/company/kota-creative/"><FaLinkedinIn /></a>
                            </li>
                        </ul>
                        <div className='flex flex-col items-center lg:items-end text-white'>
                            <button className='text-sm font-bold hover:text-pink-500 duration-300'>Sign up to our newsletter</button>
                            <button onClick={copyText} className='text-3xl font-bold  mt-8 hover:text-pink-500 duration-300 relative group'>hello@kota.co.uk
                                <span className='text-[12px] text-pink-500 hidden group-hover:inline duration-300 absolute left-[50%] translate-x-[-50%] bottom-[-30px] '>{clipboardText}</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='lg:flex justify-between items-center'>
                    <ul className='flex flex-wrap justify-center lg:justify-start my-10  '>
                        <li className='w-28 mr-7 my-4 flex items-center'>
                            <a target="_blank" rel='noreferrer' href="https://digitalagencynetwork.com/agencies/london/">
                                <img src={image1} className="w-full" alt="clientLogo" />
                            </a>
                        </li>
                        <li className='w-28 mx-7 my-4 flex items-center'>
                            <a target="_blank" rel='noreferrer' href="https://www.recommendedagencies.com/kota/">
                                <img src={image2} className="w-full" alt="clientLogo" />
                            </a>
                        </li>
                        <li className='w-28 mx-7 my-4 flex items-center'>
                            <a target="_blank" rel='noreferrer' href="https://clutch.co/profile/kota#summary">
                                <img src={image3} className="w-full" alt="clientLogo" />
                            </a>
                        </li>
                        <li className='w-28 mx-7 my-4 flex items-center'>
                            <a target="_blank" rel='noreferrer' href="https://www.awwwards.com/kota/">
                                <img src={image4} className="w-full" alt="clientLogo" />
                            </a>
                        </li>
                        <li className='w-28 mx-7 my-4 flex items-center'>
                            <a target="_blank" rel='noreferrer' href="https://www.cssdesignawards.com/search?search_term=kota+creative">
                                <img src={image5} className="w-full" alt="clientLogo" />
                            </a>
                        </li>
                    </ul>
                    <div className='hidden lg:block'>
                        <Link to='/'><img src={footerLogo} alt="footerLogo" /></Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Layout
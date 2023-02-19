import React, { useRef, useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import logo from '../../assests/images/Kota_logo_white-1.svg';
import { AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const Navbar = () => {
    const navRef = useRef();
    const [navToggler, setNavToggler] = useState(false);

    const navControllar = () => {
        setNavToggler(!navToggler);
        if (!navToggler) {
            navRef.current.classList.remove('translate-y-[-100%]');
            navRef.current.classList.add('translate-y-0');
            return;
        }
        navRef.current.classList.remove('translate-y-0');
        navRef.current.classList.add('translate-y-[-100%]');
    }


    return (
        <section className='w-full '>
            <div className="container px-5 md:px-10 py-6 md:py-16 mx-auto">
                <div className={`items-center flex justify-end  z-30  fixed top-9 right-3 lg:right-6 xl:right-10 `}>
                    <div className='hidden md:block' >
                        <Link className='font-bold duration-300 hover:text-pink-500 mx-7 text-lg' to='/'>Work</Link>
                        <Link className='font-bold duration-300 hover:text-pink-500 mx-7 text-lg' to='/'>Contact</Link>
                    </div>
                    <div className=' text-5xl  ' >
                        {!navToggler && <button className='hover:text-pink-600 duration-300' onClick={() => navControllar()}><HiMenuAlt3 /></button>}
                    </div>
                </div>
            </div>
            <div ref={navRef} className='w-screen duration-700 h-screen bg-pink-500 translate-y-[-100%]  fixed top-0 right-0  z-50 '>
                <div className='container max-w-7xl mx-auto'>
                    <div className={`flex justify-between top-9 pr-3 lg:pr-5 xl:pr-10 pt-10`}>
                        <div className='px-5'>
                            <img src={logo} className="h-16 duration-300" alt="toplogo" />
                        </div>
                        {navToggler && <button className='hover:text-white duration-300' onClick={() => navControllar()} ><AiOutlineClose className='text-5xl ' /></button>}
                    </div>
                    <div className={`pl-10 text-5xl`}>
                        <ul className='flex flex-col items-start font-bold text-black/30 md:pl-40'>
                            <li className='my-3'>
                                <Link className='hover:text-white' to='/'>Work</Link>
                            </li>
                            <li className='my-3 relative group'>
                                <Link className='hover:text-white' to='/'>Services</Link>
                                <ul className='absolute pl-28 w-[200%] right-[-190%]   text-2xl top-0'>
                                    <li className='my-2  hidden group-hover:block hover:block '><Link className='hover:text-white duration-300' to=''>Creative Web Design</Link></li>
                                    <li className='my-2  hidden group-hover:block hover:block '><Link className='hover:text-white duration-300' to=''>Web Development</Link></li>
                                    <li className='my-2  hidden group-hover:block hover:block '><Link className='hover:text-white duration-300' to=''>Branding</Link></li>
                                    <li className='my-2  hidden group-hover:block hover:block '><Link className='hover:text-white duration-300' to=''>Digital Marketing</Link></li>
                                    <li className='my-2  hidden group-hover:block hover:block '><Link className='hover:text-white duration-300' to=''>E-Commerce</Link></li>
                                    <li className='my-2  hidden group-hover:block hover:block '><Link className='hover:text-white duration-300' to=''>WordPress</Link></li>
                                </ul>
                            </li>
                            <li className='my-3 '>
                                <Link className='hover:text-white  ' to='/'>Agency</Link>
                            </li>
                            <li className='my-3 '>
                                <Link className='hover:text-white  ' to='/'>Blog</Link>
                            </li>
                            <li className='my-3 '>
                                <Link className='hover:text-white  ' to='/'>Contact</Link>
                            </li>
                            <li className='my-3 '>
                                <Link className='hover:text-white  ' to='/'>Careers</Link>
                            </li>
                        </ul>
                        <div className='flex justify-between items-center pt-10 md:pt-16 pr-3'>
                            <ul className='flex  items-center  '>
                                <li className='mr-3'>
                                    <a target="_blank" rel='noreferrer' className='text-white text-2xl border p-2 rounded-full inline-block hover:text-pink-500 duration-300 hover:border-pink-500  ' href="https://twitter.com/kotacreative"><AiOutlineTwitter /></a>
                                </li>
                                <li className='mx-3'>
                                    <a target="_blank" rel='noreferrer' className='text-white text-2xl border p-2 rounded-full inline-block hover:text-pink-500 duration-300 hover:border-pink-500 ' href="https://www.instagram.com/kotalondon"><AiOutlineInstagram /></a>
                                </li>
                                <li className='mx-3'>
                                    <a target="_blank" rel='noreferrer' className='text-white text-2xl border p-2 rounded-full inline-block hover:text-pink-500 hover:border-pink-500 duration-300' href="https://www.facebook.com/kotacreative/"><FaFacebookF /></a>
                                </li>
                                <li className='mx-3 lg:mx-0 lg:ml-4'>
                                    <a target="_blank" rel='noreferrer' className='text-white text-2xl border p-2 rounded-full inline-block hover:text-pink-500 hover:border-pink-500 duration-300' href="https://www.linkedin.com/company/kota-creative/"><FaLinkedinIn /></a>
                                </li>
                            </ul>
                            <div className='  items-center hidden lg:flex'>
                                <p className='text-2xl font-bold text-white' >Let's get cracking</p> <span className='block mx-8 w-[1px] h-28 bg-white'></span> <button className='bg-pink-700 text-sm py-4 px-9 rounded-3xl font-bold text-white hover:text-pink-600 hover:bg-white duration-300'>START YOUR PROJECT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Navbar
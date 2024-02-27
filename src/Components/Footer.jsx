import React from 'react'
import { useState } from 'react'
import { Combobox } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'



export default function Footer() {
  return (
    <footer className="site_footer py-16 bg-nightBlue">
        <div className="container">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
                <div className="footer-single-col">
                    <div className="contact-footer">
                        <h4 className="text-3xl mb-5 text-white">Contact us</h4>
                        <ul>
                            <li className='text-md font-roboto font-regular text-white mb-3'>
                                <label htmlFor="" className='inline-block align-top mr-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                    </svg>


                                </label> <a href="mailto:mail@demolink.org" className='text-white ease-in-out duration-300'>mail@demolink.org</a>
                            </li>
                            <li className='text-md font-roboto font-regular text-white mb-3'>
                                <label htmlFor="" className='inline-block align-top mr-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                    </svg>

                                </label> <a href="tel:8686309327" className='text-white ease-in-out duration-300'>(868) 630-9327</a>
                            </li>
                            <li className='text-md font-roboto font-regular text-white'>
                                <label htmlFor="" className='inline-block align-top mr-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>

                                </label> 348S, 11th St. Philly, NY 24107
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-single-col">
                    <div className="social-list md:pl-24 pl-0">
                        <h4 className="text-3xl mb-5 text-white">Socials</h4>
                        <ul>
                            <li className='text-seaGreen font-roboto mb-3'>
                                <a href="/" className='hover:text-white ease-in-out duration-300 text-[#a9b7bd]'>Facebook</a>
                            </li>
                            <li className='text-seaGreen font-roboto mb-3'>
                                <a href="/" className='hover:text-white ease-in-out duration-300 text-[#a9b7bd]'>Instagram</a>
                            </li>
                            <li className='text-seaGreen font-roboto'>
                                <a href="/" className='hover:text-white ease-in-out duration-300 text-[#a9b7bd]'>Twitter</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-single-col">
                    <div className="subscribe">
                        <h4 className="text-3xl mb-5 text-white">Subscribe</h4>
                        <form action="" className='sm:flex justify-between gap-3'>
                            <label htmlFor="" className='relative w-full block'>
                                <input type="text" className="form-input bg-transparent border-0 border-b-2 border-gray-200 px-0 5 w-full block focus:ring-0 focus:border-tangy  h-12 font-roboto text-lg text-nightBlue text-white" placeholder="Your Email Address"/>
                            </label>
                            <div className="submit-btn sm:mt-0 mt-4">
                                <input type="submit" value="Sign Up" className='!py-3 !px-8 h-12 inline-block solid-btn right-0 top-0 cursor-pointer' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="copy mt-10 text-center">
                <p className='font-roboto text-sm font-xregular text-white'>&copy; 2022 Holity. <a href="/" className='text-[#a9b7bd] hover:text-white transition-all ease-in-out duration-300 underline'>Privacy Policy</a></p>
            </div>
        </div>
    </footer>
  )
}

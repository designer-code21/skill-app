import React from 'react'
import { useState } from 'react'
import { Combobox } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'



export default function Footer() {
  return (
    <footer className="site_footer py-16">
        <div className="container">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
                <div className="footer-single-col">
                    <div className="contact-footer">
                        <h4 className="text-3xl mb-5">Contact us</h4>
                        <ul>
                            <li className='text-md font-roboto font-regular'><label htmlFor="">T:</label> <a href="tel:8686309327" className='hover:text-tangy ease-in-out duration-300'>(868) 630-9327</a></li>
                            <li className='text-md font-roboto font-regular'><label htmlFor="">H:</label> T-F: 7am – 3pm, S-SU: 8am – 3pm</li>
                            <li className='text-md font-roboto font-regular'><label htmlFor="">L:</label> 348S, 11th St. Philly, NY 24107</li>
                            <li className='text-md font-roboto font-regular mt-5'><label htmlFor="">E:</label> <a href="mailto:mail@demolink.org" className='text-tangy'>mail@demolink.org</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-single-col">
                    <div className="social-list md:pl-24 pl-0">
                        <h4 className="text-3xl mb-5">Socials</h4>
                        <ul>
                            <li className='text-seaGreen font-roboto mb-3'>
                                <a href="/" className='hover:text-tangy ease-in-out duration-300'>Facebook</a>
                            </li>
                            <li className='text-seaGreen font-roboto mb-3'>
                                <a href="/" className='hover:text-tangy ease-in-out duration-300'>Instagram</a>
                            </li>
                            <li className='text-seaGreen font-roboto'>
                                <a href="/" className='hover:text-tangy ease-in-out duration-300'>Twitter</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-single-col">
                    <div className="subscribe">
                        <h4 className="text-3xl mb-5">Subscribe</h4>
                        <form action="" className='sm:flex justify-between gap-3'>
                            <label htmlFor="" className='relative w-full block'>
                                <input type="text" className="form-input border-0 border-b-2 border-gray-200 px-0 5 w-full block focus:ring-0 focus:border-tangy  h-12 font-roboto text-lg text-nightBlue" placeholder="Your Email Address"/>
                            </label>
                            <div className="submit-btn sm:mt-0 mt-4">
                                <input type="submit" value="Sign Up" className='!py-3 !px-8 h-12 inline-block solid-btn right-0 top-0 cursor-pointer' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="copy mt-10">
                <p className='font-roboto text-sm font-xregular'>&copy; 2022 Holity. <a href="/" className='text-seaGreen hover:text-tangy transition-all ease-in-out duration-300 '>Privacy Policy</a></p>
            </div>
        </div>
    </footer>
  )
}

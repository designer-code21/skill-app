import React, {useEffect} from 'react'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import {useLocation, Link} from 'react-router-dom'
import Logo from '../images/holity.svg'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Header() {
    const location = useLocation();
// useEffect(() => {
//     // Extract page name from the location path
//     const pageName = location.pathname.substring(1); // Remove the leading slash
//     // Remove previous page classes from body
//     document.body.classList.forEach(className => {
//       if (className.startsWith('page-')) {
//         document.body.classList.remove(className);
//       }
//     });
//     // Add new page class to body
//     document.body.classList.add(`page-${pageName || 'home'}`);
//   }, [location]);

useEffect(() => {
    const pageName = location.pathname.substring(1);

    document.body.classList.forEach(className => {
        if(className.startsWith('page-')){
            document.body.classList.remove(className);
        }
    });
    document.body.classList.add(`page-${pageName || 'home'}`)
}, [location])
    // const location = useLocation();
    // const originPath = window.location.origin
    // console.log(location)
    const navigation=[
        {id: 1, menu: 'Home', link:'/'},
        {id: 2, menu: 'About', link:'/about'},
        {id: 3, menu: 'Support us', link:'/support'},
        {id: 4, menu: 'Events', link:'/events'},
        {id: 5, menu: 'Contact us', link:'/contact'},
        {id: 5, menu: 'Expertise', link:'/expertise'}
    ]
    // const location = useLocation();
    const {pathname} = location
    // Item can be shown active using code mentioned below too.
    // const pathName = location.pathname;  
  return (

    <header className='py-3'>
        <div className="container">
        <Popover>
                <div className='flex items-center justify-between'>
                    <div className='logo flex justify-between items-center flex-grow md:flex-grow-0'>
                        <a href="/">
                            <span className='sr-only'>Workflow</span>
                            <img src={Logo} className='w-48' alt="" />
                        </a>
                        <div className="-mr-2 flex items-center md:hidden">
                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span className="sr-only">Open main menu</span>
                                <MenuIcon className="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                        </div>
                    </div>
                    <div className='nav hidden md:block'>
                        <ul>
                            {navigation.map((item) => (
                                <li key={item.menu} className="inline-block lg:ml-9 ml-4 first:ml-0">
                                    <Link  to={item.link} className= {classNames(
                                    "block font-regular text-nightBlue font-roboto capitalize relative after:h-0.5 after:w-full after:bg-tangy after:absolute after:bottom-0 pb-2 after:content[attr(after)] after:left-0 after:rounded-xl after:scale-x-0 after:ease-in-out after:duration-500 hover:after:scale-x-100", pathname === item.link ? "after:scale-x-100":""  )}>{item.menu}</Link>
                                </li>
                            ))}
                        </ul>
                        {/* <link to="">About</link> */}
                    </div>
                    <div className='login-btn md:block hidden'>
                        <button type="button" className='solid-btn bg-seaGreen hover:shadow-btnShadowGreen border-0 transition-all duration-300 ease-in-out font-roboto'>Donate</button>
                    </div>
                </div>
                <Transition
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-1 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-1 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Popover.Panel className='absolute top-0 z-10 md:hidden transform origin-top-right p-2 transition inset-x-0'>
                            <div className=''>
                                <div className='rounded-lg shadow-md bg-white ring1 ring-black ring-opacity-5 overflow-hidden'>
                                    <div className='px-5 pt-4 flex items-center justify-between'>
                                        <div>
                                            <img src={Logo} className='h-auto w-24' alt="" />
                                        </div>
                                        <div className="-mr-2">
                                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                <span className="sr-only">Close main menu</span>
                                                <XIcon className="h-6 w-6" aria-hidden="true" />
                                            </Popover.Button>
                                        </div>
                                    </div>
                                    <div className="p-2 space-y-1">
                                        {navigation.map((item) => (
                                            <Link key={item.id} to={item.link} className="font-regular text-base text-nightBlue px-3 py-2 block capitalize">{item.menu}</Link>
                                        ))}
                                    </div>
                                    <div className='login-btn'>
                                        <button type="button" className='bg-violet-100 rounded-md px-7 py-2.5 text-violet-900 inline-block font-roboto font-bold w-full text-center rounded-t-none uppercase' >Donate</button>
                                    </div>
                                </div>
                            </div>
                    </Popover.Panel>
                </Transition>
            </Popover>
        </div>
    </header>
  )
}

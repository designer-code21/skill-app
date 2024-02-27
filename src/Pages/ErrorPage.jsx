import React from 'react'
import PageTitle from '../Components/PageTitle'

export default function ErrorPage() {
  return (
    <section className="page-error-block pt-24 pb-36 border-t border-solid border-[#ddd]">
        <div className="container">
            <div className="error-content text-center">
                <h1 className='text-9xl mb-5 leading-normal'>404</h1>
                <p className='font-semibold mb-3'>I'm Sorry, couldn't find the page you are searching for</p>
                <p className='font-semibold mb-5'>Reach Out us at </p>
                <a href="/" className='solid-btn'>Home</a>
            </div>
        </div>
    </section>
  )
}

import React, { useEffect } from 'react'

export default function PageTitle({pageTitle}) {
    useEffect(() => {
        document.title = pageTitle;
    }, [pageTitle])
  return (
    <section className="page-title pt-24 pb-28 bg-seaGreen/10">
        <div className="container">
          <div className="page-title-box text-center">
            <h1 className='text-6xl leading-normal'>{pageTitle}</h1>
          </div>
        </div>
    </section>
  )
}

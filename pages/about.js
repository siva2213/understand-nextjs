import React from 'react'
import Footer from '../components/Footer'

export default function About() {
    return (
        <div className='about-layout'>About</div>
    )
}

About.getLayout = (page) => {
    return (
        <>
            {page}
            <Footer />
        </>
    )
}
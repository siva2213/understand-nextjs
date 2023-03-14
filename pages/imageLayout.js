import React from 'react'
import Image from 'next/image'
import img from '../public/1.jpg'

export default function imageLayout() {
    return (
        <div>
            <Image src={img} alt='images' placeholder='blur' width='280' height='420' />
            {
                ['1', '2', '3', '4', '5'].map(img => {
                    return (
                        <div key={img}>
                            <Image src={`/${img}.jpg`} alt='images' width='280' height='420'/>
                        </div>
                    )
                })
            }
        </div>
    )
}

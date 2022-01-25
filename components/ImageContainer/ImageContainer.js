import React from 'react';
import Image from 'next/image';
import girl_logo from '../../public/images/girl.jpeg'

export default function ImageContainer() {
    return (
        <div className='bg-blue-600 flex-1 h-screen  items-center justify-center'>
            <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
                <Image
                    alt='Mountains'
                    src={girl_logo}
                    layout='fill'
                    objectFit='cover'
                />
            </div>
            {/* <image src={girl_logo} className={styles.girl_logo} /> */}
        </div>
    )
}

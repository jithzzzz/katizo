import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/Login.module.css'


import ImageContainer from '../components/ImageContainer/ImageContainer.js'

export default function login() {
  return (
    <div className='flex justify-between'>
      <ImageContainer/>
      <div className='bg-purple-200 h-screen flex-1 p-20'>
        <div>
          <p className={styles.w_font}>Welcome to Ktizo</p>
          <p className={styles.m_font}>Login Account</p>
          <div>
            <form>
              <div className={styles.form_row}>
                <label>Full Name</label>
                <input type='text'></input>
              </div>
              <div className={styles.form_row}>
                <label>Password</label>
                <input type='text'></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

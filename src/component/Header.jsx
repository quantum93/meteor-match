import React, { Component } from 'react'
import HeaderNavbar from './HeaderNavbar.js'
import astro2 from '../public/astro2.jpg'



export default function Header() {
  var picStyles = {
    width: '100%',
  }
  return (
    <div>
      <img src={astro2} alt='header picture' style={picStyles}/>
      <HeaderNavbar/>
    </div>
  );
}

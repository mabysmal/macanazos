import React from 'react';
import Image from "next/image";
import HamburgerMenu from "@/components/hamburger-menu";
import FooterMacanazos from '@/components/footerMacanazos';
import OrderProcess from '@/components/order-process';
import './styles.css'

export default function Home() {


  return (
    <main>
        <HamburgerMenu></HamburgerMenu>
        <div className='bg-blue'>
            <h1 className='text-6xl py-8 text-white text-center underline decoration-orange'>Proceso para hacer tu pedido.</h1>
            <p className='text-2xl pt-0.5 text-white text-center'>Por el momento, sólo hacemos entregas locales en Nuevo León en los siguientes municipios: Monterrey, San Pedro, San Nicolás, Guadalupe y Apodaca.</p>
            
            <OrderProcess />


        </div>
        <FooterMacanazos></FooterMacanazos>
    </main>
  );
}
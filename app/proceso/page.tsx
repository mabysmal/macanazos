import React from 'react';
import Image from "next/image";
import HamburgerMenu from "@/components/hamburger-menu";
import FooterMacanazos from '@/components/footerMacanazos';
import OrderProcess from '@/components/order-process';

export default function Home() {


  return (
    <main>
        <HamburgerMenu></HamburgerMenu>
        <div className='bg-blue'>
            <h1 className='text-6xl py-8 text-white text-center underline decoration-orange'>Proceso para hacer tu pedido.</h1>
            
            <OrderProcess />


        </div>
        <FooterMacanazos></FooterMacanazos>
    </main>
  );
}
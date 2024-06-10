"use client";
import { useState } from 'react'
import Image from 'next/image';

const HamburgerMenu = () => {
    const [sidebarVisible, setSidebarVisible] = useState(false);

    const showSidebar = () => {
  setSidebarVisible(true);
    };

    const hideSidebar = () => {
  setSidebarVisible(false);
    };

    return (
        <header className="md:flex md:flex-col-reverse">
        <div className="relative md:static md:flex md:bg-orange md:justify-center">
            <ul id="mobileMenu" className="absolute top-0 left-0 ml-6 mt-8 md:static md:flex md:m-2">
                <li className="h-full no-underline items-center flex" onClick={() => setSidebarVisible(!sidebarVisible)}>
                    <a href="#">
                        <svg className="md:hidden" id="openMobileMenu" xmlns="http://www.w3.org/2000/svg" height="3rem" viewBox="0 -960 960 960" width="3rem" fill="#f68920">
                            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                        </svg>
                    </a>
                </li>
                <li><a className="h-full px-8 no-underline hidden items-center hover:bg-gray md:flex md:text-white md:hover:bg-dark-orange md:hover:text-gray" href="a">Inicio</a></li>
                <li><a className="h-full px-8 no-underline hidden items-center hover:bg-gray md:flex md:text-white md:hover:bg-dark-orange md:hover:text-gray" href="a">Catálogo</a></li>
                <li><a className="h-full px-8 no-underline hidden items-center hover:bg-gray md:flex md:text-white md:hover:bg-dark-orange md:hover:text-gray" href="a">a</a></li>
                <li><a className="h-full px-8 no-underline hidden items-center hover:bg-gray md:flex md:text-white md:hover:bg-dark-orange md:hover:text-gray" href="a">Reseñas</a></li>
                <li><a className="h-full px-8 no-underline hidden items-center hover:bg-gray md:flex md:text-white md:hover:bg-dark-orange md:hover:text-gray" href="a">Ayuda</a></li>
                <li><a className="h-full px-8 no-underline hidden items-center hover:bg-gray md:flex md:text-white md:hover:bg-dark-orange md:hover:text-gray" href="a">Contacto</a></li>   
            </ul>
        </div>
        <nav className="flex justify-center items-center ml-10 md:ml-0">
            <div id="menuInicio">
                <ul className={`sidebar fixed top-[0] right-[0] h-screen w-64 bg-white [box-shadow:-10px_0_10px_rgba(0,_0,_0,_0.1)] flex flex-col items-start ${sidebarVisible ? 'flex' : 'hidden'}`}>
                    <li className="w-full" onClick={hideSidebar}>
                        <a href="#">
                            <svg className="m-5"
                                id="closeMobileMenu" xmlns="http://www.w3.org/2000/svg" height="3rem" viewBox="0 -960 960 960" width="3rem" fill="#f68920">
                                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                            </svg>
                        </a>
                    </li>
                    <li className="w-full"><a className="text-2xl mb-4 w-full px-8 no-underline flex items-center hover:bg-gray" href="a">Inicio</a></li>
                    <li className="w-full"><a className="text-2xl mb-4 w-full px-8 no-underline flex items-center hover:bg-gray" href="a">Catálogo</a></li>
                    <li className="w-full"><a className="text-2xl mb-4 w-full px-8 no-underline flex items-center hover:bg-gray" href="a">a</a></li>
                    <li className="w-full"><a className="text-2xl mb-4 w-full px-8 no-underline flex items-center hover:bg-gray" href="a">Reseñas</a></li>
                    <li className="w-full"><a className="text-2xl mb-4 w-full px-8 no-underline flex items-center hover:bg-gray" href="a">Ayuda</a></li>
                    <li className="w-full"><a className="text-2xl mb-4 w-full px-8 no-underline flex items-center hover:bg-gray" href="a">Contacto</a></li>
                </ul>
            </div>
            <div id="Logo-Principal" className="md:flex">
                <Image
                    className="m-2"
                    src="/macanazos-logo-azul-borders.svg"
                    alt="Macanazos Logo"
                    width={256}
                    height={99}
                    priority
                />
            </div>
        </nav>
    </header>
            
    )
};

export default HamburgerMenu
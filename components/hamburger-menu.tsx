"use client";
import { useState } from 'react'
import Image from 'next/image';
import { bebasNeue } from "@/app/fonts";

const HamburgerMenu = () => {
    const [sidebarVisible, setSidebarVisible] = useState(false);

    const showSidebar = () => {
  setSidebarVisible(true);
    };

    const hideSidebar = () => {
  setSidebarVisible(false);
    };

    return (
        <header className="md:flex md:flex-col-reverse ">
        <div className="relative md:static md:flex md:bg-orange md:justify-center">
            <ul id="mobileMenu" className="absolute top-0 left-0 ml-6 mt-8 md:static md:flex md:m-2">
                <li className="h-full no-underline items-center flex" onClick={() => setSidebarVisible(!sidebarVisible)}>
                    <a href="#">
                        <svg className="md:hidden" id="openMobileMenu" xmlns="http://www.w3.org/2000/svg" height="3rem" viewBox="0 -960 960 960" width="3rem" fill="#f68920">
                            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                        </svg>
                    </a>
                </li>
                <li><a className="h-full px-8 no-underline hidden items-center font-font-bebas text-2xl md:flex md:text-white md:overflow-hidden md:max-w-xs md:transition md:duration-300 md:ease-in-out md:hover:scale-150" href="/"><h2 className={bebasNeue.className}>Inicio</h2></a></li>
                <li><a className="h-full px-8 no-underline hidden items-center font-font-bebas text-2xl md:flex md:text-white md:overflow-hidden md:max-w-xs md:transition md:duration-300 md:ease-in-out md:hover:scale-150" href="/catalogo"><h2 className={bebasNeue.className}>Catálogo</h2></a></li>
                <li><a className="h-full px-8 no-underline hidden items-center font-font-bebas text-2xl md:flex md:text-white md:overflow-hidden md:max-w-xs md:transition md:duration-300 md:ease-in-out md:hover:scale-150" href="/proceso"><h2 className={bebasNeue.className}>Cómo ordenar</h2></a></li>
                {/* <li><a className="h-full px-8 no-underline hidden items-center font-font-bebas text-2xl md:flex md:text-white md:overflow-hidden md:max-w-xs md:transition md:duration-300 md:ease-in-out md:hover:scale-150" href=""><h2 className={bebasNeue.className}>Reseñas</h2></a></li> */}
                {/* <li><a className="h-full px-8 no-underline hidden items-center font-font-bebas text-2xl md:flex md:text-white md:overflow-hidden md:max-w-xs md:transition md:duration-300 md:ease-in-out md:hover:scale-150" href="/"><h2 className={bebasNeue.className}>Nosotros</h2></a></li> */}
                <li><a className="h-full px-8 no-underline hidden items-center font-font-bebas text-2xl md:flex md:text-white md:overflow-hidden md:max-w-xs md:transition md:duration-300 md:ease-in-out md:hover:scale-150" href="/"><h2 className={bebasNeue.className}>Contacto</h2></a></li>   
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
                    <li className="w-full"><a className=" mb-6 w-full px-8 no-underline flex items-center font-font-bebas text-4xl hover:bg-blue hover:text-white" href="/"><h2 className={bebasNeue.className}>Inicio</h2></a></li>
                    <li className="w-full"><a className=" mb-4 w-full px-8 no-underline flex items-center font-font-bebas text-4xl hover:bg-blue hover:text-white" href="/catalogo"><h2 className={bebasNeue.className}>Catálogo</h2></a></li>
                    <li className="w-full"><a className=" mb-4 w-full px-8 no-underline flex items-center font-font-bebas text-4xl hover:bg-blue hover:text-white" href="/proceso"><h2 className={bebasNeue.className}>Cómo ordenar</h2></a></li>
                    {/* <li className="w-full"><a className=" mb-4 w-full px-8 no-underline flex items-center font-font-bebas text-4xl hover:bg-blue hover:text-white" href="/"><h2 className={bebasNeue.className}>Reseñas</h2></a></li> */}
                    {/* <li className="w-full"><a className=" mb-4 w-full px-8 no-underline flex items-center font-font-bebas text-4xl hover:bg-blue hover:text-white" href="/"><h2 className={bebasNeue.className}>Nosotros</h2></a></li> */}
                    <li className="w-full"><a className=" mb-4 w-full px-8 no-underline flex items-center font-font-bebas text-4xl hover:bg-blue hover:text-white" href="/"><h2 className={bebasNeue.className}>Contacto</h2></a></li>
                </ul>
            </div>
            <div id="Logo-Principal" className="md:flex">
                <a href='/'>
                    <Image
                        className="m-2"
                        src="/macanazos-logo-azul-borders.svg"
                        alt="Macanazos Logo"
                        width={256}
                        height={99}
                        priority
                    />
                </a>
            </div>
        </nav>
        <a 
        id="floatingWhatsAppbutton"
        href="https://wa.me/+528110596823"
        className="fixed w-[60px] h-[60px] bottom-[40px] right-[40px] bg-[#25d366] text-[#FFF] rounded-[50px] text-center text-[30px] [box-shadow:2px_2px_3px_#999]"
        target="_blank">
            <svg className="inline-block mt-[5px]" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24"><path fill="#fffff7" fill-rule="evenodd" d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977c0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162l-2.824.741l.753-2.753l-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188a7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73c-.205-.075-.354-.112-.504.112s-.58.729-.711.879s-.262.168-.486.056s-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393c.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666c-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008a.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387c.536.231.954.369 1.279.473c.537.171 1.026.146 1.413.089c.431-.064 1.327-.542 1.514-1.066c.187-.524.187-.973.131-1.067c-.056-.094-.207-.151-.43-.263" clip-rule="evenodd"/></svg>

            <i className="mt-4"></i>
        </a>
    </header>
            
    )
};

export default HamburgerMenu
'use client';
import Image from "next/image";
import { attributes, react as HomeContent } from "../content/home.md";
import { useEffect, useState } from "react";


export default function Home(){
  console.log(attributes)
  let {title, cats } = attributes

  const images = [
    "/Dogs/dogA.avif",
    "/Dogs/dogB.avif",
    "/Dogs/dogC.avif",
    // "https://images.unsplash.com/photo-1444212477490-ca407925329e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRvZ3N8ZW58MHx8MHx8fDA%3D",
    // "https://images.unsplash.com/photo-1558929996-da64ba858215?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRvZ3N8ZW58MHx8MHx8fDA%3D",
    // "https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZG9nc3xlbnwwfHwwfHx8MA%3D%3D",
    // "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZG9nc3xlbnwwfHwwfHx8MA%3D%3D",
    // "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9nc3xlbnwwfHwwfHx8MA%3D%3D",
  ];

//////
const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

////////////
  // const [currentSlide, setCurrentSlide] = useState(0);

  // const showSlide = (index: number) => {
  //   setCurrentSlide(index);
  // };

  // const nextSlide = () => {
  //   setCurrentSlide((prev) => (prev + 1) % images.length);
  // };

  // const prevSlide = () => {
  //   setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  // };







  return (
    <main>
      <header>
      <nav className="s">
          <div className="mr-4" id="menuToggle">
            <input className="a" type="checkbox" />
              <span></span>
              <span></span>
              <span></span>
              <ul id="menu">
                <a href="#"><li>Inicio</li></a>
                <a href="#"><li>Productos</li></a>
                <a href="#"><li>Reseñas</li></a>
                <a href="#"><li>Ayuda</li></a>
                <a href="#"><li>Contacto</li></a>
                {/* <a href="https://erikterwan.com/" target="_blank"><li>Show me more</li></a> */}
              </ul>
          </div>
          {/* <ul>
            <li>
              <a href="PLACEHOLDER LINK">
               <span>Inicio</span>
              </a>
            </li>
            <li>
              <a href="PLACEHOLDER LINK">
                <span>Productos</span>
              </a>
            </li>
            <li>
              <a href="PLACEHOLDER LINK">
                <span>Reseñas</span>
              </a>
            </li>
            <li>
              <a href="PLACEHOLDER LINK">
                <span>Ayuda</span>
              </a>
            </li>
            <li>
              <a href="PLACEHOLDER LINK">
                <span>Contacto</span>
              </a>
            </li>
          </ul> */}
          <div className="a">
            <Image
                  className="ml-2"
                  src="/macanazos-logo-azul-borders.svg"
                  alt="Macanazos Logo"
                  width={256}
                  height={99}
                  priority
                />
         </div>
        </nav>
        
        
      </header>

      <div className="bg-blue w-full h-80">
        <div>
          <Image
            className="ml-2"
            src={images[currentImageIndex]}
            alt="Perritos tiruriruriru"
            width={256}
            height={99}
          />
        </div>
        <div className="botones de carrusel">
          <button className="text-5xl" onClick={handlePrevClick}>‹</button>
          <button className="text-5xl" onClick={handleNextClick}>›</button>
        </div>
      </div>


      <div className="bg-orange w-full h-96 mt-12">
        {/* AQUI VA UNA LISTA DE PRODUCTOS, LOS MAS VENDIDOS */}
        <span className="text-white">Aqui va una lista de productos, los mas vendidos</span>
        <div>
          {/* <Image
          className="ml-2"
          src="/macanazos-lona.png"
          alt="Macanazos Lona"
          width={256}
          height={99}
          /> */}
          <h3>Producto 1</h3>
          <p>Descripcion del producto Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero amet odit culpa adipisci vitae dolores! Explicabo accusantium nobis, repellendus iusto ex, quo quidem dignissimos quae voluptatem libero saepe iste ab. </p>
          <h4>Desde $XX.00</h4>
        </div>
      </div>
      <footer>
        <div className="bg-black w-full h-60 mt-12">
          <div className="Contenedor de imagen">
            <img className="h-auto w-1/3"
            src="/imagotipo macanazos blanco.svg"
            alt="Macanazos Logo" 
          ></img>
          </div>
          <div className="Contenedor de contactos">
          </div>
          
        </div>
      </footer>
    </main>

  //   <main className="flex min-h-screen flex-col items-center justify-between p-24">
  //     <header>
  //       <div className="z-10 w-full max-w-5xl items-center justify-center font-mono text-sm lg:flex">
  //       <p className="fixed left-0 top-0 flex w-full justify-center border-b border-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
  //       <Image
  //         className="Logo"
  //         src="/macanazos-logo-borders.svg"
  //         alt="Macanazos Logo"
  //         width={256}
  //         height={99}
  //         priority
  //       />
  //         <div className="navbar">
  //         <a
  //         href=""
  //         className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <h2 className="mb-3 text-2xl font-semibold">
  //           Docs{" "}
  //           <span className="flex transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
  //             -&gt;
  //           </span>
  //         </h2>
  //         <p className="m-0 max-w-[30ch] text-sm opacity-50">
  //           Find in-depth information about Next.js features and API.
  //         </p>
  //       </a>
  //         </div>  
  //       </p>
  //     </div>
  //     </header>


      

  //     <ul>
  //           {cats.map((cat, k) => (
  //             <li key={k}>
  //               <h2>{cat.name}</h2>
  //               <p>{cat.description}</p>
  //             </li>
  //           ))}
  //         </ul>

      

      

  //     <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
  //       <a
  //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
  //         className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <h2 className="mb-3 text-2xl font-semibold">
  //           Docs{" "}
  //           <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
  //             -&gt;
  //           </span>
  //         </h2>
  //         <p className="m-0 max-w-[30ch] text-sm opacity-50">
  //           Find in-depth information about Next.js features and API.
  //         </p>
  //       </a>

  //       <a
  //         href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
  //         className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <h2 className="mb-3 text-2xl font-semibold">
  //           Learn{" "}
  //           <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
  //             -&gt;
  //           </span>
  //         </h2>
  //         <p className="m-0 max-w-[30ch] text-sm opacity-50">
  //           Learn about Next.js in an interactive course with&nbsp;quizzes!
  //         </p>
  //       </a>

  //       <a
  //         href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
  //         className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <h2 className="mb-3 text-2xl font-semibold">
  //           Templates{" "}
  //           <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
  //             -&gt;
  //           </span>
  //         </h2>
  //         <p className="m-0 max-w-[30ch] text-sm opacity-50">
  //           Explore starter templates for Next.js.
  //         </p>
  //       </a>

  //       <a
  //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
  //         className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <h2 className="mb-3 text-2xl font-semibold">
  //           Deploy{" "}
  //           <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
  //             -&gt;
  //           </span>
  //         </h2>
  //         <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
  //           Instantly deploy your Next.js site to a shareable URL with Vercel.
  //         </p>
  //       </a>
  //     </div>
  //   </main>
);
}

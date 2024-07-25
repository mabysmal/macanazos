import React from 'react';
import Image from "next/image";
import HamburgerMenu from "@/components/hamburger-menu";
import FooterMacanazos from '@/components/footerMacanazos';
import './styles.css'

export default function Home() {
  const clientLogos = [
    { src: "/clientes/3-madisonmty.png", alt: "Colegio Madison Monterrey" },
    { src: "/clientes/2-colegiolabastida.png", alt: "Colegio Labastida" },
    { src: "/clientes/1-highlandsmty.png", alt: "Highlands International School Monterrey" },
    { src: "/clientes/4-umm.png", alt: "Universidad Metropolitana de Monterrey" },
    { src: "/clientes/5-udem2.png", alt: "Universidad de Monterrey" },
    { src: "/clientes/6-ffyl.png", alt: "Facultad de Filosofia y Letras" },
    { src: "/clientes/7-tecdemty.png", alt: "Tecnológico de Monterrey" },
    { src: "/clientes/13-albatros.png", alt: "Colegio Albatros" },
    { src: "/clientes/10-tonalli.png", alt: "Colegio Tonalli" },
    { src: "/clientes/11-ienu.png", alt: "Instituto de Educación Naciones Unidas" },
  ];
  return (
    <main>
      <HamburgerMenu />
      <div className="bg-blue container mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <h1 className='pt-6 text-white text-center text-4xl md:text-5xl lg:text-6xl underline decoration-orange'>
          Hola, soy Guillermo Castillo
        </h1>
        <p className='textos pt-6 px-12 md:px-20 text-gray text-center text-lg md:text-xl lg:text-2xl'>
          Licenciado en Diseño gráfico, Ilustrador profesional, con una carrera de más de 25 años en el área. Maestro, Infógrafo, caricaturista, ilustrador editorial.
        </p>
        <div className='py-6'>
          <div className='max-w-screen-xl mx-auto'>
            <Image
              className="w-full h-auto border-4 border-orange rounded-2xl"
              src="/banner-portafolio.png"
              alt="Banner de Portafolio"
              width={900}
              height={300}
              layout="responsive"
            />
          </div>
        </div>

        <div id='historia' className="flex flex-row items-center justify-between gap-4 py-12">
          <div className="w-1/4">
            <Image
              className="rounded-2xl w-full h-auto"
              src="/PlacaElNorte.jpeg"
              alt="Macanazos Escuelas"
              width={400}
              height={300}
              layout="responsive"
            />
          </div>
  
          <div id='textos-aboutus' className='w-1/2 textos text-white text-center text-base sm:text-lg md:text-xl lg:text-2xl'>
            <p className="mb-6">
              Tengo más de 30 años de experiencia en diseño gráfico e ilustración, trabajando para el periódico El Norte; siendo maestro de la Facultad de Artes Visuales de la UANL; y siendo ilustrador y diseñador gráfico en Código Magenta.
            </p>
            <p>
              Macanazos inició con la ilustración ¨bombero¨, mediante el primer pedido hecho para el Colegio Madison de Monterrey; y de ahí en adelante, trabajando para varios colegios y universidades de la localidad.
            </p>
          </div>
  
          <div className="w-1/4">
            <Image
              className="rounded-2xl w-full h-auto"
              src="/madison-macanazos.jpeg"
              alt="Macanazos Escuelas"
              width={400}
              height={300}
              layout="responsive"
            />
          </div>
        </div>

        <div id='OurClients' className="bg-blue pb-16">
          <h2 className="py-6 text-white text-center text-4xl md:text-5xl lg:text-6xl underline decoration-orange">
            Algunos de nuestros clientes:
          </h2>
          <div className="flex flex-wrap justify-center">
            {clientLogos.map((logo, index) => (
              <div key={index} className="w-1/3 sm:w-1/4 lg:w-1/5 p-4">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={150}
                  height={150}
                  layout="responsive"
                  className="object-contain bg-orange p-4 rounded-2xl"
                />
              </div>
            ))}
          </div>
        </div>
        
      </div>
      <FooterMacanazos />
    </main>
  );
}
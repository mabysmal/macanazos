'use client';

import React, { useState } from 'react';

interface Step {
  icon: string;
  title: string;
  content: string;
}

const steps: Step[] = [
  { 
    icon: '💬', 
    title: 'Paso 1: Cotización', 
    content: `
      <p className='pt-4'>Checa nuestro catálogo y contáctanos por medio de los botones de WhatsApp o email en la página de nuestros productos. 
      Te cotizaremos tu pedido, sin compromiso.</p>
      <p className='pt-4'>Necesitaremos estos datos para hacer tu cotización:</p>
      <ul className='pt-6'>
        <li className='pt-4'>🔵 ¿De cuántas personas es el grupo a caracterizar?</li>
        <li className='pt-4'>🔵 ¿De qué escuela, empresa o grupo deportivo son?</li>
        <li className='pt-4'>🔵 ¿Cuál es la fecha del evento?</li>
        <li className='pt-4'>🔵 ¿Quién o quiénes estarán a cargo de recibir el trabajo?</li>
      </ul>
    `
  },
  { icon: '💲', title: 'Paso 2: Primer Pago', content:  `
    <p>Se realiza el pago del 50% del total del pedido.</p>
    <p>Necesitaremos estos documentos para empezar la producción:</p>
    <ul>
      <li>🔵 Lista de nombres de las personas a retratar.</li>
      <li>🔵 Imágenes del rostro de las personas a retratar. Deben ser imágenes en ángulo normal, con las facciones del rostro visibles.</li>
      <li>🔵 Si el pedido es para una escuela, empresa o club, mandar el diseño del uniforme para caracterizar.</li>
      <li>🔵 Dependiendo del pedido, necesitaremos más datos al respecto. Este es un lugar ideal para que puedas detallar completamente cualquier aspecto que desees sobre tu pedido. Queremos personalizar tu solicitud para asegurarnos de que los productos se caractericen de la mejor manera posible. </li>
    </ul>
  ` },
  { icon: '🧑🏽‍🎨', title: 'Paso 3: Producción del pedido', content:
     '<p>Una vez recibidos los datos que nos proporcionaste y efectuado el primer pago del 50% del total del pedido, procederemos a iniciar la fabricación de tus productos.</p> <p>Durante este proceso, te mantendremos informado con actualizaciones y fotografías del avance de la producción.</p> Además, estaremos atentos para responder cualquier pregunta adicional que puedas tener, comunicándonos a través del medio que hayas seleccionado (ya sea WhatsApp o correo electrónico). Mantente al tanto de nuestras comunicaciones para recibir información puntual..</p>' },
  { icon: '📦', title: 'Paso 4: Entregas Locales', content:   `
    <p>Por el momento, sólo hacemos entregas locales en Nuevo León en los siguientes municipios: Monterrey, San Pedro, San Nicolás, Guadalupe y Apodaca.</p>
    <p>Una vez finalizado el pedido, le pediremos acordar día, hora y lugar específico de entrega.</p>
    <p>También, le pediremos el nombre completo de la persona o personas quienes recibirán el pedido. No se entregarán pedidos a terceras personas fuera del acuerdo.</p>
    <p>Antes de poder recibir el pedido deberá pagar el 50% restante del total del pedido. No se le entregará el pedido si no ha liquidado el pago.</p>
  ` },
  { icon: '⭐', title: 'Paso 5: Evalúanos', content:   `
    <p >En Macanazos, nos dedicamos apasionadamente a capturar momentos especiales a través de caricaturas personalizadas.</p>
    <p>Valoramos sinceramente tu opinión y tu experiencia con nosotros. Una vez que recibas tu caricatura personalizada y estés encantado con el resultado, te invitamos a compartir tu experiencia en <a class="link-review" href="https://g.page/r/CYhAC8pPsNGuEBM/review"> nuestra página de Google Maps haciendo click aquí.</a> Tu reseña no solo nos ayuda a crecer y mejorar, sino que también orienta a otros en la comunidad que buscan un servicio personalizado y memorable para sus eventos especiales.</p>
    <p>Estamos emocionados de ser parte de tus momentos más significativos y esperamos que disfrutes cada detalle de nuestras creaciones artísticas. ¡Gracias por elegir a Macanazos para dar vida a tus recuerdos de una manera única y especial!</p>
  ` },
];

const ChevronLeft: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const ChevronRight: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

const OrderProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const handlePrev = () => setActiveStep((prev) => (prev > 0 ? prev - 1 : prev));
  const handleNext = () => setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="flex items-center justify-between mb-8">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl cursor-pointer transition-colors duration-300 ${
                index === activeStep ? 'bg-blue-700 text-white' : 'bg-gray-200 hover:bg-gray-300'
              }`}
              onClick={() => setActiveStep(index)}
            >
              {step.icon}
            </div>
            {index < steps.length - 1 && (
              <div className="flex-1 h-0.5 bg-gray-300 mx-2" />
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="flex justify-between py-2">
        <button
          onClick={handlePrev}
          disabled={activeStep === 0}
          className="flex items-center px-4 py-2 bg-blue-700 text-white rounded disabled:opacity-50 hover:bg-blue-800"
        >
          <ChevronLeft /> <span className="ml-2">Paso anterior</span>
        </button>
        <button
          onClick={handleNext}
          disabled={activeStep === steps.length - 1}
          className="flex items-center px-4 py-2 bg-blue-700 text-white rounded disabled:opacity-50 hover:bg-blue-800"
        >
          <span className="mr-2">Siguiente paso</span> <ChevronRight />
        </button>
      </div>
      <div className="bg-orange rounded-lg shadow-md p-6 mb-4">
        <h2 className="text-white text-4xl font-bold mb-2">{steps[activeStep].title}</h2>
        <div className='DescripcionPaso text-white' dangerouslySetInnerHTML={{ __html: steps[activeStep].content }} />
      </div>
      
    </div>
  );
};

export default OrderProcess;
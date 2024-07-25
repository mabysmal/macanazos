'use client';

import React, { useState } from 'react';

interface Step {
  icon: string;
  title: string;
  content: string;
}

const steps: Step[] = [
  { icon: '💬', title: 'Cotizar', content: `
    Checa nuestro catálogo y contáctanos por medio de los botones de WhatsApp o email en la página de nuestros productos. 
    Te cotizaremos tu pedido, sin compromiso.
    Necesitaremos estos datos para hacer tu cotización:
    - ¿De cuántas personas es el grupo a caracterizar?
    - ¿De qué escuela, empresa o grupo deportivo son?
    - ¿Cuál es la fecha del evento?
    - ¿Quién o quiénes estarán a cargo de recibir el trabajo?
  ` },
  { icon: '💲', title: 'Quote', content: 'Well provide a quote for your order.' },
  { icon: '🔄', title: 'Process', content: 'Your order is processed in our system.' },
  { icon: '🚚', title: 'Ship', content: 'We ship your order to you.' },
  { icon: '📦', title: 'Deliver', content: 'Your order is delivered.' },
  { icon: '⭐', title: 'Review', content: 'Leave a review of your experience.' },
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
      <div className="bg-white rounded-lg shadow-md p-6 mb-4">
        <h2 className="text-2xl font-bold mb-2">{steps[activeStep].title}</h2>
        <p>{steps[activeStep].content}</p>
      </div>
      <div className="flex justify-between">
        <button
          onClick={handlePrev}
          disabled={activeStep === 0}
          className="flex items-center px-4 py-2 bg-blue-700 text-white rounded disabled:opacity-50 hover:bg-blue-800"
        >
          <ChevronLeft /> <span className="ml-2">Previous</span>
        </button>
        <button
          onClick={handleNext}
          disabled={activeStep === steps.length - 1}
          className="flex items-center px-4 py-2 bg-blue-700 text-white rounded disabled:opacity-50 hover:bg-blue-800"
        >
          <span className="mr-2">Next</span> <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default OrderProcess;
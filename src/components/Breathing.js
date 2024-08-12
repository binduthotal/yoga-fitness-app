import React from 'react';
import { pranayamaSteps } from '../utils/constants';


const Breathing = () => {
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Pranayama Steps</h1>
      {pranayamaSteps.map((section, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
          <div className="space-y-2">
            {section.steps.map((step, i) => (
              <p key={i} className="text-lg">
                {step}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Breathing;

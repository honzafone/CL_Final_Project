import React from 'react';

const FeatureCard = ({ title, description }) => (
  <div className="w-64 p-6 bg-customDark rounded-lg m-4 border-2 border-transparent hover:border-2 hover:border-customSecondary-500">
    <h3 className="text-2xl font-bold mb-2">
        {title}
    </h3>
    <p>
        {description}
    </p>
  </div>
);

export default FeatureCard;

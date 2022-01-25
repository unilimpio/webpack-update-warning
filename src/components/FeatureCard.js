import React from 'react';
import Card from './Card';

const FeatureCard = ({ feature }) => (
  <Card className="bg-white">
    <h3 className="text-2xl text-primary-default font-bold mb-4">{feature.title}</h3>
    <img
        className="float-left m-1"
        src={feature.featureImage}
        alt={feature.featureName}
      />
    <p className="">{feature.content}</p>
    
  </Card>
);

export default FeatureCard;

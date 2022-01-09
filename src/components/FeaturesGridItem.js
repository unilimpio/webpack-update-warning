import React from 'react';


const FeatureGridItem = ({ feature }) => (
  
<div className="border rounded content-center">{feature.featureImage}<br/>
  <h2>{feature.title}</h2>
  <p>{feature.content}</p>
</div>
);

export default FeatureGridItem;

import React from 'react';

const StatsBox = ({ primaryText, secondaryText }) => (
  <>
    <h3 className="font-semibold">{primaryText}</h3>
    <p className="font-semibold mb-6">{secondaryText}</p>
  </>
);

export default StatsBox;

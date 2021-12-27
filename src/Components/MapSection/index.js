import React from 'react';
import partner from './../../img/ucl.svg';
import HeaderCard from './HeaderCard';
import TeamSection from './TeamSection';


const MapSection = () => (
  <div className="partner-part">
    <HeaderCard />
    <div className="map">
      <img src={partner} alt="map" />
    </div>
    <TeamSection />
  </div>
);

export default MapSection;

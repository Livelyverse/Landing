import React from 'react';
import partner from './../../img/ucl.svg';
import HeaderCard from './HeaderCard';
import TeamSection from './TeamSection';


const MapSection = () => (
  <div className="partner-part">
    <HeaderCard />
    <img src={partner} alt="map" className="map" />
    <TeamSection />
  </div>
);

export default MapSection;

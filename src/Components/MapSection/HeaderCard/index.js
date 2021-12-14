import React from 'react';
import uclLogo from '../../../img/partners/UCL-Logo.svg';

const HeaderCard = () => (
    <div className="partner-header-container">
        <div className="partner-card">
            <div className="partner-card-contianer">
                <div className="partner-card-image">
                    <img className="logo" src={uclLogo} alt="ucl-logo" />
                </div>
                <div><span className="partner-card-bold-text"> + 40 million Households</span></div>
                <div><span className="partner-card-text">in the main operators in Latin America</span></div>
                <div><span className="partner-card-bold-text"> + 80 million viewvers</span></div>
                <div><span className="partner-card-text">on platforms OTT, app & Smart tv</span></div>
            </div>
        </div>
    </div>
);

export default HeaderCard;
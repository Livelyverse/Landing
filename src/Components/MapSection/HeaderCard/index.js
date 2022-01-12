import React from 'react';
import uclLogo from '../../../img/partners/UCL-Logo.svg';
import capital from '../../../img/partners/capital.png';
import { Link } from 'react-router-dom';

const HeaderCard = () => (
    <div className="partner-header-container">
        <Link to={'/partner/TCapital'}>
        <div className="partner-card transparent">
            <div className="partner-card-contianer">
                <div className="partner-card-image">
                    <img className="logo" src={capital} alt="capital Coin" />
                </div>
            </div>
        </div>
        </Link>
        <Link to={'/partner/UCL'}>
        <div className="partner-card transparent">
            <div className="partner-card-contianer">
                <div className="partner-card-image">
                    <img className="logo" src={uclLogo} alt="ucl-logo" />
                </div>
            </div>
        </div>
        </Link>
    </div>
);

export default HeaderCard;
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
        <div className="partner-card">
            <div className="partner-card-contianer">
                <div className="partner-card-image">
                    <img className="logo" src={uclLogo} alt="ucl-logo" />
                </div>
                <div><span className="partner-card-bold-text"> + 40 million Households</span></div>
                <div><span className="partner-card-text">in the main operators in Latin America</span></div>
                <div><span className="partner-card-bold-text"> + 80 million viewers</span></div>
                <div><span className="partner-card-text">on platforms OTT, app & Smart tv</span></div>
            </div>
        </div>
        </Link>
    </div>
);

export default HeaderCard;
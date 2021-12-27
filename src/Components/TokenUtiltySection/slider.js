import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Col, Container, Row } from "react-bootstrap";
import nextImage from "../../img/tokenSection/CaretRight.svg";
import prevImage from "../../img/tokenSection/CaretLeft.svg";
import clsx from "clsx";


const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (<div onClick={onClick}>
        <img
            className={clsx(className, "prev-arrow", "arrow")} src={prevImage}
            alt="prev" />
    </div>)
}

const NextArrow = (props) => {
    const { className, onClick } = props;
    return (<div onClick={onClick}>
        <img
            className={clsx(className, "next-arrow", "arrow")} src={nextImage}
            alt="prev" />
    </div>)
}


const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "center",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
}

const sliderItem = [
    { title: "Commercial transactions", desc: "Users will be able to access certain PREMIUM utilities within the platform with Lively Coin (LVL), such as exclusive content access, enjoy zero commission fees on transactions, P2P trading, creation of private channels, among many others." },
    { title: "Fees", desc: "Minimal fees on purchase/sale transactions of services within the platform that will be automatically converted to LVL.Creation of NFTs on the platform itself, payment in LVL. Fees for the sale of NFTs in proportion to commission" },
    { title: "Reward System", desc: "All viewers are rewarded for participating in the ecosystem through different ways. Lively Coin will be used as a blockchain-based exchange of bonus points." }
]


const TokenUtilitySlider = (props) => (<div>
    <div className="token-section-image"></div>
    <Slider {...settings}>
        {sliderItem.map((item) =>
            <div key={item.title}>
                <Item title={item.title} desc={item.desc} />
            </div>
        )}
    </Slider>
</div>);


const Item = (props) => {
    const { title, desc } = props;
    return (<div className="token-slider-container"><Row className="col-md-8 col-xs-12">
        <div className="slider-title-container">
            <h1 className="light-blue-color">
                {title}
            </h1>
        </div>
        <div>
            <p className="token-slider-item-text">
                {desc}
            </p>
        </div>
    </Row></div>)

}

export default TokenUtilitySlider;
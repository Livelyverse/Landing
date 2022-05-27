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
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
}

const sliderItem = [
    { title: "Access to crowdfunding and Decentralized VC", desc: "In our platform you will be able to invest in startups and companies that are in our ecosystem and which have been previously validated. If you are experienced in startup validations and valuations, you can be a part of our DAO & if you need funds for your startup(Business) you can do it on our platform." },
    { title: "Access to Staking plans", desc: "With our token you can access to different staking plans section within the platform." },
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
    return (<Container className="token-slider-container">
        <Row className="justify-content-md-center">
            <Col lg={8} xs={12}>
            
        <div className="slider-title-container">
            <h1 className="light-blue-color">
                {title}
            </h1>
        </div>
        <div>
            <p className="token-slider-item-text">
                {desc}
            </p>
        </div></Col>
    </Row></Container>)

}

export default TokenUtilitySlider;
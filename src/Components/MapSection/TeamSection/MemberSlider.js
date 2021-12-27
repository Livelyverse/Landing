import clsx from 'clsx';
import React from 'react';
import nextImage from "../../../img/tokenSection/CaretRight.svg";
import prevImage from "../../../img/tokenSection/CaretLeft.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import members from './members';

const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (<div onClick={onClick}>
        <img
            className={clsx(className, "member-prev-arrow", "member-arrow")} src={prevImage}
            alt="prev" />
    </div>)
}

const NextArrow = (props) => {
    const { className, onClick } = props;
    return (<div onClick={onClick}>
        <img
            className={clsx(className, "member-arrow")} src={nextImage}
            alt="prev" />
    </div>)
}

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    className: "center",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: true
            }
        },

        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true,
            }
        },
        {
            breakpoint: 375,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
            }
        },
    ]
}

const MemberSlider = () => (
    <Slider {...settings}>
        {members.map((member) =>
            <MemberCard
                key={member.name}
                name={member.name}
                position={member.position}
                image={member.image}
            />
        )}
    </Slider>
);

const MemberCard = (props) => {
    const { name, position, image } = props;
    return (
        <div className="team-member-card">
            <div>
                <img className='team-member-img' src={image} alt={name} />
            </div>
            <div className='team-member-name'>
                <span className="member-name">{name}</span>
            </div>
            <div className='team-member-position'>
                <span className="member-position">{position}</span>
            </div>
        </div>
    );
}

export default MemberSlider;
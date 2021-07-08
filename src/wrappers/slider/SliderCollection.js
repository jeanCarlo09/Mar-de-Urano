import React from "react";
import Swiper from "react-id-swiper";
import SliderCollectionSingle from "../../components/slider/SliderCollectionSingle";
// import HeroSliderTenSingle from "../../components/hero-slider/HeroSliderTenSingle.js";

const SliderCollection = ({ sliderCollection }) => {

    console.log('sliderCollection', sliderCollection);

    const params = {
        effect: "fade",
        loop: true,
        speed: 1500,
        autoplay: {
            delay: 10000,
            disableOnInteraction: false
        },
        watchSlidesVisibility: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        renderPrevButton: () => (
            <button className="swiper-button-prev ht-swiper-button-nav">
                <i className="pe-7s-angle-left" />
            </button>
        ),
        renderNextButton: () => (
            <button className="swiper-button-next ht-swiper-button-nav">
                <i className="pe-7s-angle-right" />
            </button>
        )
    };
    return (
        <div className="slider-area col-12">
            <div className="slider-active nav-style-1">
                <Swiper {...params}>
                    {sliderCollection &&
                        sliderCollection.map((single, key) => {
                            return (
                                // <HeroSliderTenSingle
                                //     data={single}
                                //     key={key}
                                //     sliderClass="swiper-slide"
                                // />
                                <SliderCollectionSingle key={key} data={single} sliderClass="swiper-slide" />
                            );
                        })}
                </Swiper>
            </div>
        </div>
    );
};

export default SliderCollection;

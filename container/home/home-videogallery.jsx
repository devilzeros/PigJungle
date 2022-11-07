import React, { useState } from 'react';
import { Image, Carousel, Button, Card } from 'react-bootstrap';
import { FaRegIdCard } from 'react-icons/fa';
import Slider from "react-slick";
import Modal from 'react-bootstrap/Modal';


export default function VideoGallery() {
    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 5000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [

            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 659,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const [venVideoGallery, setVenVideoGallery] = useState({ show: false, video: "", })

    const [smShow, setSmShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);



    return (
        <>
            <div id="portfolio" className="our-portfolio section">

                <div className="container">
                    <Slider {...settings}>
                        <div className="item profile">
                            <div className="thumb p-2">
                                <a onClick={() => setSmShow(true)} >
                                    <iframe src="https://www.youtube.com/embed/V4C6V1bO4qQ" alt="" style={{ height: "636pX", width: "100%" }} />
                                    <div className="inner-content">
                                        <h4></h4>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="item profile">
                            <div className="thumb p-2">
                                <a onClick={() => setSmShow(true)} >
                                    <iframe src="https://www.youtube.com/embed/xQBQ10wL17k" alt="" style={{ height: "636pX", width: "100%" }} />
                                    <div className="inner-content">
                                        <h4></h4>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="item profile">
                            <div className="thumb p-2">
                                <a onClick={() => setSmShow(true)} >
                                    <iframe src="https://www.youtube.com/embed/eFsYC8CFIyY" alt="" style={{ height: "636pX", width: "100%" }} />
                                    <div className="inner-content">
                                        <h4></h4>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="item profile">
                            <div className="thumb p-2">
                                <a onClick={() => setSmShow(true)} >
                                    <iframe src="  https://www.youtube.com/embed/4Ru0u3Zn4aA" alt="" style={{ height: "636pX", width: "100%" }} />
                                    <div className="inner-content">
                                        <h4></h4>
                                    </div>

                                </a>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div >
            <Modal
                size="md"
                fullscreen={true}
                centered
                show={venVideoGallery.Show}
                onHide={() => setVenVideoGallery({ ...venVideoGallery, show: false, video: "" })}
                aria-labelledby="example-modal-sizes-title-sm">


            </Modal>
        </>
    );
}

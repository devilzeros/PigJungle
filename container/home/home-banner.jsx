import React, { useState } from 'react';
import { Image, Carousel, Button, Container } from 'react-bootstrap';
import { FaPhoneAlt } from "react-icons/fa";

export default function SlideHome() {
    const [indexCarousel, setIndexCarousel] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndexCarousel(selectedIndex);
    };
    return (
        <>
            <div id="top" className="main-banner">
                <Container>
                    <div className="row">
                        <div className="col-lg-6">
                            <Carousel activeIndex={indexCarousel} onSelect={handleSelect} controls={false} indicators={false} indicatorLabels={[3]}>
                                <Carousel.Item >
                                    <Image src={'images/logo.png'} alt="logo-nav" height={425} className='opacity-0' />
                                    <Carousel.Caption className="item header-text text-start b-0 pb-0">
                                        <h6>Welcome to </h6>
                                        <h3 className='color-ff3d3d'>I.O. Design AndHome</h3>
                                        <h2>ตัดหญ้า <em>ง่ายๆ</em> ไม่เปลือง  <span> แรง!!!</span></h2>
                                        <h3 style={{ color: "black" }}>รถตัดหญ้าบังคับวิทยุ สไตล์ ไอโอดีไซน์</h3>
                                        <div className="down-buttons">
                                            <div className="main-blue-button-hover">
                                            </div>
                                            <div className="call-button"><hr/>
                                                <a href="#"><i className="fa fa-phone"><FaPhoneAlt /></i> 099 -112-4108</a>
                                            </div>
                                        </div>
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <Image src={'images/logo.png'} alt="logo-nav" height={425} className='opacity-0' />
                                    <Carousel.Caption className="item header-text text-start b-0 pb-0">
                                    <h6>innovation </h6>                                      
                                    <h2>นวัตกรรม <em>ใหม่</em>จาก  <span>I.O. Design</span></h2>
                                        <h3 style={{ color: "black" }}>นวัตกรรมรถตัดหญ้านี้มีความคงทน แข็งแรง ประหยัด </h3>

                                        
                                        
                                        <div className="down-buttons">
                                            <div className="main-blue-button-hover">
                                            </div>
                                            <div className="call-button"><hr/>
                                                <a href="#"><i className="fa fa-phone"><FaPhoneAlt /></i> 099-112-4108</a> 
                                            </div>
                                        </div>
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <Image src={'images/logo.png'} alt="logo-nav" height={425} className='opacity-0' />
                                    <Carousel.Caption className="item header-text text-start b-0 pb-0">
                                        <h6>engineer</h6>
                                        <h2>มีวิศวกรที่ <em>เชี่ยวชาญ</em> และ <span>มีคุณภาพมากมาย</span></h2>
                                        <h3 style={{ color: "black" }}> ปลอดภัยต่อผู้ใช้งาน และ มีมาตราฐานในการผลิต </h3>
                                        <div className="down-buttons">
                                            <div className="main-blue-button-hover">

                                            </div>
                                            <div className="call-button"><hr/>
                                                <a href="#"><i className="fa fa-phone"><FaPhoneAlt /></i> 089-513-7365</a>
                                            </div>
                                        </div>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                            <div className="carousel-indicators position-relative d-flex justify-content-start owl-dots">
                                <Button bsPrefix={indexCarousel === 0 ? "owl-dot active" : "owl-dot"} onClick={() => { setIndexCarousel(0) }} aria-label="Slide 1"></Button>
                                <Button bsPrefix={indexCarousel === 1 ? "owl-dot active" : "owl-dot"} onClick={() => { setIndexCarousel(1) }} aria-label="Slide 2"></Button>
                                <Button bsPrefix={indexCarousel === 2 ? "owl-dot active" : "owl-dot"} onClick={() => { setIndexCarousel(2) }} aria-label="Slide 3"></Button>
                            </div>
                        </div>
                    </div>
                </Container>
            </div >
        </>
    );
}

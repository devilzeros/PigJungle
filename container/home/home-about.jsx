import React, { useState } from 'react';
import { Image, Carousel, Button, Card, Row, Col } from 'react-bootstrap';
import { FaRegIdCard } from 'react-icons/fa';
import Slider from "react-slick";

export default function HomeAbout() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    return (
        <>
            <div id="about" className="about-us section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 align-self-center">
                            <div className="left-image">
                                <Image src={'images/about-left-image.png'} alt="Two Girls working together" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="section-heading">
                                <h2>รถตัดหญ้า <em>บังคับวิทยุ </em> <span>ไอโอดีไซน์</span> </h2>
                                <h2 className='mt-5'>รายละเอียดเบื้องต้น</h2>
                                <p className='mt-3'>รีโหมด fsi6x 10 ch
                                    เครื่องยนต์แม็กนั่ม 13 แรงเบนซิน
                                </p>

                                <p>ใบตัด 80 เซนติเมตร (เหล็กแหนบ) ระบบ สตาท เร่ง ดับ ยกใบตัดควบคุมด้วยรีโหมดทั้งหมด</p>
                                <p>ระบบช้าจไฟในตัว มีพัดลมระบายความร้อนไห้กับมอเตอร์ ขนาดตัวรถ 110*110*60</p>
                                <p>ขับเคลื่อน 4 ล้อ น้ำหนักประมาน 205 กิโลกรัม</p>

                                <Row>
                                    <Col lg="4" md="4">
                                        <div className="fact-item">
                                            <div className="count-area-content">
                                                <div className="icon">
                                                    <Image src="./images/service-icon-01.png" alt="" />
                                                </div>
                                                <div className="count-digit">205</div>
                                                <div className="count-title">กิโลกรัม</div>
                                                <p>น้ำหนักประมาน 205 กิโลกรัม ขนาดตัวรถ 110*110*60
                                                    ขับเคลื่อน4ล้อ</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg="4" md="4">
                                        <div className="fact-item">
                                            <div className="count-area-content">
                                                <div className="icon">
                                                    <Image src="./images/service-icon-02.png" alt="" />
                                                </div>
                                                <div className="count-digit"> 13</div>
                                                <div className="count-title">แรงเบนซิน</div>
                                                <p>เครื่องยนต์แม็กนั่ม 13 แรงเบนซิน ระบบ สตาท เร่ง ดับ ยกใบตัดควบคุมด้วยรีโหมดทั้งหมด .</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg="4" md="4">
                                        <div className="fact-item">
                                            <div className="count-area-content">
                                                <div className="icon">
                                                    <Image src="./images/service-icon-03.png" alt="" />
                                                </div>
                                                <div className="count-digit">80</div>
                                                <div className="count-title">เซนติเมตร</div>
                                                <p>ใบตัด 80 cm (เหล็กแหนบ)</p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

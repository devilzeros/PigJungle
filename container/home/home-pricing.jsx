import React, { useState } from 'react';
import { Image, Carousel, Button, Card } from 'react-bootstrap';
import { FaRegIdCard } from 'react-icons/fa';
import Slider from "react-slick";

export default function HomePricing() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    return (
        <>
            <div id="pricing" className="pricing-tables">
                <div className="tables-left-dec">
                    <Image src="./images/tables-left-dec.png" alt=""/>
                </div>
                <div className="tables-right-dec">
                    <Image src="./images/tables-right-dec.png" alt=""/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="section-heading">
                                <h2>Select a suitable <em>plan</em> for your next <span>projects</span></h2>
                                <span>Our Plans</span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="item first-item">
                                <h4>Starter Plan</h4>
                                <em>$160/mo</em>
                                <span>$140</span>
                                <ul>
                                    <li>10 Projects</li>
                                    <li>100 GB space</li>
                                    <li>20 SEO checkups</li>
                                    <li>Basic Support</li>
                                </ul>
                                <div className="main-blue-button-hover">
                                    <a href="#">Get Started</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="item second-item">
                                <h4>Standard Plan</h4>
                                <em>$240/mo</em>
                                <span>$200</span>
                                <ul>
                                    <li>20 Projects</li>
                                    <li>200 GB space</li>
                                    <li>50 SEO checkups</li>
                                    <li>Pro Support</li>
                                </ul>
                                <div className="main-blue-button-hover">
                                    <a href="#">Get it Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="item third-item">
                                <h4>Advanced Plan</h4>
                                <em>$360/mo</em>
                                <span>$280</span>
                                <ul>
                                    <li>30 Projects</li>
                                    <li>300 GB space</li>
                                    <li>100 SEO checkups</li>
                                    <li>Best Support</li>
                                </ul>
                                <div className="main-blue-button-hover">
                                    <a href="#">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

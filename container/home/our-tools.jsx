import React, { useState } from 'react';
import { Image, Carousel, Button, Card } from 'react-bootstrap';
import { FaRegIdCard } from 'react-icons/fa';
import Slider from "react-slick";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Modal from 'react-bootstrap/Modal';

export default function OurTools() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    const [smShow, setSmShow] = useState({show:false,img:""});
    const [lgShow, setLgShow] = useState(false);
    const [viewCatalog, setViewCatalog] = useState({catalog:false,img:""})
    return (
        <>
            <div id="services" className="our-services section">
                <div className="services-right-dec">
                    {/* <Image src="images/services-right-dec.png" alt="Girl in a jacket" height="200" /> */}
                </div>
                <div className="container">
                    <div className="services-left-dec">
                        {/* <Image src="images/services-left-dec.png" alt="Girl in a jacket" height="200" /> */}
                    </div>
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="section-heading">
                                <h2>สินค้า <em>ของเรา</em> มีให้เลือกมากมาย </h2>
                                <h2>เลือกดูสินค้า<span>ด้านล่างได้เลย</span></h2>
                                <span>Catalog</span>
                            </div>
                        </div>
                    </div>

                    <div className="container">

                        <Container>

                            <Row>



                                <Col md={3} sm={4} >
                                    <div className='owl-services'>

                                        <a onClick={() => setViewCatalog({...viewCatalog,catalog:true,img:"./images/LINE_ALBUM_220603_3.jpg"})}>
                                            <Image src="./images/LINE_ALBUM_220603_3.jpg" alt="" />
                                        </a>

                                        <h5 className='color-ff3d3d'>Catalog 1</h5>
                                       

                                    </div>

                                </Col>
                                <Col md={3} sm={4} >
                                    <div className='owl-services'>
                                        <a onClick={() => setViewCatalog({...viewCatalog,catalog:true,img:"./images/LINE_ALBUM_220603_2.jpg"})}>
                                            <Image src="./images/LINE_ALBUM_220603_2.jpg" alt="" />
                                        </a>
                                        <h5 className='color-ff3d3d'>Catalog 2</h5>
                                        

                                    </div>

                                </Col>

                                <Col md={3} sm={4}  >
                                    <div className='owl-services'>
                                        <a onClick={() => setViewCatalog({...viewCatalog,catalog:true,img:"./images/LINE_ALBUM_220603_1.jpg"})}>
                                            <Image src="./images/LINE_ALBUM_220603_1.jpg" alt="" />
                                        </a>
                                        <h5 className='color-ff3d3d'>Catalog 3</h5>

                                        

                                    </div>
                                </Col>

                                <Col md={3} sm={4} >
                                    <div className='owl-services'>
                                        <a onClick={() => setViewCatalog({...viewCatalog,catalog:true,img:"./images/LINE_ALBUM_220603_0.jpg"})}>
                                            <Image src="./images/LINE_ALBUM_220603_0.jpg" alt="" />
                                        </a>
                                        <h5 className='color-ff3d3d'>Catalog 4</h5>
                                        

                                    </div>
                                </Col>


                            </Row>
                        </Container>
                        <Modal
                            size="md"
                            show={viewCatalog.catalog}
                            onHide={() => setViewCatalog({...viewCatalog,catalog:false,img:""})}
                            aria-labelledby="example-modal-sizes-title-sm"
                        >                            <Image src={viewCatalog.img} alt="" />
                           
                        </Modal>
    

                    </div>
                </div>
            </div>
        </>
    );
}

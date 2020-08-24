import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import waterImg from '../assets/water.jpg';
import tigerImg from '../assets/tiger.jpg';

export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-110"
                        src={waterImg}
                        alt="Water"
                    />
                    <Carousel.Caption>
                        <h3>Water Images</h3>
                        <p>Drinking water is a clear liquid without taste,
                        color and smell, which is intended for safe consumption, cooking and drinks.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={tigerImg}
                        alt="Tiger"
                    />
                    <Carousel.Caption>
                        <h3>Tiger Images</h3>
                        <p>The tiger is the largest wild cat with a massive, muscular flexible body.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}

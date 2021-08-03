import React, { Component } from 'react'
import Header from '../layout/header';
import Slider from './slider';
import Features from './features';
import Footer from '../layout/footer';

export default class index extends Component {
    render() {
        return (
            <div>
                <Header />
                <Slider />
                <Features />
                <Footer/>
            </div>
        )
    }
}

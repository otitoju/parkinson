import React from 'react'
import { Link, BrowserRouter } from 'react-router-dom';

export default function slider() {
    return (
        <div>
            <div class="hero-slider">
                <div class="slider-item slide1" style={{backgroundImage:`url(images/slider/slider-bg-1.jpg)`}}>
                    <div class="container">
                    <div class="row">
                        <div class="col-12">
         
                        <div class="content style text-center">
                            <h2 class="text-white text-bold mb-2" data-animation-in="slideInLeft">Our Best Parkinson Surgeons</h2>
                            <p class="tag-text mb-4" data-animation-in="slideInRight">Parkinson's disease is a progressive nervous system disorder that affects movement. Symptoms start gradually, sometimes starting with a barely noticeable tremor in just one hand. Tremors are common, but the disorder also commonly causes stiffness or slowing of movement.</p>
                            <BrowserRouter>
                            <a href='/login'  class="btn btn-main btn-white" data-animation-in="slideInLeft" data-duration-in="1.2">explore</a>
                            </BrowserRouter>
                            
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            
                </div>
        </div>
    )
}

import React from 'react'

export default function header() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark">
                <div class="container">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarLinks" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                
                    <div class="collapse navbar-collapse" id="navbarLinks">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <div class="col-xl-4 col-lg-3">
                            <div class="logo">
                            <a href="index.html">
                                <img loading="lazy" class="img-fluid" src="images/logo.png" alt="logo"/>
                            </a>
                            </div>
                        </div>
                        </li>
                        <li class="nav-item active">
                        <a class="nav-link" href="index.html">Home</a>
                        </li>
                        <li class="nav-item @@about">
                        <a class="nav-link" href="about.html">About</a>
                        </li>
                        <li class="nav-item @@service">
                        <a class="nav-link" href="service.html">Service</a>
                        </li>
                        
                        <li class="nav-item @@appointment">
                        <a class="nav-link" href="appointment.html">Appointment</a>
                        </li>
                        
                        <li class="nav-item @@contact">
                        <a class="nav-link" href="contact.html">Contact</a>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
        </div>
    )
}

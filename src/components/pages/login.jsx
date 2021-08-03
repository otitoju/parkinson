import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class login extends Component {
    render() {
        return (
            <div>
                <div class="container my-5">
                    <div class="row justify-content-center">
                    <h3 class=" text-center">Sign In with your login details</h3>
                    
                    </div>
                    <hr class="hr-class"/>
                    <div class="row justify-content-center">
                    <div class="col-lg-10 col-md-10">
                    <div class="card">
                        <div class="card-body">
                        <div class="form-group row">
                        <div class="col-sm-12">
                            <label>Email:</label>
                            <input type="email" class="form-control" placeholder="Your email" />

                            <label>Password:</label>
                            <input type="password" class="form-control" placeholder="Password"/>
                        </div>
                        </div>
                    
                        
                        <hr/>
                        <div class="text-center mb-4">
                            <button type="button" class="btn btn-danger btn-block z-depth-2" 
                            id="butt">Log in <i class="fa fa-sign-in ml-1"></i></button>
                        </div>
                        <div className="form-field">
                            <a href='/register' class=" text-center">
                                <label>Don't have an account yet? Signup here.</label>
                            </a>
                            
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'

export default class register extends Component {
    render() {
        return (
            <div>
                <div class="container my-5">
                    <div class="row justify-content-center">
                    <h3 class=" text-center">Register</h3>
                    
                    </div>
                    <hr class="hr-class"/>
                    <div class="row justify-content-center">
                    <div class="col-lg-10 col-md-10">
                    <div class="card">
                        <div class="card-body">
                        <div class="form-group row">
                        <div class="col-sm-12">
                            <label>Fullname:</label>
                            <input type="text" class="form-control"  />

                            <label>Phone:</label>
                            <input type="phone" class="form-control" />
                        </div>
                        <div class="col-sm-12">
                            <label>Email:</label>
                            <input type="email" class="form-control"/>

                            <label>Password:</label>
                            <input type="password" class="form-control" />
                        </div>
                        </div>
                    
                        
                        <hr/>
                        <div class="text-center mb-4">
                            <button type="button" class="btn btn-danger btn-block z-depth-2" 
                            id="butt">Signup <i class="fa fa-sign-in ml-1"></i></button>
                        </div>

                        <div className="form-field">
                            <a href='/login' class=" text-center">
                                <label>Already have an account.</label>
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

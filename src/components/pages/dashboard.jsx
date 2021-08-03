import React, { Component } from 'react'
import Header from '../layout/header';
import Footer from '../layout/footer';

export default class dashboard extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div class="container my-5">
        
        <div class="row justify-content-center">
          <div class="col-lg-10 col-md-10">
          <div class="card">
          <div class="row justify-content-center">
        <p class="h4 mb-4"><strong>Answer the following Questions: </strong></p>
        </div>
        <hr class="hr-class"/>
            <div class="card-body">
                
                <label>Tremor? A tremor, or shaking, usually begins in a limb, often your hand or fingers. You may rub your thumb and forefinger back and forth, known as a pill-rolling tremor. Your hand may tremble when it's at rest.</label>
                <select class="form-control form-select" id="sel1" >
                    <option>--Select your option--</option>
                    <option >Yes</option>
                    <option >No</option>
                </select>

                <label>Slowed movement (bradykinesia)? Over time, Parkinson's disease may slow your movement, making simple tasks difficult and time-consuming. Your steps may become shorter when you walk. It may be difficult to get out of a chair. You may drag your feet as you try to walk.</label>
                <select class="form-control" id="sel1" >
                    <option>--Select your option--</option>
                    <option >Yes</option>
                    <option >No</option>
                </select>
                
                <label>Rigid muscles? Muscle stiffness may occur in any part of your body. The stiff muscles can be painful and limit your range of motion.</label>
                <select class="form-control" id="sel1">
                    <option>--Select your option--</option>
                    <option >Yes</option>
                    <option >No</option>
                </select>
                
                <label>Impaired posture and balance? Your posture may become stooped, or you may have balance problems as a result of Parkinson's disease.</label>
                <select class="form-control" id="sel1" >
                    <option>--Select your option--</option>
                    <option >Yes</option>
                    <option >No</option>
                </select>

                <label>Loss of automatic movements? You may have a decreased ability to perform unconscious movements, including blinking, smiling or swinging your arms when you walk.</label>
                <select class="form-control" id="sel1" >
                    <option>--Select your option--</option>
                    <option >Yes</option>
                    <option >No</option>
                </select>

                <label>Speech changes? You may speak softly, quickly, slur or hesitate before talking. Your speech may be more of a monotone rather than have the usual inflections.</label>
                <select class="form-control" id="sel1" >
                    <option>--Select your option--</option>
                    <option >Yes</option>
                    <option >No</option>
                </select>

                <label>Writing changes? It may become hard to write, and your writing may appear small.</label>
                <select class="form-control" id="sel1" >
                    <option>--Select your option--</option>
                    <option >Yes</option>
                    <option >No</option>
                </select>
            <hr/>
            <div class="text-center">
            <button id="myBtn" class="btn btn-danger btn-block my-4" >Result</button>

            {/* <div id="myModal" class="modal">
                <div class="modal-content">
                    <span class="close">&times;</span>
            <h1>Dear {this.state.name} with id {this.state.id} and email: {this.state.email}, your test result is...</h1>
                    <h3>{this.state.result}</h3>
                </div>
            </div> */}
        
            </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      <Footer/>
            </div>
        )
    }
}

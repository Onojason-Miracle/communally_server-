import {React, useState} from "react";
import Navbar from "./Navbar";

function Postevent(){
    return(
        <div>
            <Navbar/>
        <div className="crp-wrapper">
          <div className="cp-wrapper-inner">
            <h5 className="crp-header">POST</h5>
           
            <form className="crp-form">
            <p className="create-a-post">Create a Post:</p>
                <p className="input-form-p">
                    <input type="text" placeholder="title" className="crp-form-input"/>
                </p>

                <p className="input-form-p">
                    <input type="text" placeholder="tag" className="crp-form-input"/>
                </p>

                <p className="input-form-p">
                    <input type="text" placeholder="Location" className="crp-form-input"/>
                </p>

                <p>
                    <label className="form-label">Date: </label>
                    <input type="date" placeholder="date" className="crp-form-input"/>
                </p>

                <p>
                <label className="form-label">Time: </label>
                    <input type="time" placeholder="time" className="crp-form-input"/>
                </p>

                <p >
                <label className="form-label">Description: </label>
                   <textarea className="crp-form-textarea "></textarea>
                </p>

                <p >
                    <label className="form-label">Event Image: </label>
                    <input type="file" className="crp-form-file form-control"/>
                </p>

                <p className="crp-btn-p">
                    <button className="crp-btn">Submit</button>
                </p>
            </form>
            </div>  
        </div>
        </div>
    )
}

export default Postevent
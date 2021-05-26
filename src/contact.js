import React from 'react'
import contacts from './images/callcenter.jpg'

function Contact(){
    return <div>
        <div className="container">
            <h1 className="titleh1">Contact</h1>
            <div className="row">
                <div className="col-md-8">
                    <img src={contacts} alt="Contact Us" />
                </div>
                <div className="col-md-4">
                    <p style={{fontSize:"25px"}}>Know more about Roads contact us!</p>
                    <span style={{fontSize:"20px",fontWeight:"600"}}>Email:</span><a href="mailto:blankemail@abc.com">infyteam@gmail.com</a><br />
                    <span style={{fontSize:"16px",fontWeight:"600"}}>Call Us:</span><a href="tel:1234567890">9878674235</a>
                </div>
            </div>
        </div>
         
    </div>
}
export default Contact
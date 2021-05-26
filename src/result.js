import React from 'react';
function Result (){
    return <div>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="titleh1">Through Roads</h1>
                </div>
            </div>
            <div className="row" style={{width:"100%", marginTop:"15px"}}>
                <div className="col-md-4">
                    <p>
                        <span className="spantitle">Bus Number:</span>
                        <span className="spanless">222</span>
                    </p>
                </div>
                <div className="col-md-4">
                    <p>
                        <span className="spantitle">Bus Registration Number:</span>
                        <span className="spanless">AP31AA1234</span>
                    </p>
                </div>
                <div className="col-md-4">
                    <p>
                        <span className="spantitle">Source:</span>
                        <span className="spanless">Vizag</span>
                    </p>
                </div>
            </div>
            <div className="row" style={{marginTop:"15px"}}>
                <div className="col-md-4">
                    <p>
                        <span className="spantitle">Destination:</span>
                        <span className="spanless">Anits</span>
                    </p>
                </div>
                <div className="col-md-4">
                    <p>
                        <span className="spantitle">Starting Time:</span>
                        <span className="spanless">7:45</span>
                    </p>
                </div>
                <div className="col-md-4">
                    <p>
                        <span className="spantitle">Destination Time:</span>
                        <span className="spanless">8:45</span>
                    </p>
                </div>
            </div>
            <div className="row" style={{marginTop:"15px"}}>
                <div className="col-md-4">
                    <p>
                        <span className="spantitle">Price:</span>
                        <span className="spanless" >₹ 45/-</span>
                    </p>
                </div>
                <div className="col-md-4">
                    <p>
                        <span className="spantitle">Stops:</span>
                        <span className="spanless">Maddilapalem, Venkojipalem,<br /> Carshed, Anandapuram</span>
                    </p>
                </div>
                </div>
                <div className="row" style={{marginTop:"15px"}}>
                    <div className="col-md-12">
                        <p>
                            <span className="spantitle">Maps:</span>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3796.2215656810454!2d83.42328881484525!3d17.9218168918884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39581b73ffffff%3A0xd04b9046faa4565f!2sAnil%20Neerukonda%20Institute%20of%20Technology%20%26%20Sciences!5e0!3m2!1sen!2sin!4v1620545649382!5m2!1sen!2sin" width="100%" height="450"></iframe>
                            
                        </p>
                    </div>
                </div> 
        </div>
        </div>
}
export default Result;
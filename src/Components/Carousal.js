import React, { Component } from 'react';

export default props => (

    <div>

<div>
   
  <div className="slideshow-container">
    {/* Full-width images with number and caption text */}
    <div className="mySlides fade">
      <div className="numbertext">1 / 3</div>
      <img src="assets/images/image1.png" />
      <div className="text">Caption Text</div>
    </div>
    <div className="mySlides fade">
      <div className="numbertext">2 / 3</div>
      <img src="assets/images/image2.png" style={{width: '100%'}} />
      <div className="text">Caption Two</div>
    </div>
    <div className="mySlides fade">
      <div className="numbertext">3 / 3</div>
      <img src="assets/images/image3.png" style={{width: '100%'}} />
      <div className="text">Caption Three</div>
    </div>
    {/* Next and previous buttons */}
    <a className="prev" onclick="plusSlides(-1)">❮</a>
    <a className="next" onclick="plusSlides(1)">❯</a>
  </div>
  <br />
  {/* The dots/circles */}
  <div style={{textAlign: 'center'}}>
    <span className="dot" onclick="currentSlide(1)" />
    <span className="dot" onclick="currentSlide(2)" />
    <span className="dot" onclick="currentSlide(3)" />
  </div>
</div>



    </div>




)
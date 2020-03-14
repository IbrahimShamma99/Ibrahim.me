import React from 'react';
import layers from "../../img/layers.png";
import cogwheel from "../../img/cogwheel.png";
import pen from "../../img/pen.png";
import browser from "../../img/browser.png";

const attributes = (props)=>(
    <div className="row mt-4">
    <div
        className={
            "col-6 col-sm-6 col-md-3 " + props.fadeInLeft
        }>
        <img src={layers} alt=""/>
        <h4>Responsive</h4>
    </div>
    <div
        className={
            "col-6 col-sm-6 col-md-3 " + props.fadeInLeft
        }>
        <img src={pen} alt=""/>
        <h4>Test-Driven</h4>
    </div>
    <div
        className={
            "col-6 col-sm-6 col-md-3 " + props.fadeInRight
        }>
        <img src={cogwheel} alt=""/>
        <h4>Performance</h4>
    </div>
    <div
        className={
            "col-6 col-sm-6 col-md-3 " + props.fadeInRight
        }>
        <img src={browser} alt=""/>
        <h4>Agile</h4>
    </div>
</div>

);

export default attributes;
import React from 'react';

const project = (props)=>(							<div
    className={
        "testbg col-12 col-sm-12 col-md-4 " +
        props.fadeIn
    }>
    <div className="overlay">
        <div className="text">
            <h2>{props.name}</h2>
        </div>
        <div>
            <button
                id="vmarine-button"
                className="project-button"
                onClick={() => {
                    var modalBG = document.getElementById(
                        "gallery-card"
                    );
                    var marineModal = document.getElementById(
                        "vmarine"
                    );
                    modalBG.style.display = "block";
                    marineModal.style.display =
                        "block";
                }}>
                Learn More
            </button>
        </div>
    </div>
</div>);

export default project;
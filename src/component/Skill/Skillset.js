import React from 'react';
import "./Skillset.css"


const Set = (props) =>(    <form >
    <h1 className="home-style navbar-brand 
    font-weight-bold">stack</h1>
<div className="progress mb-3">
<div
    className="progress-bar bg-danger"
    role="progressbar"
    style={{ width: 85 + "%" }}
    aria-valuemin="0"
    aria-valuemax="100">
    NodeJS
</div>
</div>
<div className="progress mb-3">
<div
    className="progress-bar bg-danger"
    role="progressbar"
    style={{ width: 75 + "%" }}
    aria-valuemin="0"
    aria-valuemax="100">
    ReactJS
</div>
</div>

<div className="progress mb-3">
<div
    className="progress-bar bg-danger"
    role="progressbar"
    style={{ width: 85 + "%" }}
    aria-valuemin="0"
    aria-valuemax="100">
    Express
</div>
</div>

<div className="progress mb-3">
<div
    className="progress-bar bg-danger"
    role="progressbar"
    style={{ width: 75 + "%" }}
    aria-valuemin="0"
    aria-valuemax="100">
    MongoDB
</div>
</div>
<div className="progress mb-3">
<div
    className="progress-bar bg-danger"
    role="progressbar"
    style={{ width: 60 + "%" }}
    aria-valuemin="0"
    aria-valuemax="100">
    Redux
</div>
</div>

</form>)








const skillset = (props)=>(
    <div className="container">
    
    <Set/>

    <form >
    <h1>Languages</h1>
    <div className="progress mb-3">
        <div
            className="progress-bar bg-warning"
            role="progressbar"
            style={{ width: 80 + "%" }}
            aria-valuemin="0"
            aria-valuemax="100">
            Javascript
        </div>
    </div>
    <div className="progress mb-3">
        <div
            className="progress-bar bg-warning"
            role="progressbar"
            style={{ width: 70 + "%" }}
            aria-valuemin="0"
            aria-valuemax="100">
            TypeScript
        </div>
    </div>

    <div className="progress mb-3">
        <div
            className="progress-bar bg-warning"
            role="progressbar"
            style={{ width: 70 + "%" }}
            aria-valuemin="0"
            aria-valuemax="100">
            Python
        </div>
    </div>
    </form>
    <form>
        <h1>UI</h1>
    <div className="progress mb-3">
        <div
            className="progress-bar fill-60-bar"
            role="progressbar"
            style={{ width: 60 + "%" }}
            aria-valuemin="0"
            aria-valuemax="100">
            BootStrap
        </div>
        </div>

        <div className="progress mb-3">
        <div
            className="progress-bar fill-60-bar"
            role="progressbar"
            style={{ width: 60 + "%" }}
            aria-valuemin="0"
            aria-valuemax="100">
            HTML
        </div>
        </div>

        <div className="progress mb-3">
        <div
            className="progress-bar fill-60-bar"
            role="progressbar"
            style={{ width: 60 + "%" }}
            aria-valuemin="0"
            aria-valuemax="100">
            CSS
        </div>
        </div>



        </form>
    <div className="progress mb-3">
        <div
            className="progress-bar fill-60-bar"
            role="progressbar"
            style={{ width: 70 + "%" }}
            aria-valuemin="0"
            aria-valuemax="100">
            Software Design patterns
        </div>
    </div>

<div className="progress mb-3">
    <div
        className="progress-bar fill-60-bar"
        role="progressbar"
        style={{ width: 50 + "%" }}
        aria-valuemin="0"
        aria-valuemax="100">
        Software Architecture
    </div>
</div>


    <div className="progress mb-3">
        <div
            className="progress-bar bg-success"
            role="progressbar"
            style={{ width: 65 + "%" }}
            aria-valuemin="0"
            aria-valuemax="100">
            Machine Learning
        </div>
    </div>

    <div className="progress mb-3">
        <div
            className="progress-bar bg-success"
            role="progressbar"
            style={{ width: 60 + "%" }}
            aria-valuemin="0"
            aria-valuemax="100">
            Docker
        </div>
    </div>
    <div className="progress mb-3">
        <div
            className="progress-bar bg-success"
            role="progressbar"
            style={{ width: 70 + "%" }}
            aria-valuemin="0"
            aria-valuemax="100">
            Linux
        </div>
    </div>
</div>
)
export default skillset;
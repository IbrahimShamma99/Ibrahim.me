import React from 'react';
import "./Skillset.css"


const Skill = (props)=>(
    <div className="progress mb-2 ml-2">
    <div
    class='mw-100'
    className={props.styling}
    role="progressbar"
    style={{ width: props.progress + "%"}}
    aria-valuemin="0"
    aria-valuemax="100">
    {props.skill}
    </div>
    </div>
);

const skillset = (props)=>(

    <div class="container-fluid w-100">

        <div class="row justify-content-md-center">
            <div class="col width:100%" align="center">
                <h1 className="home-style navbar-brand font-weight-bold">Stack</h1>
                <Skill styling="progress-bar bg-danger" skill="NodeJS" progress="85" />
                <Skill styling="progress-bar bg-danger" skill="ReactJS" progress="75"/>
                <Skill styling="progress-bar bg-danger" skill="Express" progress="85"/>
                <Skill styling="progress-bar bg-danger" skill="MongoDB" progress="80"/>
                <Skill styling="progress-bar bg-danger" skill="Redux" progress="65"/>
            </div>

            <div class="col" align="center">
                <h1 className="home-style navbar-brand 
                font-weight-bold">Languages</h1>
                <Skill styling="progress-bar bg-warning" skill="Javascript" progress="80"/>
                <Skill styling="progress-bar bg-warning" skill="Typescript" progress="70"/>
                <Skill styling="progress-bar bg-warning" skill="Python" progress="75"/>
                <Skill styling="progress-bar bg-warning" skill="C++" progress="60"/>
                <Skill styling="progress-bar bg-warning" skill="Rust" progress="50"/>
            </div>
            <div class="col" align="center">
                <h1 className="home-style navbar-brand 
                    font-weight-bold">User interface</h1>
                <Skill styling="progress-bar" skill="BootStrap" progress="80"/>
                <Skill styling="progress-bar" skill="HTML" progress="75"/>
                <Skill styling="progress-bar" skill="CSS" progress="70"/>
                <Skill styling="progress-bar" skill="React Material Ui" progress="75"/>
                <Skill styling="progress-bar" skill="Materialize" progress="70"/>
            </div>
        </div>
        <div class="w-100"></div>

        <div class="row justify-content-md-center">
            <div class="col " >
                <h1  className="home-style navbar-brand font-weight-bold">programming concepts</h1>
                <Skill styling="progress-bar bg-info" skill="OOP" progress="80"/>
                <Skill styling="progress-bar bg-info" skill="Software Design patterns" progress="70"/>
                <Skill styling="progress-bar bg-info" skill="Software Architecture" progress="60"/>
            </div>
    
            <div class="col">
                <h1  className="home-style navbar-brand font-weight-bold">Other skills</h1>
                <Skill styling="progress-bar bg-success" skill="Machine Learning" progress="65"/>
                <Skill styling="progress-bar bg-success" skill="Docker" progress="60"/>
                <Skill styling="progress-bar bg-success" skill="Linux" progress="70"/>
            </div>
        </div>
    </div>
);
export default skillset;
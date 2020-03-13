import React from 'react';
import "./Skillset.css"


const Skill = (props)=>(
    <div className="progress mb-3">
    <div
    className={props.styling}
    role="progressbar"
    style={{ width: props.progress + "%" }}
    aria-valuemin="0"
    aria-valuemax="100">
    {props.skill}
    </div>
    </div>
);

const skillset = (props)=>(
    <div className="container">
    
    <form >
        <h1 className="home-style navbar-brand 
        font-weight-bold">Stack</h1>
        <Skill styling="progress-bar bg-danger" skill="NodeJS" progress="85" />
        <Skill styling="progress-bar bg-danger" skill="ReactJS" progress="75"/>
        <Skill styling="progress-bar bg-danger" skill="Express" progress="85"/>
        <Skill styling="progress-bar bg-danger" skill="MongoDB" progress="80"/>
        <Skill styling="progress-bar bg-danger" skill="Redux" progress="65"/>
    </form>

    <form>
        <h1 className="home-style navbar-brand 
        font-weight-bold">Languages</h1>
        <Skill styling="progress-bar bg-warning" skill="Javascript" progress="80"/>
        <Skill styling="progress-bar bg-warning" skill="Typescript" progress="70"/>
        <Skill styling="progress-bar bg-warning" skill="Python" progress="75"/>
    </form>

    <form>
        <h1 className="home-style navbar-brand 
        font-weight-bold">UI</h1>
        <Skill styling="progress-bar bg-info" skill="BootStrap" progress="80"/>
        <Skill styling="progress-bar bg-info" skill="HTML" progress="75"/>
        <Skill styling="progress-bar bg-info" skill="CSS" progress="70"/>
    </form>

    <form>
        <h1  className="home-style navbar-brand 
        font-weight-bold">Programming concepts</h1>
        <Skill styling="progress-bar bg-info" skill="OOP" progress="80"/>
        <Skill styling="progress-bar bg-info" skill="Software Design patterns" progress="70"/>
        <Skill styling="progress-bar bg-info" skill="Software Architecture" progress="60"/>
    </form>

    <form>
        <h1  className="home-style navbar-brand font-weight-bold">Other skills</h1>
        <Skill styling="progress-bar bg-success" skill="Machine Learning" progress="65"/>
        <Skill styling="progress-bar bg-success" skill="Docker" progress="60"/>
        <Skill styling="progress-bar bg-success" skill="Linux" progress="70"/>
    </form>
</div>
)
export default skillset;
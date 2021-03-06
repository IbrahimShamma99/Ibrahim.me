import React from 'react';
import "./Skillset.css"

//NOTE LOGOS
import NodeLogo from '../../img/node.svg';
import ReactLogo from "../../img/react.svg";
import BootStrapLogo from "../../img/bootstrap.svg";
import MngoLogo from '../../img/mongodb-icon.svg';
import LnxLogo from '../../img/linux-icon.svg';
import DkrLogo from '../../img/docker-icon.svg';
import PyLogo from '../../img/python-brands.svg';
import ExLogo from '../../img/expressjs-icon.svg';
import RdxLogo from '../../img/redux-icon.svg';
import JsLogo from '../../img/js-square-brands.svg';
import TfLogo from '../../img/tensorflow-icon.svg';
import TsLogo from '../../img/typescriptlang-icon.svg';
import RstLogo from '../../img/rust-lang-icon.svg';
import CppLogo from '../../img/cpp.svg';

const Skill = (props)=>(
    <div className="progress mb-2 ml-2">
        <div
            class='mw-100'
            className={props.styling}
            role="progressbar"
            style={{ width: props.progress + "%"}}
            aria-valuemin="0"
            aria-valuemax="100">
            <div>{props.skill} <a><img src={props.logo}>{props.glph}</img></a></div>
        </div>
    </div>
);

const skillset = (props)=>(

    <div class="container-fluid w-100">

        <div class="row justify-content-md-center">
            <div class="col width:100%" align="center">
                <h1 className="home-style navbar-brand font-weight-bold">Stack</h1>
                <Skill logo={NodeLogo} styling="progress-bar bg-danger" skill="NodeJS" progress="85" />
                <Skill logo={ReactLogo} styling="progress-bar bg-danger" skill="ReactJS" progress="75"/>
                <Skill logo={ExLogo} styling="progress-bar bg-danger" skill="Express" progress="85"/>
                <Skill logo={MngoLogo} styling="progress-bar bg-danger" skill="MongoDB" progress="80"/>
                <Skill logo={RdxLogo} styling="progress-bar bg-danger" skill="Redux" progress="65"/>
            </div>

            <div class="col" align="center">
                <h1 className="home-style navbar-brand 
                font-weight-bold">Languages</h1>
                <Skill logo={JsLogo} styling="progress-bar bg-warning" skill="Javascript" progress="80"/>
                <Skill logo={TsLogo} styling="progress-bar bg-warning" skill="Typescript" progress="70"/>
                <Skill logo={PyLogo} styling="progress-bar bg-warning" skill="Python" progress="75"/>
                <Skill logo={CppLogo} styling="progress-bar bg-warning" skill="C++" progress="60"/>
                <Skill logo={RstLogo} styling="progress-bar bg-warning" skill="Rust" progress="50"/>
            </div>
            <div class="col" align="center">
                <h1 className="home-style navbar-brand 
                    font-weight-bold">User interface</h1>
                <Skill logo={BootStrapLogo} styling="progress-bar" skill="BootStrap" progress="80"/>
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
                <Skill logo={TfLogo} styling="progress-bar bg-success" skill="Machine Learning" progress="65"/>
                <Skill logo={DkrLogo} styling="progress-bar bg-success" skill="Docker" progress="60"/>
                <Skill logo={LnxLogo} styling="progress-bar bg-success" skill="Linux" progress="70"/>
            </div>
        </div>
    </div>
);
export default skillset;
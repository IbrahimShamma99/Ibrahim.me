import React from "react";
import Avicenna from "../img/avicenna.png";
import BlogPost from "../img/BlogPost.png";

import todo from "../img/todolist.png";
import PropTypes from "prop-types";

import Project from './project';

export default class Projects extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div id="my-projects" className="container-fluid bg-light mt-5">
					<div className=" project-container container bg-light pb-5">
						<h1
							id="projects"
							className={"text-center " + this.props.fadeInRight}>
							Projects
						</h1>
						<div className="row my-5">
						<Project name="Avicenna" fadeIn={this.props.fadeIn}/>
							<div
								className={
									"aguabg col-12 col-sm-12 col-md-4 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>Blog Post</h2>
									</div>
									<div>
										<button
											id="agua-button"
											className="project-button"
											onClick={() => {
												var modalBG = document.getElementById(
													"gallery-card"
												);
												var aguaModal = document.getElementById(
													"agualuz"
												);
												modalBG.style.display = "block";
												aguaModal.style.display =
													"block";
											}}>
											Learn More
										</button>
									</div>
								</div>
							</div>
							<div
								className={
									"todobg col-12 col-sm-12 col-md-4 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>To Do List</h2>
									</div>
									<div>
										<button
											id="todo-button"
											className="project-button"
											onClick={() => {
												var modalBG = document.getElementById(
													"gallery-card"
												);
												var todoModal = document.getElementById(
													"todolist"
												);
												modalBG.style.display = "block";
												todoModal.style.display =
													"block";
											}}>
											Learn More
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/*hidden modals*/}
				<div id="gallery-card">
					<div id="vmarine" className="modal-card">
						<div className="visual">
							<img src={Avicenna} alt=""/>
						</div>
						<div className="modal-info">
							<h2>Avicenna</h2>
							<div className="modal-description">
								<ul>
									<li>
										Avicenna Vision is a web-application owned by
										JoVision that helps Doctors to analyze medical 
										images
									</li>
									<li>
									Designed with HTML5, CSS3, ReactJS and NodeJS.
									</li>
								</ul>
							</div>
							<div className="modal-bottom">
								<p
									className="close-icon"
									style={{
										textAlign: "right",
										fontWeight: 900,
										fontSize: 2 + "rem",
										cursor: "pointer"
									}}
									onClick={() => {
										var modalBG = document.getElementById(
											"gallery-card"
										);
										var marineModal = document.getElementById(
											"vmarine"
										);
										modalBG.style.display = "none";
										marineModal.style.display = "none";
									}}>
									&#10005;
								</p>
							</div>
						</div>
					</div>

					<div id="agualuz" className="modal-card">
						<div className="visual">
							<img src={BlogPost} alt=""/>
						</div>
						<div className="modal-info">
							<h2>BlogPost</h2>
							<div className="modal-description">
								<ul>
									<li>
										Prototype website to write my own personal 
										blogs
									</li>
									<li>
										Developed with HTML5, CSS3, Bootstrap,
										Django.
									</li>
								</ul>
							</div>
							<div className="modal-bottom">
								<a
									href="#"
									target="_blank">
								</a>
								<p
									className="close-icon"
									style={{
										textAlign: "right",
										fontWeight: 900,
										fontSize: 2 + "rem",
										cursor: "pointer"
									}}
									onClick={() => {
										var modalBG = document.getElementById(
											"gallery-card"
										);
										var aguaModal = document.getElementById(
											"agualuz"
										);
										modalBG.style.display = "none";
										aguaModal.style.display = "none";
									}}>
									&#10005;
								</p>
							</div>
						</div>
					</div>

					<div id="todolist" className="modal-card">
						<div className="visual">
							<img src={todo} alt=""/>
						</div>
						<div className="modal-info">
							<h2>To-Do List</h2>
							<div className="modal-description">
								<ul>
									<li>
										A to-do list to keep track of goals.
									</li>
									<li>
										Developed with HTML5, CSS3, Bootstrap,
										Webpack, and ReactJS.
									</li>
								</ul>
							</div>
							<div className="modal-bottom">
								<a href="#" target="_blank">
								</a>
								<p
									className="close-icon"
									style={{
										textAlign: "right",
										fontWeight: 900,
										fontSize: 2 + "rem",
										cursor: "pointer"
									}}
									onClick={() => {
										var modalBG = document.getElementById(
											"gallery-card"
										);
										var todoModal = document.getElementById(
											"todolist"
										);
										modalBG.style.display = "none";
										todoModal.style.display = "none";
									}}>
									&#10005;
								</p>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

Projects.propTypes = {
	bounceIn: PropTypes.string,
	fadeInLeft: PropTypes.string,
	fadeInRight: PropTypes.string,
	fadeIn: PropTypes.string,
	tada: PropTypes.string
};

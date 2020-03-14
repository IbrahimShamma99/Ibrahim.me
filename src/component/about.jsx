import React from "react";
import PropTypes from "prop-types";
import Skillset from './Skill/Skillset';
import Attributes from './Attributes/Attributes';
import Brief from './Brief/Brief';

export default class About extends React.Component {
	render() {
		return (
			<div id="about-container" 
				className="content-containers container text-center mt-3">
				<h1 id="about" className={this.props.bounceLeft}>
					About</h1>				
				<Attributes/>
		<Brief fadeIn={this.props.fadeIn} />
		<div
		className={this.props.tada}>
		<Skillset/>
		</div>

			</div>	
		);
	}
};

About.propTypes = {
	bounceLeft: PropTypes.string,
	fadeInLeft: PropTypes.string,
	fadeInRight: PropTypes.string,
	fadeIn: PropTypes.string,
	tada: PropTypes.string
};

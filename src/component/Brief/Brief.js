import React from 'react';
import myImage from "../../img/myImage.png";

const brief = (props)=>(
    <div className="row" style={{ marginTop: 7 + "rem" }}>
    <div className="col-12 hidden">
        <img
            className={"img-fluid " + props.fadeIn}
            src={myImage}
            alt=""
            style={{
                borderRadius: 50 + "%",
                height: 250 + "px",
                width: 250 + "px"
            }}
        />
        <p className={"mytext pt-3 " + props.fadeIn}>
        <h3>Web Developer</h3>
The detailed programmer,experienced working on teams to produce impactful leading-edge websites ,very passionate into translating people's needs into a machine code,developed the habit of learning by doing which taught me the ability to learn fast.</p>
    </div>

</div>
);
export default brief;
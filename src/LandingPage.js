import React from "react";
import "./LandingPage.css";
import {useHistory} from "react-router-dom"

function LandingPage () {
    const history = useHistory();

    return(
        <span className="container-fluid">
            <div className="row">
                <div className="col col-3">
                    <h2>Meet the Engineer</h2>
                    <img src="/profilePic.jpg" alt="Profile Picture" width="150px" className="rounded-circle" />
                    <h4>Clive Chung</h4>
                    <p>A Fledgling Full Stack Developer, experienced Project Manager and an impactful leader in healthcare, looking to expand my expertise and knowledge across industries.</p>
                    <a target="_blank" href="https://www.linkedin.com/in/clive-k-chung/">
                            <img src="/linkedInIcon.png" width="30px" className="mx-2" />
                    </a>
                    <a target="_blank" href="https://github.com/Clive-C/">
                            <img src="/githubIcon.png" width="30px" className="mx-2"  />
                    </a>
                    <a target="_blank" href="mailto:chung.ck@gmail.com">
                            <img src="/emailIcon.png" width="30px" className="mx-2"  />
                    </a>
                </div>
                <div className="col col-9">
                    <div className="row my-5 border border-primary rounded-pill">
                        <h3>PROJECT DESCRIPTION</h3>
                        <p>Welcome to the simple game of Poker.</p>
                        <p>This is a 1-draw 5-card poker game with no wild cards.</p>
                        <p>A winning hand will consist of a Pair of Jacks or Higher.</p>
                    </div>
                    <div className="row my-5 border border-primary rounded-pill">
                        <h3>HOW TO PLAY:</h3>
                        <p>You start off by pressing the "DEAL" button to obtain a hand. Once the initial hand is rendered, you can click and select the cards you want to save. Once you have decided which cards to save, you can press the "DEAL" button again to change cards and see if you obtain a hand with pair of Jacks or Higher.</p>
                    </div>
                    <div className="row my-5 border border-primary rounded-pill">
                        <h3>TECHNOLOGIES USED:</h3>
                        <ul>
                            <li>
                                <img src="/JavaScriptIcon.png" alt="JavaScript Icon" width="50x" className="my-2 mx-2" />
                                JavaScript
                            </li>
                            <li>
                                <img src="/ReactIcon.png" alt="React Icon" width="50x" className="my-2 mx-2" />
                                React
                            </li>
                            <li>
                                <img src="/HTML5Icon.png" alt="HTML5 Icon" width="50x" className="my-2 mx-2" />
                                HTML5
                            </li>
                            <li>
                                <img src="/CSS3Icon.png" alt="CSS3 Icon" width="50x" className="my-2 mx-2" />
                                CSS3
                            </li>
                        </ul>
                    </div>
                    <div className="row my-5">
                        <button className="btn btn-primary btn-lg rounded-pill" onClick={()=>{history.push(`/play`)}}>PLAY</button>
                    </div>
                </div>
            </div> 
        </span>
    )
}

export default LandingPage;
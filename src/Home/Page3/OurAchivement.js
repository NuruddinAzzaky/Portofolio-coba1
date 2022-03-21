import React, { Fragment,Component } from "react";
import '../Page3/OurAchivment.css';
import Star from '../Page3/star.png';
import Profil1 from '../Page3/profil1.png';
import Profil2 from '../Page3/profil2.png';
import Profil3 from '../Page3/profil3.png';
import Logo1 from '../Page3/logo1.png';
import Trophy from '../Page3/Trophy.png';


class OurAchivement extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <Fragment>
                <div className="container-page3">
                    <div className="card1">
                        <p className="header-card1"> <img className="star" src={Star} alt="star"/>
                             4.8 Rating</p>
                        <p className="member-card1">                            
                                <img className="profil1" src={Profil1} alt="profil1"/>
                                <img className="profil2" src={Profil2} alt="profil2"/>
                                <img className="profil3" src={Profil3} alt="profil3"/>                                                      
                            <span >+836</span>
                                Members</p>
                        <p className="main-card1">More than 2 billion we people over countries use socibooks we to stay in touch with friends.</p>
                        <p className="footer-card1">Join Our Community</p>
                    </div>
                    <div className="card2">
                        <p className="header-card2">
                            <img className="logo1" src={Trophy} alt="logo1"/>
                            <span>AWWWARDS</span>
                        </p>
                        <p className="description">
                            <img className="logo2" src={Logo1} alt="Logo"/>
                            Best of
                            <span>2021</span>
                            on Github
                        </p>
                        <p className="main-card2">
                        More than 2 billion we people over countries use socibooks we to stay in touch with friends.
                        </p>
                        <p className="footer-card2">
                            Go to awards
                        </p>
                    </div>
                    <div className="card3">
                        <p className="header-card3">
                            Our Achivement
                        </p>
                        <p className="title-card3">
                        We are Connecting You The Digital Life.
                        </p>
                        <p className="main-card3">
                        The scope the Social Media becomes crucial Is helps the business to directly engage with their needs and wants.
                        </p>
                        <button className="footer-card3">
                        Discover me
                        </button>
                    </div>
                </div>
            </Fragment>
         );
    }
}
 
export default OurAchivement;
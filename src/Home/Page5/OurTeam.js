import { Fragment,Component } from "react";
import '../Page5/ourteam.css';
import Image1 from'../Page5/image1.png';
import Image2 from'../Page5/image2.png';
import Image3 from'../Page5/image3.png';
import Image4 from'../Page5/image4.png';
import Check from'../Page5/Check.png';
import Border from '../Page5/border.png';
class OurTeam extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <Fragment>
                <div className="Container-page5">
                    <div className="header-page5">
                        <p className="title-page5">
                        Valuable Team
                        </p>
                        <p className="subtitle-page5">
                        Our Active Members
                        </p>
                        <p className="main-page5">
                        when an unknown printer took a galley of type and meeting fari scrambled it.
                        </p>
                        <div className="option-header">
                            <button>
                                Newest
                            </button>
                            <button>
                                Popular
                            </button>
                            <button>
                                Active
                            </button>
                        </div>
                    </div>
                    <div className="content-page5">
                    <div className="card card1-page5">
                            <img className="profil" src={Image1} alt="image1"/>
                            <img className="border" src={Border} alt="border"/>
                            <img className="check"src={Check} alt="Check"/>
                            <p className="name-profil">Fahim Rahman</p>
                            <p className="name-socmed">@rahman</p>
                        </div><div className="card">
                            <img className="profil" src={Image2} alt="image2"/>
                            <img className="border" src={Border} alt="border"/>
                            <img className="check"src={Check} alt="Check"/>
                            <p className="name-profil">Kazi Rahman</p>
                            <p className="name-socmed">@Rahman</p>
                        </div>
                        <div className="card">
                            <img className="profil" src={Image3} alt="image3"/>
                            <img className="border" src={Border} alt="border"/>
                            <img className="check"src={Check} alt="Check"/>
                            <p className="name-profil">Masterero Ali</p>
                            <p className="name-socmed">@Master</p>
                        </div>
                        <div className="card card4-page5">
                            <img className="profil" src={Image4} alt="image4"/>
                            <img className="border" src={Border} alt="border"/>
                            <img className="check"src={Check} alt="Check"/>
                            <p className="name-profil">Alia Karon</p>
                            <p className="name-socmed">@Alia</p>
                        </div>
                    </div>
                </div>
            </Fragment>
         );
    }
}
 
export default OurTeam;
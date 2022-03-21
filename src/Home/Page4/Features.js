import { Fragment,Component } from "react";
import '../Page4/features.css';
import Icon1 from '../Page4/Icon.png';
import Icon2 from '../Page4/Icon2.png';
import Icon3 from '../Page4/Icon3.png';
import Icon4 from '../Page4/Icon4.png';
import Icon5 from '../Page4/Icon5.png';
import Icon6 from '../Page4/Icon6.png';
class Features extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <Fragment>
                <div className="container-page4">
                    <div className="header-page4">
                        <p className="title-header-page4">
                        Our Community
                        </p>
                        <p className="subtitle-header-page4">
                        Community Main Feature
                        </p>
                        <p className="main-header-page4">
                        The wise man therefore always holds in these matters to this principle of selection.
                        </p>
                    </div>
                    <div className="features-page4">
                        <div className="features-page4-line1">
                            <div className="features-card1">
                                <img src={Icon1} alt="Icon1"/>
                                <p className="title-features">
                                     Members, Friends
                                </p>
                                <p className="subtitle-features">
                                Members, Friends Connection ( like followers ), Private Message
                                </p>
                            </div>
                            <div className="features-card2">
                            <img src={Icon2} alt="Icon2"/>
                                <p className="title-features">
                                Groups
                                </p>
                                <p className="subtitle-features">
                                Your users can create groups to let other users to join and talk
                                </p>
                            </div>
                        </div>
                        <div className="features-page4-line2">
                            <div className="features-card3">
                            <img src={Icon3} alt="Icon3"/>
                                <p className="title-features">
                                Forum
                                </p>
                                <p className="subtitle-features">
                                Forum is ready by BBPress. Your users can make topics and talk.
                                </p> 
                            </div>
                            <div className="features-card4">
                            <img src={Icon4} alt="Icon4"/>
                            <p className="title-features">
                                Custom Module
                                </p>
                                <p className="subtitle-features">
                                You can create Members, Groups Module. We already created 3 modules. It's by drag & drop live builder.
                                </p>  
                            </div>
                        </div>
                        <div className="features-page4-line3">
                        <div className="features-card5">
                            <img src={Icon5} alt="Icon5"/>
                                <p className="title-features">
                                List Builder
                                </p>
                                <p className="subtitle-features">
                                Members, Groups list can be modified by drag & drop live builder.
                                </p> 
                            </div>
                            <div className="features-card6">
                            <img src={Icon6} alt="Icon6"/>
                            <p className="title-features">
                            List Scroll Effects
                                </p>
                                <p className="subtitle-features">
                                8 different scroll effects are ready. You can always change by your tastes.
                                </p>  
                            </div>
                        </div>
                        
                    </div>
                </div>
            </Fragment>
         );
    }
}
 
export default Features;
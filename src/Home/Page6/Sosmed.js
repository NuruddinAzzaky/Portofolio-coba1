import { Fragment,Component } from "react";
import '../Page6/cta.css';
import Appstore from '../Page6/appstore.png';
import Playstore from '../Page6/playstore.png';
import Backimage from '../Page6/background.png';
class Sosmed extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <Fragment>
                <div className="container-page6">
                    <div className="content-page6">
                        <p className="header-cont-page6">Get Our Aplication</p>
                        <p className="title-cont-page6">You Can Easily Find This App…!</p>
                        <p className="main-cont-page6">I say chap that’s suing lavatory chip shop gosh off his smashing boot are you taking the piss posh loo brilliant.</p>
                        <div className="button-apps-store">
                            <button><img src={Appstore} alt="appstore"/> </button>
                            <button><img src={Playstore} alt="playstore"/></button>
                        </div>
                    </div>
                    <div className="image-background-page6">
                        <img src={Backimage} alt="backgrond"/>
                    </div>
                </div>
            </Fragment>
        );
    }
}
 
export default Sosmed;
import React, { Fragment,Component } from "react";
import '../Page2/Aboutus.css';
import Image3 from '../Page2/image3.png';
import Image2 from '../Page2/image2.png';
import Image1 from '../Page2/image1.png'

class Aboutus extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <Fragment>
                <div className="about-us">
                    <div className="text">
                        <div className="text-a">Whats Netboks?</div>
                        <div className="text-b">Why Join to Netbook Social Network?</div>
                        <div className="text-c">Recent surveys have indicated that small bussiness recognise the need they have to connect with costumer.</div>
                        <ul>
                            <li>
                                <span>Groups</span>
                            </li>
                            <li><span>Messages</span>
                            </li>
                            <li><span>Share</span>
                            </li>
                        </ul>
                    </div>
                    <div className="image-page2">
                    <div className="image">
                        <img className="image3" src={Image3} alt="image1"/>
                    </div>
                    <div className="imagekanan">
                        <img className="image2" src={Image2} alt="image2"/>
                        <img className="image1" src={Image1} alt="image3"/>
                    </div>
                    </div>
                </div>
            </Fragment>
         );
    }
}
 
export default Aboutus;
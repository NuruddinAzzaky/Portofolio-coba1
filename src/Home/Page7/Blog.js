import { Fragment,Component } from "react";
import '../Page7/blog.css';
import Img1 from '../Page7/Image.png';
import Img2 from '../Page7/Image2.png';
import Img3 from '../Page7/Image3.png';
import Line from '../Page7/Line.png';

class Blog extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <Fragment>
                <div className="container-page7">
                    <div className="header-page7">
                        <p className="header-cont-page7">
                        Get Our Aplication
                        </p>
                        <p className="title-cont-page7">
                        Latest News
                        </p>
                    </div>
                    <div className="content-page7">
                        <div className="card-page7">
                            <img src={Img1} alt="img1"/>
                            <img className="line" src={Line} alt="line"/>
                            <p>It Does Not Matter Hows Slowly go as Long</p>
                            <p className="span">Continue Reading</p>
                        </div>
                        <div className="card-page7">
                            <img src={Img2} alt="img2"/>
                            <img className="line" src={Line} alt="line"/>
                            <p>Netbook Network Added New Photo Filter</p>
                            <p className="span">Continue Reading</p>
                        </div>
                        <div className="card-page7">
                        <img src={Img3} alt="img3"/>
                        <img className="line" src={Line} alt="line"/>
                            <p>We Optimised Netbooks Better Navigation</p>
                            <p className="span">Continue Reading</p>
                        </div>
                    </div>
                </div>
            </Fragment>
         );
    }
}
 
export default Blog;
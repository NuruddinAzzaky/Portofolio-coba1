import Page1 from '../Home/Page1/Page1';
import Aboutus from './Page2/Aboutus';
import {Component, Fragment} from "react";
import OurAchivement from './Page3/OurAchivement';
import Features from './Page4/Features';
import OurTeam from './Page5/OurTeam';
import Sosmed from './Page6/Sosmed';
import Blog from './Page7/Blog';
import Footer from './Page8/Footer';

class Home extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (
            <div>                
                <Page1/>
                <Aboutus/>
                <OurAchivement/>
                <Features/>
                <OurTeam/>
                <Sosmed/>
                <Blog/>
                <Footer/>
            
            </div>
            
         );
    }
}
 
export default Home;
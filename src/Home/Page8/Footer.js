import { Fragment,Component } from "react";
import '../Page8/footer.css'
import Logo from '../Page8/logo.png'
import Twitter from '../Page8/Twitter.png'
import Ig from '../Page8/instagram.png'
import Fb from '../Page8/facebook.png'
import In from '../Page8/Linkedin.png'

class Footer extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <Fragment>
                <div className="container-page8">
                    <div className="main-footer">
                        <div className="menu-footer">
                            <div className="home">
                                <p className="title-home">Home</p>
                                <p>Home</p>
                                <p>community</p>
                                <p>Events</p>
                                <p>Contact</p>
                            </div>
                            <div className="home">
                                <p className="title-home">Blogs</p>
                                <p>Blogs</p>
                                <p>News</p>
                                <p>Guides</p>
                                <p>Help Center</p>
                            </div>
                            <div className="home">
                                <p className="title-home">NewsFeed</p>
                                <p>NewsFeed</p>
                                <p>Profile</p>
                                <p>Friends</p>
                                <p>Forums</p>
                            </div>
                            <div className="home">
                                <p className="title-home">Members</p>
                                <p>Members</p>
                                <p>Activity</p>
                                <p>Groups</p>
                                <p>Private Groups</p>

                            </div>
                        </div>
                        <div className="subsribe">
                            <p className="title-home">Subscribe Cirkle Newsletter</p>
                            <p>Subscribe to be the first one to know about updates. Enter your email</p>
                            <form>
                                <input type="text" placeholder="Email Address"></input>
                                <button>Subscribe</button>
                            </form>
                        </div>
                    </div>
                    <div className="profile-footer">
                        <div className="name-profil-footer">
                            <p>Besnik Creative Agency.</p>
                        </div>
                        <div className="logo-footer">
                            <img src={Logo} alt="logo"/>
                        </div>
                        <div className="sosmed-footer">
                            <img src={Twitter} alt="logo"/>
                            <img src={Ig} alt="ig"/>
                            <img src={Fb} alt="fb"/>
                            <img src={In} alt="In"/>
                        </div>
                    </div>
                </div>

            </Fragment>
         );
    }
}
 
export default Footer;
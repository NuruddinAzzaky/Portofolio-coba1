import React, { Fragment,Component } from "react";
import '../Page1/Page1.css';
import Logo from '../Page1/logo.png';
import MagnifyingGlass from '../Page1/MagnifyingGlass.png';
import Image from'../Page1/image.png';
class Page1 extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <Fragment>
                <div className="header">
                    <div className="navigation">
                        <div className="menu">
                            <img className="logo-header" src={Logo} alt="Logo"/>
                            <h>Beranda</h>
                            <h>Profil</h>
                            <h>Presentasi</h>
                            <h>Events</h>
                        </div>   
                    <div className="kolom-cari">                 
                        <form className="search">
                            <label>
                                <img className="mag-logo" src={MagnifyingGlass} alt="MagnifyingGalss"/>
                                <input
                                type="text"
                                placeholder="Search Here...">
                                </input>
                            </label>
                            <hr></hr>
                        </form>
                    </div>
                    <div className="button">
                            <button>Log In</button>
                        </div>
                        </div>
                    <hr></hr>
                    <div className="container-text">
                        <div className="text">
                            <button className="netbook-community">Netbook Community</button>
                            <h1>Your Solutions For Community!</h1>
                            <h5>More than 2 billion people in over countries use socibook to stay in touch with friends & family. </h5>
                            <button className="about-more">About More</button>
                        </div>
                        <div>
                            <img className="image" src={Image} alt="image"/>
                        </div>
                    </div>    
                </div>
                
            </Fragment>
         );
    }
}
 
export default Page1;
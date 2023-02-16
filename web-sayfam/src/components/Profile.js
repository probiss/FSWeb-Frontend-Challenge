import React from "react";
import '../Styles/Profile.css';

export default function Profile() {
    return (
        <div className="profile">
            <h1 className="profile-title">Profile</h1>
            <div className="profile-container">
                <div className="profile-container-small">
                    <h3 className="h3-1" >Profile</h3>
                    <div className="profile-p">
                        <p className="profile-p1" >
                            Doğum Tarihi<br/>İkamet Şehri<br/>Eğitim Durumu<br/>Tercih Ettiği Rol
                        </p>
                        <p className="profile-p2" >
                            22.08.1996<br />İstanbul<br />Makine Müh. Lisans, 2021<br />Frontend,Backend,UI
                        </p>
                    </div>
                </div>
                <div  className="aboutme">
                    <h3>About Me</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Optio ut eaque placeat quos ullam alias iste veniam fugiat eveniet. <br/><br/>
                    Quibusdam,dolorum aperiam cum perspiciatis, sed, dolor soluta architecto amet omnis.</p>
                </div>
            </div>
            <div className="cizgi"></div>
        </div>
    )
}
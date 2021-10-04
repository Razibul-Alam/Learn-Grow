import { faFacebookSquare, faGithubSquare, faTwitterSquare, faYoutubeSquare,} from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css'

const FooterSocial = () => {
    return (
      <footer className="row justify-content-between my-footer align-items-center">
        <div className="col-lg-4">
          <span className="fs-2 mx-2"><FontAwesomeIcon icon={faFacebookSquare} /></span>
          <span className="fs-2 mx-2"><FontAwesomeIcon icon={faGithubSquare} /></span>
          <span className="fs-2 mx-2"><FontAwesomeIcon icon={faYoutubeSquare} /></span>
          <span className="fs-2 mx-2"><FontAwesomeIcon icon={faTwitterSquare} /></span>
          <p>Learn & Grow <span className="fs-4"><FontAwesomeIcon icon={faCopyright}/></span> AllRight reserve</p>
        </div>
        <div className="col-lg-5">
          <h5>Learn & Grow</h5>
          <p>Email:learn&grow@gmail.com</p>
          <p>Dhaka, bangladesh</p>
        </div>
      </footer>
       
    );
};

export default FooterSocial;
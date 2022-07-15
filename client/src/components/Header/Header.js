import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import styles from './Header.module.sass';
import CONSTANTS from '../../constants';
import { clearauth, headerRequest } from '../../actions/actionCreator';

class Header extends React.Component {

    logOut = () => {
      this.props.clearauth();
      this.props.history.replace('/login');
    };

    renderLoginButtons = () => {
      if (this.props.data) {
        return (
          <>
            <div className={styles.userInfo}>
              <img
                src={!this.props.data.avatar  ? CONSTANTS.ANONYM_IMAGE_PATH : `${CONSTANTS.publicURL}${this.props.data.avatar}`}
                alt="user"
              />
              <span>{`Hi, ${this.props.data.displayName}`}</span>
              <img src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`} alt="menu" />
              <ul>
                <li>
                  <Link
                    to="/dashboard"
                    style={{ textDecoration: 'none' }}
                  >
                    <span>View Dashboard</span>
                  </Link>
                </li>
                <li><Link to="/account" style={{ textDecoration: 'none' }}><span>My Account</span></Link></li>
                <li>
                  <Link
                    to="http:/www.google.com"
                    style={{ textDecoration: 'none' }}
                  >
                    <span>Messages</span>
                  </Link>
                </li>
                <li>
                  <Link to="http:/www.google.com" style={{ textDecoration: 'none' }}><span>Affiliate Dashboard</span></Link>
                </li>
                <li><span onClick={this.logOut}>Logout</span></li>
              </ul>
            </div>
            <img src={`${CONSTANTS.STATIC_IMAGES_PATH}email.png`} className={styles.emailIcon} alt="email" />
          </>
        );
      }
      return (
        <>
          <Link to="/login" style={{ textDecoration: 'none' }}><span className={styles.btn}>LOGIN</span></Link>
          <Link to="/registration" style={{ textDecoration: 'none' }}>
            <span
              className={styles.btn}
            >
              SIGN UP
            </span>
          </Link>
        </>
      );
    };

    

    render() {
      if (this.props.isFetching) {
        return null;
      }
      return (
        <div className={styles.headerContainer}>
          <div className={styles.fixedHeader}>
            <span className={styles.info}>Squadhelp recognized as one of the Most Innovative Companies by Inc Magazine.</span>
            <a href="http://www.google.com">Read Announcement</a>
          </div>
          <div className={styles.loginSignnUpHeaders}>
            <div className={styles.numberContainer}>
              <img src={`${CONSTANTS.STATIC_IMAGES_PATH}phone.png`} alt="phone" />
              <a href = "tel: +(877) 355-3585" style={{textDecoration: 'none'}}><span>(877)&nbsp;355-3585</span></a>
            </div>
            <div className={styles.userButtonsContainer}>
              {this.renderLoginButtons()}
            </div>
          </div>
          <div className={styles.navContainer}>
            <Link to ="/"><img src={`${CONSTANTS.STATIC_IMAGES_PATH}blue-logo.png`} className={styles.logo} alt="blue_logo" /></Link>
            <div className={styles.leftNav}>
              <div className={styles.nav}>
                <ul>
                  <li>
                    <span>NAME IDEAS</span>
                    <img
                      src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                      alt="menu"
                    />
                    <ul>
                      <li ><a href="http://www.google.com">Beauty</a></li>
                      <li><a href="http://www.google.com">Consulting</a></li>
                      <li><a href="http://www.google.com">E-Commerce</a></li>
                      <li><a href="http://www.google.com">Fashion & Clothing</a></li>
                      <li><a href="http://www.google.com">Finance</a></li>
                      <li><a href="http://www.google.com">Real Estate</a></li>
                      <li><a href="http://www.google.com">Tech</a></li>
                      <li className={styles.last}>
                        <a href="http://www.google.com">More Categories</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span>CONTESTS</span>
                    <img
                      src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                      alt="menu"
                    />
                    <ul>
                      <li><a href="http://www.google.com">How it works</a></li>
                      <li><a href="http://www.google.com">Pricing</a></li>
                      <li><a href="http://www.google.com">Agency service</a></li>
                      <li><a href="http://www.google.com">Active contests</a></li>
                      <li><a href="http://www.google.com">Winners</a></li>
                      <li><a href="http://www.google.com">Leaderboard</a></li>
                      <li className={styles.last}>
                        <a href="http://www.google.com">
                            Become a creative
</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span>OUR WORK</span>
                    <img
                      src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                      alt="menu"
                    />
                    <ul>
                      <li><a href="http://www.google.com">Names</a></li>
                      <li><a href="http://www.google.com">Taglines</a></li>
                      <li><a href="http://www.google.com">Logos</a></li>
                      <li className={styles.last}>
                        <a href="http://www.google.com">Testimonials</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span>NAMES FOR SALE</span>
                    <img src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`} alt="menu" />
                    <ul>
                      <li><a href="http://www.google.com">Popular names</a></li>
                      <li><a href="http://www.google.com">Short names</a></li>
                      <li><a href="http://www.google.com">Intriguing names</a></li>
                      <li><a href="http://www.google.com">Names by category</a></li>
                      <li><a href="http://www.google.com">Visual name search</a></li>
                      <li className={styles.last}>
                        <a href="http://www.google.com">
                            Sell your domains 
</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span>BLOG</span>
                    <img
                      src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                      alt="menu"
                    />
                    <ul>
                      <li><a href="http://www.google.com">Ultimate naming guide</a></li>
                      <li><a href="http://www.google.com">Poetic devices in business naming</a></li>
                      <li><a href="http://www.google.com">Crowded bar theory</a></li>
                      <li className={styles.last}>
                        <a href="http://www.google.com">All articles</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              {this.props.data && this.props.data.role !== CONSTANTS.CREATOR
                        && <Link className={styles.startContestBtn} to='/startContest'>START CONTEST</Link>}
            </div>
          </div>
        </div>
      );
    }
}

const mapStateToProps = (state) => state.auth;
const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(headerRequest()),
  clearauth: () => dispatch(clearauth()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));

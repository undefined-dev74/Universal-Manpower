import React from 'react';
import { Row, Col } from 'antd';

const Header = () => {
  return (
    <div className="header">
      <Row>
        <Col span={24}>
          {/* <!-- Image and text --> */}
          <div className="container">
            <div className="header__wrap">
              <a className="header__branding" href="./" rel="home">
                <h1 className="header__title">
                  <img
                    src="https://jobify-demos.astoundify.com/classic/wp-content/uploads/sites/2/2016/04/classic-logo-new.svg"
                    alt=""
                  />
                </h1>
                <h2 className="header__site-description">
                  Everything you need to get a job
                </h2>
              </a>
              <nav className="header__primary">
                <div className="header__menu header__menu--primary">
                  <ul className="header__menu header__menu--primary">
                    <li className="header__menu-item">
                      <a href="">Home</a>
                    </li>
                    <li className="header__menu-item">
                      <a href="">Find a Job</a>
                    </li>
                    <li className="header__menu-item">
                      <a href="">Upload CV</a>
                    </li>
                    <li className="header__menu-item">
                      <a href="">About Us</a>
                    </li>
                    <li className="header__menu-item">
                      <a href="">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Header;

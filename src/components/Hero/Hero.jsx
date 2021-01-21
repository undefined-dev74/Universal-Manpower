import { Col, Row } from 'antd';
import React from 'react';
import './_hero.scss';

const Hero = () => {
  return (
    <div className="hero">
      <Row>
        <Col span={12}>col-12</Col>
        <Col span={12}>col-12</Col>
      </Row>
    </div>
  );
};

export default Hero;

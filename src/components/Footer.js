import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import logoanderson from '../assets/img/logo1.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img className = "imageFooter" src={logoanderson} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://fr.linkedin.com/"><img src={navIcon1} alt="Icon2" /></a>
              <a href="https://fr-fr.facebook.com/"><img src={navIcon2} alt="Icon1" /></a>
              <a href="https://twitter.com/?lang=fr"><img src={navIcon3} alt="Icon4" /></a>
            </div>
            <br></br>
            <br></br>
            <i>Copyright Anderson.policedunet@2022. All Rights Reserved</i>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

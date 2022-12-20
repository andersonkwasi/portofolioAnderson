import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import monImage from "../assets/img/monImage.png"
import { ArrowRightCircle } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';
import Typed from "react-typed"

export const Banner = () => {

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Bienvenu sur mon Portofolio</span>
                  <h1>{`Je suis AndersonK `} <br></br>
                    <span className="wrap">
                      <Typed
                        strings={[
                          "Web/Mobile Developer",
                          "Data Base Administration",
                          "Analyst cybersecurity",
                        ]}
                        typeSpeed={150}
                        backSpeed={100}
                        loop
                      />                      
                    </span>

                  </h1>
                  <p>J'ai des compétences dans plusieurs domaines
                    Notemment dans l'Administration système Linux, Administration de bases de donnees,
                    Analyst en CyberSecurité, le Développement Web et Mobile.</p>
                  <button onClick={() => console.log('connect moi')}>Contactez-moi <ArrowRightCircle size={25} /></button>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={monImage} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

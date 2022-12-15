import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import monImage from "../assets/img/monImage.png"
import { ArrowRightCircle } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';


export const Banner = () => {
  let wordIndex = 0
  let letterIndex = 0
  const [text, setText] = useState('');

  const competence = [
    "Data Base Administrator",
    "Web/Mobile Developer",
    "Linux Administrator",
    "Analyst CyberSecurity"
  ];
  const createLetter = () => {
    text.textContent = competence[wordIndex][letterIndex]
    setTimeout(() => {
      text.remove()
    }, 2800)
  }

  const loop = () => {
    setTimeout(() => {
      if (wordIndex >= competence.length) {
        wordIndex = 0
        letterIndex = 0
        loop()
      }
      else if (letterIndex < competence[wordIndex].length) {
        createLetter()
        letterIndex++
        loop()
      } else {
        wordIndex++
        letterIndex = 0
        setTimeout(() => {
          loop()
        }, 2800)
      }
    }, 60)
  }
  loop()



  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Bienvenu sur mon Portofolio</span>
                  <h1>{`Je suis AndersonK, `} <span className="txt-rotate">
                    <span className="wrap">{text}</span>
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

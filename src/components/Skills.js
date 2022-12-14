import React from 'react';
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
   <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Compétences </h2>
                            <p>J'ai des compétences dans plusieurs domaines<br></br> Notamment dans l'Administration système Linux, Administration de bases de données Mysql, <br></br>Analyst CyberSecurité, le Développement Web et Mobile react .</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={meter3} alt="web dev" />
                                    <h5>Web Développement</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Brand Identity" />
                                    <h5>CyberSecurité</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="Web Development" />
                                    <h5>Base de Données</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="left bacground" />
        </section >

  )
}

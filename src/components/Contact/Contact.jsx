import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import DownloadLink from '../Download/DownloadLink';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {cta || 'Would you like to work with me? Awesome!'}
            </p>
            <DownloadLink>{btn || "Let's Talk"}</DownloadLink>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;

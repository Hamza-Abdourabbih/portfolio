import React from "react";
import {
  ArrowToTop,
  ContactHeader,
  ContactLink,
  Copyright,
  FooterArrowLine,
  FooterBigLink,
  FooterBigLinkContainer,
  FooterContact,
  FooterContacts,
  FooterLine,
  FooterSocials,
  Small,
  StyledFooter
} from "../styles/Footer.styled";
import { animateScroll as scroll } from "react-scroll";


const toTop = () => {
  scroll.scrollToTop({ delay: 0, duration: 0 });
};

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <StyledFooter>
      

      <FooterBigLinkContainer>
        <FooterBigLink
          href="mailto:abdourabbih44@@gmail.com"
          data-hover="Let's talk!"
        >
   
        </FooterBigLink>
      </FooterBigLinkContainer>
      <FooterContacts>
        <FooterContact>
          <ContactHeader></ContactHeader>
          <ContactLink href="tel:+212615939847">Phone</ContactLink>
        </FooterContact>
        <FooterContact>
          <ContactHeader></ContactHeader>{" "}
          <FooterSocials>
            <ContactLink
              href="https://github.com/Hamza-Abdourabbih"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </ContactLink>
            <ContactLink
              href="https://www.linkedin.com/in/hamza-abdourabbih-991ab8238//"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </ContactLink>
            <ContactLink
              href="https://www.instagram.com/hamza.abdourabbih/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </ContactLink>
          </FooterSocials>
        </FooterContact>
        <FooterContact>
          <ContactHeader></ContactHeader>
          <ContactLink href="mailto:abdourabbih44@@gmail.com">
          Abdourabbih44@gmail.com
          </ContactLink>
        </FooterContact>
      </FooterContacts>
      <FooterArrowLine>
        <FooterLine />
        <ArrowToTop title="Back to Top" onClick={toTop}></ArrowToTop>
      </FooterArrowLine>
      

      <Copyright>
        <small>
          &copy; Copyright {year},{" "}
          <Small>
            Hamza Abdourabbih
          </Small>
        </small>
      </Copyright>
    </StyledFooter>
  );
};

export default Footer;

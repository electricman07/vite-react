import { Link } from "react-router-dom";
import Logo from "../assets/images/Avatar200.png";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <article>
          <div className="logo__container">
            <Link to="/" className="logo">
              <img src={Logo} alt="logo" />
            </Link>
            <h2>Glen Popowich</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate
            veniam tenetur eum dolore sequi dicta fuga sint porro quae fugit!
          </p>
          <div className="footer__socials">
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <BsTwitterX />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <AiFillInstagram />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaGithub />
            </a>
          </div>
        </article>
        <article>
          <h4>Permalinks</h4>
          <Link to="/about">About</Link>
          <Link to="gallery">Plans</Link>
          <Link to="contact">Contact</Link>
        </article>
        <article>
          <h4>Insights</h4>
          <Link to="/about">Bing</Link>
          <Link to="/plans">Case Studies</Link>
          <Link to="trainers">Events</Link>
          <Link to="gallery">Communications</Link>
          <Link to="contact">FAQs</Link>
        </article>
        <article>
          <h4>Get in Touch</h4>
          <Link to="contact">Contact Us</Link>
          <Link to="contact">Support</Link>
        </article>
      </div>
      <div className="footer__copyright">
        <small>2023 Glen Popowich &copy; All Rights Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;

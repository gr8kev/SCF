import React from "react";
import footerillustration from "./assets/images/footer-illustration.png";
import IonIcon from "@reacticons/ionicons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer" id="footer">
        <div
          className="footer-top"
          style={{ backgroundImage: `url(${footerillustration})` }}
        >
          <div className="container">
            <div className="footer-brand">
              <a href="" className="logo">
                StomachCareFoods<span className="span">.</span>
              </a>

              <p className="footer-text">
                At StomachCareFoods, we believe that good food is the
                cornerstone of good health.
              </p>

              <ul className="social-list">
                <li>
                  <a href="#" className="social-link">
                    <IonIcon className="ion" name="logo-facebook"></IonIcon>
                  </a>
                </li>

                <li>
                  <a href="#" className="social-link">
                    <IonIcon className="icon" name="logo-twitter"></IonIcon>
                  </a>
                </li>

                <li>
                  <a href="#" className="social-link">
                    <IonIcon className="ion" name="logo-instagram"></IonIcon>
                  </a>
                </li>

                <li>
                  <a href="#" className="social-link">
                    <IonIcon className="ion" name="logo-pinterest"></IonIcon>
                  </a>
                </li>
              </ul>
            </div>

            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Contact Info</p>
              </li>

              <li>
                <p className="footer-list-item">+1(647)705-5758</p>
              </li>

              <li>
                <p className="footer-list-item">Nfadayomi@gmail.com</p>
              </li>

              <li>
                <address className="footer-list-item">
                  89 Cooke ave BrantFord ON canada N3T 0T3
                </address>
              </li>
            </ul>

            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Opening Hours</p>
              </li>

              <li>
                <p className="footer-list-item">Monday-Thursday: 11:30-9:00</p>
              </li>

              <li>
                <p className="footer-list-item"></p>Friday-Saturday: 11:30-10:00
              </li>

              <li>
                <p className="footer-list-item"></p>Saturday: 11:30-9:00
              </li>
            </ul>

            <form action="" className="footer-form">
              <p className="footer-list-title">Book a Table</p>

              <div className="input-wrapper">
                <input
                  type="text"
                  name="full_name"
                  required
                  placeholder="Your Name"
                  aria-label="Your Name"
                  className="input-field"
                />

                <input
                  type="email"
                  name="email_address"
                  required
                  placeholder="Email"
                  aria-label="Email"
                  className="input-field"
                />
              </div>

              <div className="input-wrapper">
                <select
                  name="total_person"
                  aria-label="Total person"
                  className="input-field"
                >
                  <option value="person">Person</option>
                  <option value="2 person">2 Person</option>
                  <option value="3 person">3 Person</option>
                  <option value="4 person">4 Person</option>
                  <option value="5 person">5 Person</option>
                </select>

                <input
                  type="date"
                  name="booking_date"
                  aria-label="Reservation date"
                  className="input-field"
                />
              </div>

              <textarea
                name="message"
                required
                placeholder="Message"
                aria-label="Message"
                className="input-field"
              ></textarea>

              <button type="submit" className="btn">
                Book a Table
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <p className="copyright-text">
              &copy; {currentYear}{" "}
              <a href="#" className="copyright-link">
                StomachCareFoods
              </a>{" "}
              All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
      <a
        href="#top"
        className="back-top-btn"
        aria-label="back top top"
        data-back-top-btn
      >
        <IonIcon name="chevron-up" aria-hidden="true"></IonIcon>
      </a>
    </>
  );
};

export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import PullBox from "./PullBox";
import Footer from "./Footer";

const ShowcaseBody = () => {
  return (
    <div className="container">
      <div className="formatted-content -intro">
        <h6 className="heading">Showcase</h6>
        <p className="body">
          Here are my self projects which I build during my free time
        </p>
      </div>
      <section>
        <div className="showcase-item">
          <div className="preview">
            <div className="browser-box">
              <div className="heading">
                <div className="actions">
                  <div className="action"></div>
                  <div className="action"></div>
                  <div className="action"></div>
                </div>
                <div className="url"></div>
                <div className="cog"></div>
              </div>
              <img src="catch.jpg" alt="catch" className="img" />
            </div>
          </div>
          <div className="info">
            <h1 className="title">Catch of the Day</h1>
            <p className="description">
              A real-time app for seafood market where price and quantity
              available are variable and can change at a moment's notice.
            </p>
            <ul className="tags">
              <li>Web App</li>
              <li>UI Design</li>
            </ul>
            <Link
              className="button"
              to="https://github.com/ejllovido/catch-of-the-day"
              target="_blank"
            >
              View Project
            </Link>
          </div>
        </div>
        <div className="showcase-item">
          <div className="preview">
            <div className="browser-box">
              <div className="heading">
                <div className="actions">
                  <div className="action"></div>
                  <div className="action"></div>
                  <div className="action"></div>
                </div>
                <div className="url"></div>
                <div className="cog"></div>
              </div>
              <img src="tracker.jpg" alt="tracker" className="img" />
            </div>
          </div>
          <div className="info">
            <h1 className="title">Bills Payment Tracker</h1>
            <p className="description">
              A simple tracker for your family bills payment.
            </p>
            <ul className="tags">
              <li>Web App</li>
              <li>UI Design</li>
            </ul>
            <Link
              className="button"
              to="https://github.com/ejllovido/bills-payment-tracker"
              target="_blank"
            >
              View Project
            </Link>
          </div>
        </div>
        <div className="showcase-item">
          <div className="preview">
            <div className="browser-box">
              <div className="heading">
                <div className="actions">
                  <div className="action"></div>
                  <div className="action"></div>
                  <div className="action"></div>
                </div>
                <div className="url"></div>
                <div className="cog"></div>
              </div>
              <img src="vidly.jpg" alt="vidly" className="img" />
            </div>
          </div>
          <div className="info">
            <h1 className="title">Vidly</h1>
            <p className="description">An imaginary video rental app.</p>
            <ul className="tags">
              <li>Web App</li>
              <li>UI Design</li>
            </ul>
            <Link
              className="button"
              to="https://github.com/ejllovido/vidly"
              target="_blank"
            >
              View Project
            </Link>
          </div>
        </div>
      </section>
      <PullBox />
      <Footer />
    </div>
  );
};

export default ShowcaseBody;

import React from "react";
import { Link } from "react-router-dom";

const SocialMedia = () => {
  return (
    <nav className="social-media">
      <Link
        to="https://github.com/ejllovido"
        className="media"
        title="ejllovido at Github"
      >
        <i className="fa fa-github" aria-hidden="true"></i>
      </Link>
      <Link
        to="hhttps://medium.com/@ericllovido08"
        className="media"
        title="ericllovido08 at Medium"
      >
        <i className="fa fa-medium" aria-hidden="true"></i>
      </Link>
      <Link
        to="https://twitter.com/eric08john"
        className="media"
        title="eric08john at twitter"
      >
        <i className="fa fa-twitter" aria-hidden="true"></i>
      </Link>
      <Link
        to="https://codepen.io/ejllovido"
        className="media"
        title="ejllovido at Codepen"
      >
        <i className="fa fa-codepen" aria-hidden="true"></i>
      </Link>
      <Link
        to="mailto:ericllovido08@gmail.com"
        className="media"
        title="ericllovido08@gmail.com"
      >
        <i className="fa fa-envelope-o" aria-hidden="true"></i>
      </Link>
    </nav>
  );
};

export default SocialMedia;

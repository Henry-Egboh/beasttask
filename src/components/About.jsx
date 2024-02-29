import Header from "./Header";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="container about-cont">
      <Header title="Task Tracker"/>
    <section>
    <h4>New Release!</h4>
    <p>
        The new version v3.0 was released on 22 Feb, 2024 Many of the bugs from
        v2.29 have been fixed in this new release.
      </p>
      </section>
      <section>
      <h4>Bug Fixes</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, fugit.
      </p>
    </section>
      <section>
        <h4>Contributors</h4>
        <p>Marh Raju, Dante Borf, Sandru Khan</p>
      </section>
      <section className="back-home-btn">
        <p className="link-to-home"><Link to="/" className="back-home">Back Home</Link></p>
      </section>
    </div>
  );
};

export default About;

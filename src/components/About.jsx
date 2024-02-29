import Header from "./Header";
const About = () => {
  return (
    <div>
      <Header />
    <section>
    <p>
        The new version v3.0 was released on 22 Feb, 2024 Many of the bugs from
        v2.29 have been fixed in this new release.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, fugit.
      </p>
    </section>
      <section>
        <h4>Contributors</h4>
        <p>Marh Raju, Dante Borf, Sandru Khan</p>
      </section>
      <section>
        <p><a href="/">Go Home</a></p>
      </section>
    </div>
  );
};

export default About;

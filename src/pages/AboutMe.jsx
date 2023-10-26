const About = () => {
  return (
    <div className="card m-5 p-2 bg-transparent">
      <div className="row g-0">
        <div className="col-md-3">
          <img src="./src/images/Max.jpeg" className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-9">
          <div className="card-body">
            <h2 className="card-title mb-4">Maxwell Rice - Full Stack Web Developer</h2>
            <p className="card-text">I'm Max.  Standard-issue nerd.  My interests include videogames, reading, and Magic: The Gathering.  I grew up with computers and I've always loved building and using them.  Learning to code seemed like a natural progression from there, and I'm excited to keep learning new things.</p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default About;
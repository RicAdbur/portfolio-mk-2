const About = () => {
  return (
    <div className="container mt-5">
      <div className="card m-5 p-2 bg-transparent border-primary-subtle ">
        <div className="row g-0">
          <div className="col-md-3">
            <img src="/images/Max.jpeg" className="img-fluid rounded" alt="Picture of Max" />
          </div>
          <div className="col-md-9">
            <div className="card-body px-4">
              <h1 className="card-title mb-1">Maxwell Rice</h1>
              <h4 className="card-title mb-4">Full Stack Web Developer</h4>
              <p className="card-text fs-5">I'm Max.  Standard-issue nerd.  My interests include videogames, reading, and Magic: The Gathering.  I grew up with computers and I've always loved building and using them.  Learning to code seemed like a natural progression from there, and I'm excited to keep learning new things.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default About
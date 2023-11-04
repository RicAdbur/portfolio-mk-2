const Resume = () => {
  return (
    <div className="container mt-5">
      <div className="row d-flex justify-content-center">
        <div className="col-8 border border-primary-subtle rounded p-3">
          <div className="row border-bottom">
            <h2 className="text-center border-bottom mb-3 p-1">Technical Skills</h2>
            <ul className="col-6 w-auto mx-auto">
              <li>JavaScript ES5/ES6</li>
              <li>jQuery</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>React + Vite</li>
              <li>Handlebars</li>
            </ul>
            <ul className="col-6 w-auto mx-auto">
              <li>MySQL/Sequelize</li>
              <li>MongoDB/Mongoose</li>
              <li>GraphQL</li>
              <li>Apollo Client/Server</li>
              <li>Node.js</li>
              <li>Express.js</li>
            </ul>
          </div>
          <div className="d-flex">
            <a href="https://docs.google.com/document/d/14jZoTctLcm86Cx9GJfStjFjH9epSQ-2v6PosAG88c6E/edit?usp=sharing" className="btn btn-lg btn-outline-primary mx-auto mt-3">Resumé</a>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Resume
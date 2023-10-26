const Contact = () => {
  return (
    <div className="container mt-5">
      <form>

        <div className="row d-flex justify-content-center mt-5">
          <div className="col-4">
            <label for="nameInput" className="form-label">Name</label>
            <input type="text" className="form-control" id="nameInput" />
          </div>

          <div className="col-4">
            <label for="emailInput" className="form-label">Email address</label>
            <input type="email" className="form-control" id="emailInput" placeholder="name@example.com" />
          </div>
        </div>

        <div className="row d-flex justify-content-center my-4">
          <div className="col-8">
            <label for="messageArea" className="form-label">Message</label>
            <textarea className="form-control form-control-lg" id="messageArea" rows="3"></textarea>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <button className="btn btn-lg btn-outline-primary text-light" type="submit">Send Message</button>
        </div>

      </form>
    </div>
  )
};

export default Contact;
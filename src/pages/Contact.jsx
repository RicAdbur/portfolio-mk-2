const Contact = () => {
  return (
    <div className="container mt-5">
      <form
        action="https://formspree.io/f/mwkdyaqr"
        method="POST"
        className="border border-primary-subtle rounded"
      >
        <input type="text" name="_gotcha" style={{ display: "none" }} />

        <div className="row d-flex justify-content-center mt-5">
          <div className="col-4">
            <input name="name" type="text" className="form-control" id="nameInput" placeholder="Name" />
          </div>

          <div className="col-4">
            <input name="email" type="email" className="form-control" id="emailInput" placeholder="someone@example.com" />
          </div>
        </div>

        <div className="row d-flex justify-content-center my-4">
          <div className="col-8">
            <textarea name="message" className="form-control form-control-lg" id="messageArea" placeholder="What's on your mind?" rows="5"></textarea>
          </div>
        </div>

        <div className="row d-flex justify-content-center">
          <div className="col-8">
            <button 
              className="btn btn-lg btn-outline-primary text-light w-100 mb-5" 
              type="submit"
            >
              Send Message
            </button>
          </div>
        </div>

      </form>
    </div>
  )
}

export default Contact
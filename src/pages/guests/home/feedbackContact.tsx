import "./styles.scss";

export const FeedbackContact = () => {
  return (
    <section className="feedback-contact-wrapper mb-md-10 mb-6">
      <div className="container">
        <div className="row gx-4">
          <div className="col-md-6 col-12 my-auto pe-lg-9">
            <h2 className="fw-bold sub-title">We’d love to hear from you</h2>

            <p className="text-xl text-grey-100">
              Have a question or feedback? Reach out and connect with us. We{" "}
              genuinely value your feedback and look forward to hearing from
              you.
            </p>
          </div>
          <div className="col-md-6 col-12">
            <div className="row mb-4">
              <div className=" col-sm-6 col-12 mb-4_5">
                <label className="text-sm mb-2">Full Name</label>
                <input
                  className="form-control"
                  type="Name"
                  placeholder=" E.g. John Ademola"
                />
              </div>
              <div className=" col-sm-6 col-12 mb-4_5">
                <label className="text-sm mb-2">Email</label>
                <input
                  className="form-control"
                  type="email"
                  placeholder="E.g. johnademola@gmail.com"
                />
              </div>
              <div className=" col-sm-6 col-12 mb-4_5">
                <label className="text-sm mb-2">Phone Number</label>
                <input
                  className="form-control"
                  type="number"
                  placeholder="E.g. 08012345678"
                />
              </div>
              <div className=" col-sm-6 col-12 mb-4_5">
                <label className="text-sm mb-2">WhatsApp Number</label>
                <input
                  className="form-control"
                  type="number"
                  placeholder="E.g. 08012345678"
                />
              </div>
              <div className="col-12">
                <label className="text-sm mb-2">Message</label>
                <textarea
                  className="form-control textarea-placeholder"
                  rows={6}
                  placeholder="How can we help you?"
                ></textarea>
              </div>
            </div>
            <button className="btn btn-primary btn-lg w-100 fw-semi-bold mt-4">
              Send
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

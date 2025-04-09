import Offcanvas from "react-bootstrap/Offcanvas";
import close from "@/assets/images/Close-Button.svg";

export const ComicsComment = ({
  setShow,
  show,
}: {
  setShow: (e: boolean) => void;
  show: boolean;
}) => {
  const handleClose = () => setShow(false);

  return (
    <Offcanvas
      className="comics-comment-modal"
      show={show}
      placement={"end"}
      onHide={handleClose}
    >
      <Offcanvas.Body>
        <div>
          <div className="d-flex justify-content-between align-items-center ">
            <p className="text-xl fw-semi-bold text-black-000 mb-0">Comments</p>
            <img
              className="click close-icon"
              onClick={handleClose}
              src={close}
              alt="Close"
            />
          </div>
          <div className="hr-style" />
        </div>
        <div className="comment-body">
          <div className="d-flex gap-4 mb-2">
            <div>
              <p className="initials">JD</p>
            </div>
            <div>
              <p className="text-sm fw-semi-bold text-blue-900 my-0">
                James Doe
              </p>
              <p className="text-sm ">
                Have a question or feedback? Reach out and connect with us. We
                genuinely value your feedback and look forward to hearing from
                you. TEST
              </p>
            </div>
          </div>
          <div className="d-flex gap-4 mb-2">
            <div>
              <p className="initials">JD</p>
            </div>
            <div>
              <p className="text-sm fw-semi-bold text-blue-900 my-0">
                James Doe
              </p>
              <p className="text-sm ">
                Have a question or feedback? Reach out and connect with us. We
                genuinely value your feedback and look forward to hearing from
                you.
              </p>
            </div>
          </div>
          <div className="d-flex gap-4 mb-2">
            <div>
              <p className="initials">JD</p>
            </div>
            <div>
              <p className="text-sm fw-semi-bold text-blue-900 my-0">
                James Doe
              </p>
              <p className="text-sm ">
                Have a question or feedback? Reach out and connect with us. We
                genuinely value your feedback and look forward to hearing from
                you.
              </p>
            </div>
          </div>
          <div className="d-flex gap-4 mb-2">
            <div>
              <p className="initials">JD</p>
            </div>
            <div>
              <p className="text-sm fw-semi-bold text-blue-900 my-0">
                James Doe
              </p>
              <p className="text-sm ">
                Have a question or feedback? Reach out and connect with us. We
                genuinely value your feedback and look forward to hearing from
                you.
              </p>
            </div>
          </div>
          <div className="d-flex gap-4 mb-2">
            <div>
              <p className="initials">JD</p>
            </div>
            <div>
              <p className="text-sm fw-semi-bold text-blue-900 my-0">
                James Doe
              </p>
              <p className="text-sm ">
                Have a question or feedback? Reach out and connect with us. We
                genuinely value your feedback and look forward to hearing from
                you.
              </p>
            </div>
          </div>
        </div>

        <div className="comment-footer">
          <input
            className="form-control mb-3"
            type="Name"
            placeholder="Enter Full Name"
          />
          <textarea
            className="form-control textarea-placeholder mb-3"
            rows={3}
            placeholder="Enter Comment"
          ></textarea>
          <button className="btn btn-primary btn-lg w-100 fw-semi-bold ">
            Drop Comment
          </button>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

import { useState } from "react";
import { Modal } from "react-bootstrap";
import close from "@/assets/images/Close-Button.svg";
import upload_icon from "@/assets/images/upload-icon.svg";
import preview from "@/assets/images/preview.svg";

export const ShareTestimony = () => {
  const [openShareTestimonyModal, setOpenShareTestimonyModal] = useState(false);
  const closeShareTestimonyModal = () => setOpenShareTestimonyModal(false);
  return (
    <div>
      <h2 className="sub-title text-center fw-bold">
        Your Story Matters – Leave Your Testimony and Illuminate the Path of
        Faith
      </h2>
      <button
        onClick={() => setOpenShareTestimonyModal(!openShareTestimonyModal)}
        className="btn btn-lg btn-outline fw-semi-bold text-xl px-5_5 mx-auto mt-md-6 mt-5 mb-md-10 mb-6"
      >
        Share Testimony
      </button>

      <Modal
        size="lg"
        className="modal-mobile"
        show={openShareTestimonyModal}
        onHide={closeShareTestimonyModal}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <div className="px-3 pb-3 pt-2">
            <div className="d-flex justify-content-between align-items-center ">
              <p className="text-xxl fw-semi-bold text-black-000 mb-0">
                Share Testimony
              </p>
              <img
                className="click"
                style={{ width: "3rem" }}
                onClick={closeShareTestimonyModal}
                src={close}
                alt="Close"
              />
            </div>
            <div className="hr-style" />
            <form>
              <label className="text-sm mb-2">Name</label>
              <input
                className="form-control mb-4"
                type="Name"
                placeholder="E.g. John"
              />
              <label className="text-sm mb-2">Testimony</label>
              <textarea
                className="form-control textarea-placeholder mb-4"
                rows={4}
                placeholder="Share Testimony"
              ></textarea>
              <label className="text-sm mb-2">Image (Optional)</label>
              <div className="d-flex gap-3 mb-4">
                <label htmlFor="testimonyImage" className="file-picker">
                  <input
                    type="file"
                    name="testimonyImage"
                    id="testimonyImage"
                    accept="image/png,image/jpeg,image/jpg"
                    className="d-none"
                  />
                  <div>
                    <div className="text-center">
                      <img
                        style={{ width: "2.4rem" }}
                        src={upload_icon}
                        alt="Upload_icon"
                      />
                    </div>
                    <p className="text-sm text-black-000 text-center">
                      Drag and drop image or{" "}
                      <span className="text-blue-400 fw-medium">
                        upload image
                      </span>
                    </p>
                  </div>
                </label>

                <div className="preview">
                  <div className="text-center">
                    <img
                      style={{ width: "1.6rem" }}
                      src={preview}
                      alt="Preview"
                    />
                    <p className="text-sm text-black-000">Preview</p>
                  </div>
                </div>
              </div>
              <button className="btn btn-md fw-semi-bold btn-primary w-100">
                Share Testimony
              </button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

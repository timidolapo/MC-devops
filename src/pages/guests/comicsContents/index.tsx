import comment from "@/assets/images/comment-icon.svg";
import prevv from "@/assets/images/prevv.svg";
import nextt from "@/assets/images/nextt.svg";
import back from "@/assets/images/back-icon.svg";
import pagination from "@/assets/images/pagination.svg";
import zoom_in from "@/assets/images/zoom-in.svg";
import zoom_out from "@/assets/images/zoom-out.svg";
import portrait from "@/assets/images/portrait.svg";
import landscape from "@/assets/images/landscape.svg";
import prevvv from "@/assets/images/prevvv.svg";
import nexttt from "@/assets/images/nexttt.svg";
import comics from "@/assets/images/comics-img.svg";
import "./styles.scss";
import { useState } from "react";
import { ComicsComment } from "./comicsComment";
import { useNavigate } from "react-router-dom";

export const ComicsContents = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  return (
    <div className="ComicsContents-wrapper ">
      <nav className="fixed-nav">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center ">
            <button
              className="bg-none"
              onClick={() => {
                navigate(-1);
              }}
            >
              <p className="d-flex align-items-center text-xl mb-3 click">
                <img className="me-3" src={back} />
                <span className="d-md-block d-none">Back to Comics</span>
              </p>
            </button>
            <div>
              <p className="text-xxl fw-semi-bold mb-3">His Presence</p>
            </div>
            <div className="d-flex click">
              <span className="prev">
                <p className="text-xl">
                  <img className="img-icon mb-1" src={prevv} />{" "}
                  <span className="d-md-inline d-none">Prev</span>
                </p>
                <span className="border" />
              </span>
              <span className="next">
                <p className="text-xl">
                  <span className="d-md-inline d-none">Next</span>{" "}
                  <img className="img-icon mb-1" src={nextt} />
                </p>
              </span>
            </div>
          </div>
        </div>
      </nav>
      <div className="comics-wrapper">
        <img className="comics-img" src={comics} alt="comics-img" />
        <img className="comics-img" src={comics} alt="comics-img" />
      </div>
      <div className="container comics-content-controls">
        <div className="d-flex justify-content-between align-items-center ">
          <p className="text-xl mb-0">
            <img className="img-icon me-3 mb-1" src={pagination} />
            <span className="d-md-inline d-none">Page</span> 1/25
          </p>
          <div className="d-flex gap-3">
            <div className=" border comment-control-rounded d-flex align-items-center p-2 d-md-block d-none">
              <img className="img-icon me-3_5" src={portrait} />
              <img className="img-icon" src={landscape} />
            </div>
            <div className="d-flex gap-2">
              <div className=" border comment-control-rounded d-flex align-items-center p-2 ">
                <img className="img-icon" src={prevvv} />
              </div>
              <div className=" border comment-control-rounded d-flex align-items-center p-2">
                <img className="img-icon" src={nexttt} />
              </div>
            </div>
            <div className=" border comment-control-rounded d-flex align-items-center p-2 d-md-block d-none">
              <img className="img-icon me-3_5" src={zoom_in} />
              <img className="img-icon" src={zoom_out} />
            </div>
          </div>
          <div>
            <button
              className="btn btn-sm btn-primary gap-2 "
              onClick={handleShow}
            >
              <img className="img-icon" src={comment} /> Comment
            </button>
          </div>
        </div>
      </div>
      <ComicsComment show={show} setShow={setShow} />
    </div>
  );
};

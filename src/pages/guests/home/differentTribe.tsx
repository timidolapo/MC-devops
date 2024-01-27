import { Link } from "react-router-dom";
import "./styles.scss";

export const DifferentTribe = () => {
  return (
    <div className="container mb-md-10 mb-6">
      <div className="different-tribe-wrapper">
        <div className="different-tribe-text">
          <p className="text-xxl mb-0">Dive into His Presence</p>
          <p className="text-3xl fw-bold mt-0">A Different Tribe</p>
        </div>
      </div>
      <div className="d-flex justify-content-end mt-5">
        <Link className="text-decoration-none" to={"/all-comics"}>
          <button className="btn btn-md fw-semi-bold text-xxl btn-outline">
            View More
          </button>
        </Link>
      </div>
    </div>
  );
};

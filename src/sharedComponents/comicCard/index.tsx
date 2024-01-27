import "./styles.scss";
import next_icon from "@/assets/images/next-icon.svg";
import { Link } from "react-router-dom";
export const ComicCard = ({ img, title }: { img: string; title: string }) => {
  return (
    <Link className="text-decoration-none click" to={"/comics-content"}>
      <div className="card-wrapper">
        <img className="card-img" src={img} alt="hippo" />
        <div className="d-flex justify-content-between align-items-center mt-4">
          <p className="text-xxl text-blue-900 fw-semi-bold">{title}</p>
          <img className="next-icon" src={next_icon} alt="next_icon" />
        </div>
      </div>
    </Link>
  );
};

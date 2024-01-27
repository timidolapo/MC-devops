import "./styles.scss";
import item1 from "@/assets/images/home-banner1.svg";
import item2 from "@/assets/images/home-banner2.svg";
import item3 from "@/assets/images/home-banner3.svg";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
export const HomeBanner = () => {
  const carouselList = [
    {
      img: item1,
      tagLine: "Dive into His Presence",
      title: "A Gospel Comic of Divine <br /> Grace and Power!",
      title_mobile: "A Gospel Comic of Divine  Grace and Power!",
    },
    {
      img: item2,
      tagLine: "Divine Revelations Await",
      title: "Sneak Peek into Our <br /> Upcoming Comic Releases!",
      title_mobile: "Sneak Peek into Our  Upcoming Comic Releases!",
    },
    {
      img: item3,
      tagLine: "Elevate Your Faith",
      title: "Immerse in Divine Narratives <br/> with Our Gospel Comic!",
      title_mobile: "Immerse in Divine Narratives  with Our Gospel Comic!",
    },
  ];
  return (
    <>
      <section className="containerr">
        <div className="carousel-wrapper">
          <Carousel
            swipeable={false}
            animationHandler={"fade"}
            transitionTime={1000}
            showThumbs={false}
            showArrows={false}
            showStatus={false}
            autoPlay={true}
            infiniteLoop={true}
          >
            {carouselList.map(
              ({ img, title, tagLine, title_mobile }, index) => (
                <div className="h-100" key={index}>
                  <img src={img} />
                  <div className="legend">
                    <p className="text-xxl">{tagLine}</p>
                    <p
                      className="title fw-bold mb-md-5_5 mb-4 d-md-block d-none"
                      dangerouslySetInnerHTML={{ __html: title }}
                    />
                    <p
                      className="title fw-bold mb-md-5_5 mb-4 d-md-none d-block"
                      dangerouslySetInnerHTML={{ __html: title_mobile }}
                    />
                    <Link
                      className="text-decoration-none"
                      to={"/comics-content"}
                    >
                      <button className="btn btn-md btn-primary fw-semi-bold">
                        Read Now
                      </button>
                    </Link>
                  </div>
                </div>
              )
            )}
          </Carousel>
        </div>
      </section>
    </>
  );
};

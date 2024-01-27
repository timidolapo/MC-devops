import "./styles.scss";
import testimonial from "@/assets/images/testimonial.svg";
import { ShareTestimony } from "@/sharedComponents/shareTestimony";
import Slider from "react-slick";
import {
  SliderNextArrow,
  SliderPrevArrow,
} from "@/sharedComponents/customSliderArrows";

const offers = [
  {
    name: "Udia Promise",
    img: testimonial,
    testimony:
      "Reading the Messianic website's gospel comic was like witnessing the scriptures unfold before my eyes. The vibrant artwork and compelling storytelling left an indelible mark on mysoul. It's a masterpiece that beautifully conveys the timeless message of love and redemption.",
  },
  {
    name: "Udia Promise",
    img: testimonial,
    testimony:
      "Reading the Messianic website's gospel comic was like witnessing the scriptures unfold before my eyes. The vibrant artwork and compelling storytelling left an indelible mark on mysoul. It's a masterpiece that beautifully conveys the timeless message of love and redemption.",
  },
  {
    name: "Udia Promise",
    img: testimonial,
    testimony:
      "Reading the Messianic website's gospel comic was like witnessing the scriptures unfold before my eyes. The vibrant artwork and compelling storytelling left an indelible mark on mysoul. It's a masterpiece that beautifully conveys the timeless message of love and redemption.",
  },
];

export const Testimonies = () => {
  return (
    <div id="testimonies" className="container my-md-10 my-6">
      <p className="fw-bold text-3xl text-center mb-5">
        Unveiling Testimonies of Faith and Transformation!
      </p>
      <Slider
        dots={true}
        infinite={true}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        initialSlide={0}
        prevArrow={<SliderPrevArrow />}
        nextArrow={<SliderNextArrow />}
      >
        {offers.map((item, index) => (
          <div key={index}>
            <div className="testimonies-wrapper ">
              <div className="testimonial-img">
                <img src={item.img} alt="testimonial" />
              </div>
              <div className="testimonial-text ">
                <p className="text-xl fst-italic">"{item.testimony}"</p>
                <p className="text-xl fw-semi-bold fst-italic">{item.name}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <div className="mt-md-10 mt-6">
        <ShareTestimony />
      </div>
    </div>
  );
};

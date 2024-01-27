import prev from "../assets/images/prev.svg";
import next from "../assets/images/next.svg";

export const SliderPrevArrow = (props: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: any;
}) => {
  const { onClick } = props;
  return (
    <button className={` btn-prev `} onClick={onClick}>
      <img src={prev} alt="Prev" />
    </button>
  );
};

export const SliderNextArrow = (props: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: any;
}) => {
  const { onClick } = props;
  return (
    <button className={` btn-next`} onClick={onClick}>
      <img src={next} alt="Next" />
    </button>
  );
};

import { ComicCard } from "@/sharedComponents/comicCard";
import card1 from "@/assets/images/remember.svg";
import card2 from "@/assets/images/higher-sacrifice.svg";
import card3 from "@/assets/images/watchmen.svg";
import card4 from "@/assets/images/mother.svg";
import "./styles.scss";

export const UpcomingRelease = () => {
  const comicCard = [
    {
      img: card1,
      title: "Remember",
    },
    {
      img: card2,
      title: "A Higher Sacrifice",
    },
    {
      img: card3,
      title: "Watchmen",
    },
    {
      img: card4,
      title: "Mother",
    },
  ];

  return (
    <div className="container mb-5">
      <div>
        <p className="text-2xl fw-semi-bold mb-5">Upcoming Release</p>
        <div className="row gy-4_5">
          {comicCard.map((item, index) => (
            <div className="col-md-6 col-12" key={index}>
              <div>
                <ComicCard img={item.img} title={item.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

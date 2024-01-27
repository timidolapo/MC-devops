import { ComicCard } from "@/sharedComponents/comicCard";
import card1 from "@/assets/images/remember.svg";
import card2 from "@/assets/images/higher-sacrifice.svg";
import card3 from "@/assets/images/watchmen.svg";
import card4 from "@/assets/images/mother.svg";
import card5 from "@/assets/images/bloodlines.svg";
import card6 from "@/assets/images/rest.svg";
import card7 from "@/assets/images/different-tribe2.svg";
import card8 from "@/assets/images/war.svg";
import card9 from "@/assets/images/mr-shepard.svg";
import card10 from "@/assets/images/confrontation.svg";
import card11 from "@/assets/images/the-white-knight.svg";
import card12 from "@/assets/images/disruption.svg";
import card13 from "@/assets/images/the-prodigal.svg";
import card14 from "@/assets/images/one-of-a-kind.svg";
import "./styles.scss";

export const AllUpcomingRelease = () => {
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
    {
      img: card5,
      title: "Bloodlines",
    },
    {
      img: card6,
      title: "Rest",
    },
    {
      img: card7,
      title: "A different Tribe",
    },
    {
      img: card8,
      title: "War",
    },
    {
      img: card9,
      title: "Mr. Shepard",
    },
    {
      img: card10,
      title: "Confrontation",
    },
    {
      img: card11,
      title: "White",
    },
    {
      img: card12,
      title: "Disruption",
    },
    {
      img: card13,
      title: "The Prodigal",
    },
    {
      img: card14,
      title: "One of their Kind",
    },
  ];

  return (
    <div className="container mb-md-10 mb-6">
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

import { ComicCard } from "@/sharedComponents/comicCard";
import card1 from "@/assets/images/hippo.svg";
import card2 from "@/assets/images/warrior.svg";

import "./styles.scss";

export const LatestRelease = () => {
  const comicCard = [
    {
      img: card1,
      title: "His Presence",
    },
    {
      img: card2,
      title: "Warrior",
    },
  ];

  return (
    <div className="container mb-md-9 mb-6">
      <div>
        <p className="text-2xl fw-semi-bold mb-5 mt-6">Latest Release</p>
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

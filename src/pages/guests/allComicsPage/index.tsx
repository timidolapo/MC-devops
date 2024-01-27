import { ShareTestimony } from "@/sharedComponents/shareTestimony";
import { AllUpcomingRelease } from "./allUpcomingRelease";
import { ComicsBanner } from "./comicsBanner";
import "./styles.scss";

export const AllComicsPage = () => {
  return (
    <div>
      <ComicsBanner />
      <AllUpcomingRelease />
      <div className="container">
        <ShareTestimony />
      </div>
    </div>
  );
};

import { DifferentTribe } from "./differentTribe";
import { FeedbackContact } from "./feedbackContact";
import { HomeBanner } from "./homeBanner";
import { LatestRelease } from "./latestRelease";
import "./styles.scss";
import { Support } from "./support";
import { Testimonies } from "./testimonies";
import { UpcomingRelease } from "./upcomingRelease";

export const HomePage = () => {
  return (
    <div>
      <HomeBanner />
      <div className="">
        <LatestRelease />
        <UpcomingRelease />
        <DifferentTribe />
        <Support />
        <Testimonies />
      </div>
      <FeedbackContact />
    </div>
  );
};

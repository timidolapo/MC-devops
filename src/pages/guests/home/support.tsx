import "./styles.scss";
import pray from "@/assets/images/pray.svg";
import give from "@/assets/images/give.svg";
import comment from "@/assets/images/comment.svg";
import share from "@/assets/images/share.svg";

export const Support = () => {
  return (
    <div className="container" id="support">
      <p className="text-22xl fw-semi-bold mb-5">
        We trust that this resource has been a blessing to you. We would like to
        enlist your support in making this resource available to others. You may
        support us in all or any of the following ways
      </p>
      <div className="support-image-grid">
        <div className="card-img-container">
          <img src={pray} className="card-img" alt="pray" />
          <div className="overlay">
            <p className="text-2xl fw-semi-bold mb-0 title">PRAY</p>
            <p className="desc text-lg fw-regular">
              <div className="mb-2">Please say this simple prayer</div>
              <div>
                “Father in the name of Jesus, I ask that you breathe a fresh
                anointing upon this work and cause readers to be impacted by
                your word and receive solutions and answers to their needs. I
                ask that you bring helpers to support this work and make it grow
                and reach more people. That your name may be glorified in all
                the earth.”
              </div>
            </p>
          </div>
        </div>
        <div className="card-img-container">
          <img src={share} className="card-img" alt="share" />
          <div className="overlay">
            <p className="text-2xl fw-semi-bold mb-0 title">SHARE</p>
            <p className="desc text-lg fw-regular">
              Please help Us spraed this resource by sharing widely on all your
              social media handles and encourage others to use the resources and
              share also.
            </p>
          </div>
        </div>
        <div className="card-img-container">
          <img src={give} className="card-img" alt="give" />
          <div className="overlay">
            <p className="text-2xl fw-semi-bold mb-0 title">GIVE</p>
            <p className="desc text-lg fw-regular">
              As God will lay on your heart to do so,we encourage you to give to
              support us in creating more products to impact lives. Please do
              not feel obliged to give, for God loves it when the giver takes
              pleasure in the gift (11 Cor 9:7) and so do we. We are persuaded
              that as you give borne out of love for God and the work of His
              kingdom. God Who sees your heart will reward you openly and
              accordingly.
            </p>
          </div>
        </div>
        <div className="card-img-container">
          <img src={comment} className="card-img" alt="comment" />
          <div className="overlay">
            <p className="text-2xl fw-semi-bold mb-0 title">COMMENT</p>
            <p className="desc text-lg fw-regular">
              Your thoughs matter! Share your insights, reflections and the
              impact the Messianic comics have had on your falth journey. Let
              your comments be a Source of encouragement for others exploring
              the profound narratives of grace and redemption. Together we
              create a community bound by shared love for the word - a space
              where every comment is a testament to the transformative power or
              the Gospel.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

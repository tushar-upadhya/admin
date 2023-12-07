import { CommonHeader, Index } from "../../components";
import { useState } from "react";

const Toss = () => {
  const [angle, setAngle] = useState<number>(0);

  const flipCoin = () => {
    if (Math.random() > 0.5) setAngle((prev) => prev + 180);
    else setAngle((prev) => prev + 360);
  };
  return (
    <div className="admin_container">
      <Index />
      <main className="dashboard_app_container">
        <CommonHeader title="Toss" />

        <section>
          <article
            className="toss_coin"
            onClick={flipCoin}
            style={{
              transform: `rotateY(${angle}deg)`,
            }}
          >
            <div></div>
            <div></div>
          </article>
        </section>
      </main>
    </div>
  );
};

export default Toss;

import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
    <h2 className={styles.heading2}> 
      Get expert advice for your cat<br className="sm:block hidden" /> in a few simple steps.
    </h2>
    <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Connect with cat experts who can provide guidance and insights to ensure your cat's health and happiness.
    </p>


      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" />
    </div>
  </section>
);

export default CardDeal;

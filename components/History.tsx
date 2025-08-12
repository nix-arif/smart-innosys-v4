import {
  BuildingOfficeIcon,
  ArrowPathIcon,
  CheckCircleIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/solid";
import styles from "./History.module.css";

const History: React.FC = () => {
  return (
    <section
      className={`${styles.historySection} bg-gradient-to-b from-[#ffffff] to-[#e5f2ff] min-h-screen py-16`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* About Section */}
        <div className={styles.historyText}>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#045494] text-center">
            About Smart Innosys Sdn Bhd
          </h2>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto text-center">
            Smart Innosys Sdn Bhd is a Malaysian-based healthcare company
            specializing in the distribution of medical products and services.
            The company is dedicated to providing high-quality medical products
            and supplies, aiming to improve patient outcomes and enhance the
            quality of life. They collaborate closely with customers to develop
            customized solutions tailored to specific requirements.
          </p>
        </div>

        {/* Timeline Section */}
        <div className={styles.timeline}>
          <h2 className="text-3xl font-semibold text-[#045494] mt-16 text-center">
            Company Journey
          </h2>
          <div className={styles.timelinePathContainer}>
            <ul className={styles.timelineList}>
              <li className={styles.timelineItem}>
                <div className={`${styles.timelineDot} ${styles.stepOne}`}>
                  <BuildingOfficeIcon className={styles.icon} />
                </div>
                <div className={styles.timelineContent}>
                  <span className={styles.year}>2014</span>
                  <p>Establishment of Smart Innosys Enterprise</p>
                </div>
              </li>

              <li className={styles.timelineItem}>
                <div className={`${styles.timelineDot} ${styles.stepTwo}`}>
                  <ArrowPathIcon className={styles.icon} />
                </div>
                <div className={styles.timelineContent}>
                  <span className={styles.year}>2022</span>
                  <p>Transitioning to Smart Innosys Sdn Bhd</p>
                </div>
              </li>

              <li className={styles.timelineItem}>
                <div className={`${styles.timelineDot} ${styles.stepThree}`}>
                  <CheckCircleIcon className={styles.icon} />
                </div>
                <div className={styles.timelineContent}>
                  <span className={styles.year}>2023</span>
                  <p>
                    Achieved certification as a medical device company by the
                    Malaysian Medical Device Authority
                  </p>
                </div>
              </li>

              <li className={styles.timelineItem}>
                <div className={`${styles.timelineDot} ${styles.stepFour}`}>
                  <GlobeAltIcon className={styles.icon} />
                </div>
                <div className={styles.timelineContent}>
                  <span className={styles.year}>2024</span>
                  <p>
                    Strengthened partnerships with international suppliers to
                    bring cutting-edge medical devices to the Malaysian market
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;

import React from "react";
import styles from "./ProfileList.module.css";
import Profile from "./Profile";
import profile1 from "../../assets/profile1.png";
import profile2 from "../../assets/profile2.png";
import profile3 from "../../assets/profile3.png";
import { profiles } from "../../profile-data";

// To join the css with hyphen we need to use hyphen or - under the css stylesheet
const ProfileList = () => {
  return (
    <section className={styles.center}>
      <div>
        <h1> Team Members </h1>
        <div className={styles["profile-container"]}>
          {profiles.map((profile, index) => {
            const { img, name, job, company, link } = profile;

            return (
              <Profile
                key={index}
                image={img}
                name={name}
                job={job}
                company={company}
                link={link}
              />
            );
          })}

          {/*           
          <Profile
            image={profile1}
            name={"Adaora Nwodo"}
            job="Cloud Engineer"
            company={"Microsoft"}
            link={"http://twitter.com/AdoraNwodo"}
          />

          <Profile
            image={profile2}
            name={"John Doe"}
            job="Web Developer"
            company={"Microsoft"}
            link={"#"}
          />

          <Profile
            image={profile3}
            name={"Fisayo Tinuke"}
            job="Java Developer"
            company={"AUB"}
            link={"#"}
          /> */}
        </div>
      </div>
    </section>
  );
};

export default ProfileList;

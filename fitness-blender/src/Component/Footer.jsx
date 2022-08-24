import styles from "./Footer.module.css";
import {AiFillYoutube} from "react-icons/ai"
import {FaPinterest} from "react-icons/fa"
import {GrFacebookOption} from "react-icons/gr"
import {AiOutlineInstagram} from "react-icons/ai"
import {ImTwitter} from "react-icons/im"

export default function Footer() {
  return (
    <>
      <div className={styles.footerContainer}>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOcsbb8IifSz0_aV4LK81g6K_FCBV0UyW82A&usqp=CAU"
            alt="logo"
          />
          <br />
          <br />
          <br />
          <div className={styles.footerIcons}>
          <AiFillYoutube size={"25px"} color="gray"/>
          <FaPinterest size={"25px"} color="gray"/>
          <GrFacebookOption size={"25px"} color="gray"/>
          <AiOutlineInstagram size={"25px"} color="gray"/>
          <ImTwitter size={"25px"} color="gray"/>
          </div>
        </div>
        <div>
          <h5>WORKOUTS</h5>
          <h6>WORKOUT VIDEOS</h6>
          <h6>CUSTOM WORKOUTS</h6>
          <br />
          <h5>PROGRAM</h5>
          <h6>WORKOUT PROGRAMS</h6>
          <h6>MEAL PLANS</h6>
          <h6>PILOT PROGRAMS</h6>
          <h6>ROUTINES</h6>
        </div>
        <div>
          <h5>HEALTHY LIVING</h5>
          <h6>FITNESS</h6>
          <h6>HEALTH</h6>
          <h6>NUTRITION</h6>
          <h6>HEALTHY RECIPES</h6>
          <h6>EXPERTS</h6>
        </div>
        <div>
          <h5>ABOUT</h5>
          <h6>CAREERS</h6>
          <h6>TUTORIALS</h6>
          <h6>OUR TEAM</h6>
          <h6>B2B OPTIONS</h6>
        </div>
        <div>
          <h5>MEMBERSHIP</h5>
          <h5>FB PLUS</h5>
          <h5>COMMUNITY</h5>
          <h5>BLOG</h5>
          <h5>CONTACT US</h5>
          <h5>FAQ</h5>
          <h5>STORE</h5>
        </div>
      </div>
    </>
  );
}

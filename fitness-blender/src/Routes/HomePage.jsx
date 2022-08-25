import styles from "./HomePage.module.css"
import Buttons from "../Component/Button"


export default function  HomePage(){

    return (
        <>
        <div>
      
        <div className={styles.firstBanner}>
            <div>
                <div className={styles.feelgreat}>
                <h1>Feel Great. </h1>
                <h1>Body and Mind.</h1>
                <p>Choose from hundreds of workouts, healthy recipes, relaxing meditations, and expert articles, for a whole body and mind approach to feeling great.</p>
                <Buttons b={"#212432"} w="130px">JOIN</Buttons>
                </div>
                 
            </div>
            <div><img src="https://cloudfront.fitnessblender.com/assets/img/homepage/team-720.webp" alt="team" /></div>

        </div>

        <div className={styles.secondBanner}>
           <div>
            <p>Supportive Community</p>
            <p>Stay motivated and engaged with a little help from a</p>
            <p>supportive community of other members.</p>
            <p>Become a Member</p>
           </div>
        </div>




        </div>
        
        </>
    )
}
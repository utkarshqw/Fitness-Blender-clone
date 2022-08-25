import styles from "./Card.module.css"
import {RiShoppingBagLine} from "react-icons/ri"

export default function Card({image,time,title,price,onClick}){

    return (

        <>


        <div className={styles.cardContainer}>

        <img src={image} alt="exercise" />

        <div className={styles.cardItemFirst}>
        <p>{time}</p>
        <p><b>{title}</b></p>
        
        </div>

        <div className={styles.cardItemSecond}>
            <p>$ {price}</p>
            <button onClick={()=>onClick()} className={styles.cardbutton}><RiShoppingBagLine size={"20px"}/>    ADD TO BAG</button>
        </div>

        </div>



        </>
       
    
    )
        
    
}
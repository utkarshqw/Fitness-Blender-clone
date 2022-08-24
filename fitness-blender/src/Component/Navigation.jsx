import styles from "./Navigation.module.css";
import { IoMdArrowDropdown } from "react-icons/io";
import {AiOutlineSearch} from "react-icons/ai"
import {MdOutlineShoppingBag} from "react-icons/md"
import { Button, ChakraProvider } from '@chakra-ui/react';
import Buttons from "./Button";
import {Link, NavLink} from "react-router-dom"
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios"

var data = [
  {
    name: "WORKOUT",
    links: [{ link: "WORKOUT VIDEOS" }, { link: "CUSTOM WORKOUTS" },],
    drop:true
  },
  {
    name: "PRODUCTS",
    links: [{ link: "WORKOUT PROGRAMS" }, { link: "MEAL PLAN" },{ link: "PILOT PROGRAMS" },{ link: "ROUTINES" },],
    drop:true
  },
  {
    name: "HEALTHY"+" "+"LIVING",
    links: [{ link: "EXPERT ARTICLE" }, { link: "HEALTHY RECIPES" },{ link: "WELLNESS VIDEOS" }],
    drop:true
  },
  {
    name: "COMMUNITY",
    links: [{ link: "COMMUNITY" }, { link: "BLOG" },{ link: "WHAT'S NEW" }],
    drop:true
  },
  {
    name: "ABOUT",
    links: [{ link: "ABOUT" }, { link: "CAREERS" },{ link: "TUTORIALS" },{link:"OUR TEAM"}],
    drop:true
  },
  {
    name:"STORE",
    drop:false
  },
  {
    name:"MEMBERSHIP",
    drop:false
  }
];

export default function Navbar() {
const [menudata, setMenuData] = useState([])
const [show, setShow] = useState(false)

useEffect(()=>{
axios.get(`https://immense-sea-94845.herokuapp.com/menu`)
.then(res=>{
    setMenuData(res.data)
})

},[])


  return (
    <>
      <div className={styles.navContainer}>
        <img
          src="https://smartinwi.com/wp-content/uploads/2020/09/fitness-blender.jpg"
          alt="logo"
        />

        <div className={styles.menuContainer}>
          {menudata?.map((elem) => (
            <div key={elem.name} className={styles.dropdown}>
              <h5>
                {elem.name} { elem.drop &&  <IoMdArrowDropdown color="#4296CB" />}
              </h5>
              <div className={styles.dropdownContent}>
               
                {

                   elem.links?.map((el)=>(
                 <div key={el.link}>
                <h5>{el.link}</h5>
                </div>               
                    ))
                }
              </div>
            </div>
          ))}
        </div>



        <div onClick={()=>setShow(!show)} className={styles.loginSection}>
            <p>Hi! Sign in</p>
            <h5>MY FITNESS <IoMdArrowDropdown/> </h5>

           {
           show &&
           <div className={styles.dropdownlogin}>
                <h5>JOIN FOR FREE!</h5>
                <p>Join for free start tracking your workout get support from other fitness blender and more!</p>
                
                <Buttons  b={"#4296CB"}>JOIN</Buttons>
                <Buttons  b={"#212432"} >SIGN IN</Buttons>
            </div>

           }


        </div>

        <div className={styles.bagsearch}>
        

          <AiOutlineSearch size={"30px"}/> 

         
          <MdOutlineShoppingBag size={"30px"}/>

        </div>


      </div>
    </>
  );
}

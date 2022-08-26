import axios from "axios"
import { useContext } from "react"
import { useEffect } from "react"
import { useState } from "react"
import {ImCross} from "react-icons/im"
import { MdSystemSecurityUpdateWarning } from "react-icons/md"
import { RiH1 } from "react-icons/ri"
import { AppContext } from "../Context/AppContext"
import styles from "./Cart.module.css"
import {useNavigate} from "react-router-dom"


export default function Cart(){

    const [data,setData] = useState([])
    const [total,setTotal] = useState(0)
    const [loading,setLoading] = useState(false)
    const {con,logs,OrderRemove,orderAdd} = useContext(AppContext)
    const navigate = useNavigate()

    useEffect(()=>{
        
    GetData()


    },[])

    function GetData() {
        setLoading(true)
        axios.get(`https://immense-sea-94845.herokuapp.com/random`)
        .then(res=>{
            setLoading(false)
            setData(res.data)})
    }

    const handleDelete = (id) => {
        
        axios({
            baseURL:`https://immense-sea-94845.herokuapp.com/random`,
            url:`/${id}`,
            method:"DELETE"
        })
        .then((res)=> {
            
            axios.get(`https://immense-sea-94845.herokuapp.com/random`)
            .then(res=>{
                setData(res.data)
                orderAdd(res.data.length)})
           
        })
    }

    useEffect(()=>{
        const sum = data.reduce((acc,elem)=>{
            return acc+Number(elem.price)

        },0)

         setTotal(sum.toFixed(2))
    })

    const handlePlaceOrder = () => {

        if(data.length===0){
            alert("Please Order Something")
        }
        else if(con.isAuth)
       {
        alert("Your Order has been placed THANK YOU!")
       }
       else
       {
        alert("Please Sign In")
        navigate("/login")
       }
    }

    return (
        <>

        <div className={styles.simplehead}>
            <p>Shopping Bag</p>
        </div>

       <b> <p>{loading && "Loading..."}</p></b>
        

        {data.length==0? <h1>Your Cart is Empty</h1>:<p></p>}
        <div className={styles.cartContainer}>
            <div>
                <p>ITEM</p>
                <p style={{margin:"auto"}}>REMOVE</p>
                <p>PRICE</p>
            </div>

            {
                data.map(elem=>(

                    <div key={elem.id} className={styles.cartmap}>
                    <img src={elem.image} alt="" />
                    <ImCross style={{margin:"auto"}} onClick={()=>handleDelete(elem.id)}/>
                    <p>$ {elem.price}</p>
                   </div>

                ))
           
           }

           <div>
            <div><h3>Order Total:</h3></div>
            <div></div>
            <div>$ {total}

            
            </div>
           </div>
           <button onClick={handlePlaceOrder} className={styles.cartButton}>Place Order</button>
        </div>

        
        </>
    )
}
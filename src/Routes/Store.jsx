import styles from "./Store.module.css"
import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import Card from "./Card"
import Buttons from "../Component/Button"
import { useContext } from "react"
import { AppContext } from "../Context/AppContext"
import { useSearchParams } from "react-router-dom"



export default function Store() {

    const [data, setData] = useState([])
    const [sort, setSort] = useState({sorting:"",order:""})
    const [searchParams,setSearchParams] = useSearchParams()
    const [page,setPage] = useState(Number(searchParams.get("page")) || 1)
    const [loading,setLoading] = useState(false)

    const {con,logs,OrderRemove,orderAdd} = useContext(AppContext)

    
    

    useEffect(()=>{
        setLoading(true)
     axios.get(`https://immense-sea-94845.herokuapp.com/blender`,{
        params:{
            _page:page,
            _limit:12,
            _sort:sort.sorting,
            _order:sort.order
        }
     })
     .then(res=>{
        console.log(res.data)
        setLoading(false)
        setData(res.data)
        
     })

    },[page,sort])


    const handleSelect = (e) => {
        
        setSort({...sort,
        sorting: e.target.value? "price":"",
        order:e.target.value
        })
    
    }

    const handleAddToCart = (elem) => {

        axios.post(`https://immense-sea-94845.herokuapp.com/random`,{
            image:elem.image,
            price:elem.price,
            time:elem.time,
            title:elem.title
        })
        .then(res=> {alert("Product Added to Cart")
        //    OrderRemove(1)
        axios.get(`https://immense-sea-94845.herokuapp.com/random`)
        .then(res=> orderAdd(res.data.length))
    })

    }

    useEffect(()=>{

        setSearchParams({page})
    },[page])

return (
    <>
    <div>
       <b> <p>{loading && "Loading..."}</p></b>
        <div className={styles.sortSearch}>
           <select onChange={handleSelect}>
            <option >Sort by Price</option>
            <option value="ASC">Price low to high</option>
            <option value="DESC">Price high to low</option>
            <option value="">Normal</option>
           </select>

           <input type="text" placeholder="Search" />
           <button>submit</button>
        </div>

        <div className={styles.ProductCard}>
          {
            data?.map((elem)=>(
                
                <Card onClick={()=>handleAddToCart(elem)} key={elem.id} image={elem.image} time={elem.time} title={elem.title} price={elem.price}/>
            
            ))
          }
        </div>

     
     <button className={styles.pagination} disabled={page==1} onClick={()=>setPage(page-1)}>Prev</button>
     {
       new Array(3).fill(0).map((elem,index)=>(
        <button key={index} className={styles.pagination} disabled={page==index+1} onClick={()=>setPage(index+1)} >{index+1}</button>
       ))


     }
     <button className={styles.pagination} disabled={page==3} onClick={()=>setPage(page+1)}>Next</button>
     <b> <p>{loading? "Loading...":"."}</p></b>

    </div>
    

    </>
)

}
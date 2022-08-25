

export default function Buttons({children,w="100%",h="35px",m="20px",b ,br="1px solid #4296CB"}){

    return (
        <button  style={{width:w,height:h,marginTop:m,backgroundColor:b,border:br,color:"white"}} >{children}</button>
    )
}
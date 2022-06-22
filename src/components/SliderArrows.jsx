 import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
export const NextArrow = (props) => {

    return(

        <>

        <div 
        
        className=""
        style =  { {...props.style ,  backgroundColor:"black", opacity:"0.3", width:"3rem" , height:"3rem",display:"flex",
        
        justifyContent:"center",alignItems:"center", borderRadius:"50%",position:"absolute",left:"96%",top:"47%",zIndex:"3",cursor : "pointer" } }
        
        onClick = {props.onClick}
           >
        <span><IoIosArrowForward style={{color:"white" ,cursor : "pointer",textAlign:"center"}}  /></span>
        
        </div>
        </>
    )

};

export const NextArrowC = (props) => {

    return(

        <>

        <div 
        
        className=""
        style =  { {...props.style ,  backgroundColor:"transparent", opacity:"1", width:"3rem" , height:"3rem",display:"flex",
        
        justifyContent:"center",alignItems:"center", borderRadius:"50%",position:"absolute",left:"96%",top:"40%",zIndex:"3",cursor : "pointer" } }
        
        onClick = {props.onClick}
           >
        <span><IoIosArrowForward style={{color:"white" ,cursor : "pointer",textAlign:"center",fontSize:"2rem"}}  /></span>
        
        </div>
        </>
    )

};


export const PrevArrow = (props) => {

    return(

        <>

        <div 
        
        className=""
        style =  { {...props.style ,  backgroundColor:"black", opacity:"0.3", width:"3rem" , height:"3rem",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"50%" ,position:"absolute",top:"47%",left:"1%",zIndex:"3",cursor : "pointer"} }
        onClick = {props.onClick}
           >
        <span><IoIosArrowBack style={{color:"white" ,cursor : "pointer",textAlign:"center"}} /></span>
        
        </div>
        </>
    )

};

export const PrevArrowC = (props) => {

    return(

        <>

        <div 
        
        className=""
        style =  { {...props.style ,  backgroundColor:"transparent", opacity:"1", width:"3rem" , height:"3rem",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"50%" ,position:"absolute",top:"40%",left:"1%",zIndex:"3",cursor : "pointer"} }
        onClick = {props.onClick}
           >
        <span><IoIosArrowBack style={{color:"white" ,cursor : "pointer",textAlign:"center",fontSize:"2rem"}} /></span>
        
        </div>
        </>
    )

};
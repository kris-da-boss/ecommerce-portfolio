import { Link } from "react-router"

export default function Cartheader({h2, p}){
return(
     <div className="cartHeader">
            <div>
            <h2>{h2}</h2>
            <div className="navFlex">
            <Link to='/'><p className="Home">Home .</p></Link>
            <p>{p}</p>
            </div>
            </div>  
        </div>
)
}
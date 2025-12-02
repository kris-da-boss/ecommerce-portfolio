import { Link } from "react-router"

export default function PurchaseStage({height}){
return(
 <div className="purchaseStage">
                <div className="stageIdentifer" >
                 <div style={{height: height}}></div>
                </div>
             <div>
        <Link to='/cart'><p>SHOPPING CART</p></Link>
        <Link to='/checkout'><p>SHIPPING AND CHECKOUT</p></Link>
        <Link><p>COMFIRMATION</p></Link>
        </div>
            </div>
)
}
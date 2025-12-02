import './checkout.css';
import Cartheader from './Cartheader';
import PurchaseStage from './PurchaseStage';
import { LogInIcon } from 'lucide-react';
import { Link } from 'react-router';
import CheckoutForm from './CheckoutForm';
import { useState,useEffect } from 'react';
import products from '../../product';

export default function Checkout({cart}){
       useEffect(function(){
        window.scrollTo(0,0)
       }, [])
    
    const [differentAddress,setDifferentAddress]=useState(false);
    const [disabled, setDisabled]=useState(true);
    function handleChange (e){
        setDifferentAddress(e.target.checked)
    }
      function comfirmOrder(e){
        if(e.target.checked){
         setDisabled(false)
        }else{
            setDisabled(true)
        }
    }
    const subtotalSummary=cart.reduce((acc, item)=>{
        const productItems=products.find(product=> product.id===item.productId)
        return(
          acc +productItems.price*item.quantity
        )
    },0 )

  
    const displayOrder=cart.map(item=>{
        const productItem=products.find(product=>product.id===item.productId);
        const subtotal=productItem.price * item.quantity
        return(
            <div className='productSubtotal' key={crypto.randomUUID()}>
            <div>
            <img src={productItem.image} alt={productItem.name}  width='100'/>
            <p>{productItem.name}</p>
            <p>x{item.quantity}</p>
           </div> 
           <div>
            ${subtotal.toFixed(2)}
           </div>
           </div>
        )
    })
    return(
        <>
        {/* Header */}
        <Cartheader
        h2='Checkout'
        p='checkout'
        />
        {/* Main Section */}
        <main>
        <PurchaseStage height={50}/> 
        <div className='returningCustomer'>
            <LogInIcon/>
        <div>
             <p>Returning Customer?</p> 
            <p><Link>here here to login</Link></p>
            </div>   
        </div>
        <p>Have a coupon? <span><Link>Click here to enter your code</Link></span></p>

        <h3>BILLING DETAILS</h3>
        <CheckoutForm/>
        <div className='checkbox'>
           <input type="checkbox"/> 
           <p>Have an Account?</p>
        </div>
       <div className='checkbox'>
        <input type="checkbox" onChange={handleChange} />
        <p>Ship to different address?</p>
       </div>
       {differentAddress && <CheckoutForm/>}
       <div className='increaseFeeNote'>
         <LogInIcon/>
        <p>If you select DHL and 
        GIG delivery option there may be an extre fee due to the increased shipping rates, You will be contacted via email for more details
       </p>
       </div>
       <form action="">
        <label htmlFor="ordernote">
            ORDER NOTES (OPTIONAL)
            <textarea name="ordernote" id="ordernote" className='orderNote' placeholder='Notes about your order e.g special notes for delivery' >
            </textarea>
        </label>
       </form>
       <div>
        <p>YOUR ORDER</p>
        <div className='orderHeader'>
            <p>PRODUCT</p>
            <p>SUBTOTAL</p>
        </div>
       {displayOrder}
       {/* Final Summary */}
       <div className='finalSummary'>
        <div>
            <p>SUBTOTAL</p>
            <p>${subtotalSummary.toFixed(2)}</p>
        </div>
        <div>
            <p>SHIPPING</p>
            <p>Enter your address <br/>to view shipping options.</p>
        </div>
        <div>
           <p>PAYSTACK TRANSACTION FEES</p> 
           <p>${20}</p>
        </div>
        <div>
            <p>TOTAL</p>
            <p>${(subtotalSummary + 20).toFixed(2)}</p>
        </div>
       </div>
       </div>
       <p className='giftCard'><Link>Redeem a gift card?</Link> </p>
       {/* Payment Section */}
       <div className='paymentSummary'>
        <input type="radio" name='paymentChoice' defaultChecked />
        <p>Paystack: We accept Bank Transfer, USSD, <br />Debit / Credit Cards <span><img src="./paystack.jpg" alt="paystack image" width='80'/></span></p>
       
        <input type="radio" name='paymentChoice' />
        <p>Squad: We accept Bank Transfer, USSd, Debit / Credit Cards</p>
         <p className='paymentWarning'>Please pay the exact fees when using the Bank tranfer option, Do not pay less or more to avoid dipense errors</p>
        <p>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <span><Link>privacy policy.</Link></span></p>
        <div className='comfirmOrder'>
         <input type="checkbox" onChange={comfirmOrder}/>
         <p>I COMFIRM MY ORDER</p>
        </div>
        <button disabled={disabled}>PLACE ORDER</button>
       </div>
        </main>
           
        </> 

        
    )
}
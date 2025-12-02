import './checkout.css'
export default function CheckoutForm(){
    return(
         <form  className='checkoutForm'>
            <div>
               <label htmlFor="firstname">
                FIRST NAME <br />
                <input type="text" />
            </label>
            </div>
            <div>
               <label htmlFor="lastname">
                LAST NAME <br></br>
                <input type="text" />
            </label>
            </div>
            <div>
               <label htmlFor="companyName">
                COMPANY NAME(OPTIONAL)<br></br>
                <input type="text" />
            </label>
            </div>
            <div>
               <label htmlFor="country/region">
                COUNTRY/REGION <br></br>
                <input type="text" placeholder='select a country/region...'/>
            </label>
            </div>
            <div>
               <label htmlFor="street address">
                STREET ADDRESS <br></br>
                <input type="" placeholder='House number and street name'/> <br />
                <input type="text" placeholder='Apartment, suite, unit, etc. (optional)'/>
            </label>
            </div>
            <div>
               <label htmlFor="town/city">
                TOWN / CITY  <br></br>
                <input type="text" />
            </label>
            </div>
            <div>
               <label htmlFor="state">
                STATE  <br></br>
                <input type="text" />
            </label>
            </div>
            <div>
               <label htmlFor="postcode">
                POST CODE (OPTIONAL) <br></br>
                <input type="text" />
            </label>
            </div>
            <div>
               <label htmlFor="phone">
                PHONE <br></br>
                <input type="text" />
            </label>
            </div>   
            <div>
               <label htmlFor="email">
                EMAIL ADDRESS<br></br>
                <input type="text" />
            </label>
            </div> 
        </form>
    )
}
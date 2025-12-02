import "./header-footer.css"
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"


export default function Footer(){
return(
   <div className="footer">
  <img src="/logoImage.png" alt="" width="100" height="100" className="imageLogo"/>
          <div className="headerIcon"></div>
   <footer>
   <p>Mara's Beauty| Authentic Skincare & Beaty Product in Lagos, Nigeria. We meticulously curate skincare products, sourcing them directly from trusted manufactures or their authourized distributors to gurantee authencity and uparalled quality</p>
    {/* Social Media */}
    
    <section className="mediaIcon">
      <a href=""><Facebook/></a>
      <a href=""><Twitter/></a>
      <a href=""><Linkedin/></a>
      <a href=""><Youtube/></a>
      <a href=""><Instagram/></a>
    </section>
    <div className="section-md-large">
   <section className="Actions-Categories">
      <div >
   <h3 className="Actions">Quick Actions</h3>
   <p><a href="">About</a></p>
   <p><a href="">Contact</a></p>
  <p><a href="">Book a Consultation</a></p> 
   <p><a href="">Shipping</a></p>
   <p><a href="">FAQs</a></p>
   <p><a href="">Store Locator</a> </p>
    </div>
    <div>
   <h3 className="Categories">Categories</h3>
   <p><a href="">Brands</a></p>
   <p><a href="">Skin Care</a></p>
   <p><a href="">Wholesale Store</a></p> 
   <p><a href="">Gift Card</a></p>
   <p><a href="">Dropshipping</a></p>
   <p><a href="">Join Our Community</a></p>
   <p><a href="">Join Our Creator Squad</a></p>
   </div>
   </section>
   {/* Contact */}
   <section className="Contact">
   <h3>Contact</h3>
   <a href="">kriswilson@gmail.com</a>
   <p>Whatsapp: 08134211169</p>
   <a href="">No, 15 logbe road, Opposite <br /> Debby plazza, Logbe, Abuja</a>
   </section>
    </div>
  <hr />
  <section className="moreInfo">
<a href="">Terms</a>
<a href="">Refunds</a>
<a href="">Privacy</a>
<p>Designed By Kris</p>
  </section>
   <p className="RightsFooter">&copy; 2025 Kris Wilson all rights reserved</p>
      </footer>
   </div>
)
}
import { Link } from "react-router-dom";

const RealtimeLegal = () => {
    return ( 
        <>
    
        
    <div class="container2" style={{marginTop:"28px"}}>
        <h1 class="head">Real-time Legal Advice</h1>
        <p class="p">Connect with a licensed legal professional via live video call for 
        personalized advice. We will make every effort to have you connected to an attorney in your jurisdiction.
         If not, you will be connected to an attorney who can assist you based on the general principles of law.</p>
   



        <div class="lawyer-profile">
            <h2 style={{textAlign:"left"}}>Rajesh Kumar, Esq.</h2>
            <p style={{textAlign:"left"}}>Experienced attorney specializing in Indian Law.</p>
            <p style={{textAlign:"left"}}><strong>Experience:</strong> 10+ years</p>
            <p style={{textAlign:"left"}}><strong>Contact:</strong> rajesh.kumar@example.com</p>
            <p style={{textAlign:"left"}} class="contact-info"><strong>Phone:</strong> +91 98765 43210</p>
            <p style={{textAlign:"left"}}><strong>Location:</strong> New Delhi, India</p>
            <Link style={{textAlign:"left"}} to="/onlineappoinment" class="cta-button">Schedule Consultation</Link>
        </div>

        <div class="lawyer-profile">
            <h2 style={{textAlign:"left"}}>Priya Sharma, Esq.</h2>
            <p style={{textAlign:"left"}}>Dedicated lawyer with expertise in Indian Law.</p>
            <p style={{textAlign:"left"}}><strong>Experience:</strong> 8+ years</p>
            <p style={{textAlign:"left"}}><strong>Contact:</strong> priya.sharma@example.com</p>
            <p style={{textAlign:"left"}} class="contact-info"><strong>Phone:</strong> +91 98765 87654</p>
            <p style={{textAlign:"left"}}><strong>Location:</strong> Mumbai, India</p>
            <Link style={{textAlign:"left"}} to="/onlineappoinment" class="cta-button">Schedule Consultation</Link>
        </div>
        
   




    </div>


        



    {/* <script>
        const connectBtn = document.getElementById('connectBtn');

        connectBtn.addEventListener('click', () => {
            // Call the appropriate function or API endpoint to initiate the live video call with a legal professional
        });
    </script> */}

        
        
        
        
        
        </>
     );
}
 
export default RealtimeLegal;
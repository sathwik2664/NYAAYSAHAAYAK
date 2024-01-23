import { Link } from "react-router-dom";
// import Footer from "./Footer";
import Float from "./FloatButton/Float";

import Footer from "./Footer/Footer";
import MyChatbot from "./Chatbot2/Chat1";
const Law = () => {
  console.log(sessionStorage.getItem("user"));
  
    return  (
        <>
        {/*(sessionStorage.getItem("user") && <h1>hello {sessionStorage.getItem("user").name}</h1>)*/}
        <h1>Welcome to our Nyaay Sahaayak</h1>
        
            
           
            <div class="carousel-width">
           
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel" >
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 4"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <Link to="/laws">
            <img src="https://imgs.search.brave.com/ozim9plr2i1CulValkcoCKN05eGtucpqDUz4gLQG3OA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9zdGF0dWUtanVz/dGljZS1zeW1ib2wt/bGVnYWwtbGF3LWNv/bmNlcHQtaW1hZ2Vf/MTU3MTI1LTE3NDA4/LmpwZz9zaXplPTYy/NiZleHQ9anBn" class="d-block w-100 cor" alt="...">
          </img>
          </Link>
          </div>
          <div class="carousel-item">
            <img src="https://imgs.search.brave.com/moIstlYr7nsgn34F67CbhK--L2R9gz5PR69poVN3or8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9hYnN0cmFjdC1i/YWNrZ3JvdW5kLWRp/Z2l0YWwtY29tcHV0/ZXItY29kZS1qdWRn/ZS1nYXZlbF80Mzgw/OTktMjYwMjIuanBn/P3NpemU9NjI2JmV4/dD1qcGc" class="d-block w-100 cor" alt="...">
          </img>
          </div>
          <div class="carousel-item">
            <img src="https://imgs.search.brave.com/1e0YNNUYCkmh6e00BpDcEEmjE4bcFJ2E6_wihLoDU8g/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIx/MTM4MTE2Ny9waG90/by9idXNpbmVzc21h/bi1jb25zdWx0aW5n/LWxlZ2FsLWV4cGVy/dC5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9VEVzOHl5bjQ4/NlVJU09pVEFJUkV3/UUs0U0ZMLXNValRG/eC11N2lTZjlKND0" class="d-block w-100 cor" alt="...">
         </img>
          </div>
          <div class="carousel-item ">
            <img src="https://imgs.search.brave.com/Id11qAip2IdAoG0kCN3ZcEz6YyPShqJeKIrnPBr0hQQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxOC8w/OC8wMS8xNC8wNC9n/YXZlbC0zNTc3MjU0/XzY0MC5qcGc" class="d-block w-100 cor" alt="...">
          </img>
          </div>
          <div class="carousel-item ">
            <img src="https://imgs.search.brave.com/o7g0U951tDtqW0TVtyN52MqpeWL7rBgRnucwjQ5SkuE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9wZXJzb25zLWhh/bmQtc3RyaWtpbmct/Z2F2ZWwtd2hpbGUt/c2l0ZWRfMjYwNjcy/LTU5NTQuanBnP3Np/emU9NjI2JmV4dD1q/cGc" class="d-block w-100 cor" alt="...">
          </img>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>


      </div>
      </div>
      <div class='chat-width'>
        <MyChatbot/>
        </div>
    <main>
    <section class="container">
            <h2 class="text-center" style={{marginBottom:"20px"}}>Key Features</h2>
            <div class="row">



                <div class="col-md-4" style={{marginBottom:"20px"}}>
                <Link to="/realtimelegaladvice" state={{topic:""}}  >
                <button class="lawsession">
                    <img src="https://res.cloudinary.com/dtnvkccyy/image/upload/v1702545340/advice_s6ry5c.jpg" class="img" alt="Real-time Legal Advice Logo" />
                    <h3>Consult With Lawyer</h3>
                    <p>Connect with a licensed legal professional via live video call for personalized advice.</p>
                    </button>
                    </Link>
                </div>


              

                <div class="col-md-4"style={{marginBottom:"20px"}}>
                  <Link to="/rights">
                  <button class="lawsession" >
                    <img src="https://res.cloudinary.com/dtnvkccyy/image/upload/v1702546813/know_bgrbmv.png" class="img" alt="Know Your Rights Logo" />
                    <h3>Know Your Rights</h3>
                    </button>
                    </Link>
                    
                </div>
                <div class="col-md-4"style={{marginBottom:"20px"}}>
                <Link to="/latestlegalnews">
                <button class="lawsession">
                   <img src="https://res.cloudinary.com/dtnvkccyy/image/upload/v1702547294/news_fctra5.jpg" class="img" alt="Ethics Review Logo" />
                   <h3>Latest Legal News</h3>
                    <p>Get updated with legal information</p>
                    </button>
                    </Link>
                </div>



                <div class="col-md-4" style={{marginBottom:"20px"}}>
                <Link to="/laws">
                <button class="lawsession">
                    <img src="https://res.cloudinary.com/dtnvkccyy/image/upload/v1702632300/ecwbq7oxj2e0nuez44ec.jpg" class="img" alt="Online Marketplace Logo" />
                    
                      <h3>Laws</h3>
                    <p>Different types of laws and their info.</p></button>
                </Link></div>


      



                <div class="col-md-4" style={{marginBottom:"20px"}}>
                <Link to="/onlineappoinment">
                
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1sGSmcfw0KICe9HUXlgrzPcZIUedP9VWWOQ&usqp=CAU" class="img" alt="Online Appointment Booking Logo" />
                    <button class="lawsession">
                    <h3>Online Appointment Booking</h3>
                    <p>Book a consultation with a legal expert through our secure and user-friendly online platform.</p>
                    </button>
                    </Link>
                </div>


                <div class="col-md-4" style={{marginBottom:"20px"}}>
                <Link to="/solving">
                
                    <img src="https://imgs.search.brave.com/KZxJCsNhNG84613CZr0pEcyVoJyHrQgCEINrmA2NU3c/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS5zbGlkZXNoYXJl/Y2RuLmNvbS9jYXNl/c3R1ZHlzb2x2aW5n/dGVjaG5pcXVlLTEz/MDgwNzAzMjg0Ni1w/aHBhcHAwMS84NS9j/YXNlLXN0dWR5LXNv/bHZpbmctdGVjaG5p/cXVlLTEtMzIwLmpw/Zz9jYj0xNjY1NTg3/OTA3" class="img" alt="Online Appointment Booking Logo" />
                    <button class="lawsession">
                    <h3>How A case Is Solved</h3>
                    <p>Steps in Solving A case</p>
                    </button>
                    </Link>
                </div>
                
              <div>
              <Float/>
              
              </div>
              
            </div>
            <Footer/>
           

        </section>
        
    </main>
  
   
    </>
     );
}
 
export default Law;





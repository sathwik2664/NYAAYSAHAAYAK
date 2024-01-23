// import React from "react";
// import { Link } from "react-router-dom";
// import Profile from "../components/Icons/Profile";
// import Logout from "../components/Icons/Logout";
// const DropdownMenu = () => {
//   return (
//     <ul className="dropdown-menu">
//       <li className="nav-item illie">
//         <Link className="dropdown-link" to="/constitution">Constitutional Law</Link>
//       </li>
//       <li className="nav-item illie">
//         <Link className="dropdown-link" to="/criminal">Criminal Law</Link>
//       </li>
//       <li className="nav-item illie">
//         <Link className="dropdown-link" to="/corporate">Corporate Law</Link>
//       </li>
//       <li className="nav-item illie">
//         <Link className="dropdown-link" to="civil">Civil Law</Link>
//       </li>
//       <li className="nav-item illie">
//         <Link className="dropdown-link" to="/cyber">Cyber Law</Link>
//       </li>
//       <li className="nav-item illie">
//         <Link className="dropdown-link" to="/environmental">Environamental Law</Link>
//       </li>
//       <li className="nav-item illie">
//         <Link className="dropdown-link" to="/family">Family Law</Link>
//       </li>
//       <li className="nav-item illie">
//         <Link className="dropdown-link" to="/intellectual">Intellectual Law</Link>
//       </li>
//       <li className="nav-item illie">
//         <Link className="dropdown-link" to="/labour">Labour Law</Link>
//       </li>
//       <li className="nav-item illie">
//         <Link className="dropdown-link" to="/tax">Tax Law</Link>
//       </li>
      
//     </ul>
//   );
// };

// const DropdownMenu1 = () => {
//   const onclick001=()=>{
//     sessionStorage.removeItem('user');
//   }
//   return (
//     <ul className="dropdown-menu">
//       <li className="nav-item">
//         <Link className="dropdown-link" to="/" ><button onClick={onclick001()} style={{border:"0px",backgroundColor:"white"}}>Logout <Logout/></button></Link>
//       </li> 
//     </ul>
//   );
// };


// const MyNav = () => {
//   return (
//     <>
//       <div>
//         <nav className="navbar navbar-expand-sm navbar-light fixed-top" style={{ backgroundColor: 'white', textAlign: "left", marginTop: "px" }}>
//           <Link to="/" ><h  className="navbar-brand brand-name">Nyaay Sahaayak</h></Link>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="collapsibleNavId">
//             <ul className="navbar-nav ms-auto" style={{ backgroundColor: 'white' }}>
              // <li className="nav-item illie">
              //   <Link className="nav-link active" to="/" aria-current="page">Home </Link>
              // </li>
              // <li className="nav-item illie">
              //   <div className="nav-link active dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
              //     FAQs
              //   </div>
              //   <DropdownMenu />
              // </li>
              // <li className="nav-item illie">
              //   <Link className="nav-link active" to="/serv">Services</Link>
              // </li>
              // <li className="nav-item illie">
              //   <Link className="nav-link active" to="/about">About Us</Link>
              // </li>
              // <li className="nav-item illie">
              //   <Link className="nav-link active" to="/cont">Contact Us</Link>
              // </li>
//               {sessionStorage.getItem("user")?(
//               <>  <li className="nav-item illie">
//               <div className="nav-link active dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
//               Logout
//               </div>
//               <DropdownMenu1 />
//             </li></>):
//               (<li className="nav-item" >
//                 <Link className="nav-link active" to="/login"><Profile/></Link>
//               </li>
//             )}
//             </ul>
//           </div>
//         </nav>
//       </div>
//     </>
//   );
// };

// export default MyNav;



import React from "react";
import { Link } from "react-router-dom";
import Logout from "../components/Icons/Logout";
import Login from "./Icons/Login";
import Search from "./Search";

const DropdownMenu = () => {
  return (
    <ul className="dropdown-menu">
       <li className="nav-item illie">
        <Link className="dropdown-link" to="/constitution">Constitutional Law</Link>
      </li>
      <li className="nav-item illie">
        <Link className="dropdown-link" to="/criminal">Criminal Law</Link>
      </li>
      <li className="nav-item illie">
        <Link className="dropdown-link" to="/corporate">Corporate Law</Link>
      </li>
      <li className="nav-item illie">
        <Link className="dropdown-link" to="civil">Civil Law</Link>
      </li>
      <li className="nav-item illie">
        <Link className="dropdown-link" to="/cyber">Cyber Law</Link>
      </li>
      <li className="nav-item illie">
        <Link className="dropdown-link" to="/environmental">Environamental Law</Link>
      </li>
      <li className="nav-item illie">
        <Link className="dropdown-link" to="/family">Family Law</Link>
      </li>
      <li className="nav-item illie">
        <Link className="dropdown-link" to="/intellectual">Intellectual Law</Link>
      </li>
      <li className="nav-item illie">
        <Link className="dropdown-link" to="/labour">Labour Law</Link>
      </li>
      <li className="nav-item illie">
        <Link className="dropdown-link" to="/tax">Tax Law</Link>
      </li>
    </ul>
  );
};

// const DropdownMenu1 = () => {
//   const onclick001 = () => {
//     sessionStorage.removeItem('user');
//   };

//   return (
//     <ul className="dropdown-menu">
//       <li className="nav-item">
//         <Link to="/">
//         <button onClick={onclick001} style={{ border: "0px", backgroundColor: "white" }}>
//           Logout <Logout />
//         </button>
//         </Link>
//       </li>
//     </ul>
//   );
// };

const MyNav = () => {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-sm navbar-light fixed-top" style={{ backgroundColor: 'white', textAlign: "left", marginTop: "px" }}>
          <Link to="/"><h className="navbar-brand brand-name">Nyaay Sahaayak</h></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Search/>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ms-auto" style={{ backgroundColor: 'white' }}>
            <li className="nav-item illie">
                <Link className="nav-link active" to="/" aria-current="page">Home </Link>
              </li>
              <li className="nav-item illie">
                <div className="nav-link active dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                  FAQs
                </div>
                <DropdownMenu />
              </li>
              <li className="nav-item illie">
                <Link className="nav-link active" to="/serv">Services</Link>
              </li>
              <li className="nav-item illie">
                <Link className="nav-link active" to="/about">About Us</Link>
              </li>
              <li className="nav-item illie">
                <Link className="nav-link active" to="/cont">Contact Us</Link>
              </li>
              {localStorage.getItem("userId") ? ( 
                <>
                  <li className="nav-item">
                  <Link  to="/">
                  <button class="button10" onClick={()=>{localStorage.removeItem("userId")}} ><i class="fa fa-sign-out"></i> <Login/> Logout</button>
                    </Link>
                  </li>
                </>
              ) : (
                <li className="nav-item" >
                  <Link  to="/login"><button class="button10"><i class="fa fa-sign-out"></i> <Login/> Sign In</button></Link>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default MyNav;

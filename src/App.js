import './App.css';
import { Route,Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Law from './components/MainPage';
import About from './components/About';
import Contact from './components/ContactUs/Contact';
import Service from './components/Service';
import LawTypes from './components/KeyFeatures/LawTypes';
import Constitution from './components/TypesofLaws/Constitution';

import KnowyourRights from './components/KeyFeatures/KnowyourRights';
import Automatedlegal from './components/KeyFeatures/Automatedlegal';

import LatestlegalNews from './components/KeyFeatures/LatestlegalNews';

import RealtimeLegal from './components/KeyFeatures/RealtimeLegal';

import Float from './components/FloatButton/Float';

import Login from './components/Login Page'; 
import Chatbot from 'react-chatbot-kit';
import Signup from './components/SignUp page';
import Footer from './components/Footer/Footer';
import MyChatbot from './components/Chatbot2/Chat1';
import Onlineappoinment from './components/KeyFeatures/Onlineappointment';
import CaseSolvingProcess from './components/KeyFeatures/CaseSolvingProcess';
import Chatbot2 from './components/Chatbot/Chatbot';


function App() {


  return (
    <div className="App">
     <Nav/>
      <div style={{marginTop:"30px"}}>
     
        <Routes>
          <Route path='/' element={ <Law/>}/>
          <Route path='/about' element={ <About/>}/>
          <Route path='/cont' element={ <Contact/>}/>
          <Route path='/serv' element={ <Service/>}/>
          <Route path='/laws' element={ <LawTypes/>}/>
          <Route path='/constitution' element={ <Constitution  topic="constitutional_related_faqs"/>}/>
          <Route path='/civil' element={ <Constitution  topic="civil_related_faqs"/>}/>
          <Route path='/corporate' element={ <Constitution  topic="corporate_related_faqs"/>}/>
          <Route path='/criminal' element={ <Constitution  topic="criminal_related_faqs"/>}/>
          <Route path='/cyber' element={ <Constitution  topic="cyber_related_faqs"/>}/>
          <Route path='/environment' element={ <Constitution  topic="environmental_related_faqs"/>}/>
          <Route path='/family' element={ <Constitution  topic="family_related_faqs"/>}/>
          <Route path='/intellectual' element={ <Constitution  topic="intellectual_related_faqs"/>}/>
          <Route path='/labour' element={ <Constitution  topic="labour_related_faqs"/>}/>
          <Route path='/tax' element={ <Constitution  topic="tax_related_faqs"/>}/>
          <Route path='/rights' element={ <KnowyourRights />}/>
          <Route path='/automatedlegalfilling' element={ <Automatedlegal/>}/>
          
          <Route path='/latestlegalnews' element={ <LatestlegalNews/>}/>
          <Route path="/api" element={<MyChatbot/>}/>
          <Route path='/onlineappoinment' element={ <Onlineappoinment/>}/>
          <Route path='/realtimelegaladvice' element={ <RealtimeLegal/>}/>
          <Route path='/bot' element={<Float/>}/>
          <Route path='/' element={<Footer/>}/>
          <Route path = "/login" element={<Login/>}/>
          <Route path="/signup"element={<Signup/>} />
          <Route path='/chatbot' element={ <Chatbot2/>}/>
          <Route path='/solving' element={ <CaseSolvingProcess/>}/>
        </Routes>
       
      </div>
    </div>    
  );
}
export default App;





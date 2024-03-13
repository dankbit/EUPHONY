import {BrowserRouter, Routes,Route,Navigate} from "react-router-dom";
import "./output.css" ;
import LoginComponent from "./routes/Login";
import SignupComponent from "./routes/Signup";
import HomeComponent from "./routes/Home";
import {useCookies} from "react-cookie";
import LoogedInHomeComponent from "./routes/LoogedInHome"
import UploadSong from "./routes/UploadSong";

function App() {

  const [cookie,setCookie] =useCookies(["token"]);
  return (
    <div className = "w-screen h-screen font-poppins ">
    <BrowserRouter>
     {cookie.token ? (
        <Routes>
             <Route path ="/" element = {<div>hello</div>}/>
             <Route path ="/home" element = {<LoogedInHomeComponent/>}/>
             <Route path="/uploadSong" element = {<UploadSong/>}/>
             <Route path='*' element = {<Navigate to = "/home" />} />
             
            
        </Routes>
     ) : (
      <Routes>
             <Route path ="/home" element = {<HomeComponent/>}/>
             <Route path ="/login" element = {<LoginComponent/>}/>
             <Route path = "/signup" element = {<SignupComponent />}/>
             <Route path='*' element = {<Navigate to = "/login" />} />
      </Routes>
     )}
    </BrowserRouter>
    </div>

  );
}



export default App;

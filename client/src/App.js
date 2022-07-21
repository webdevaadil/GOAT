import {Route,Routes,Navigate ,BrowserRouter} from  "react-router-dom"
import { Main } from "./components/Main/Main";
import { Signup } from './components/Signup/Signup';
import { Login } from './components/Login/Login';
import {Loader}  from "./components/layout/Loader"
import { ProfileNav } from "./components/Profile/ProfileNav";
import { AccountSetting } from "./components/Profile/AccountSetting";
import {PaymentMethoad} from "./components/Profile/PaymentMethoad"
import { Profile } from "./components/Profile/Profile";
import { Header } from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {Sports} from "./components/Main/Sports"

function App() {
  const user = localStorage.getItem("token")
  return (
<>
<BrowserRouter>
    <Routes>
    <Route path="/" exact element={<Main/>}/>
    <Route path = "/sports" exact element = {<Sports/>}/>
     <Route path="/signup" exact element={<Signup/>}/>
     <Route path="/login" exact element={<Login/>}/>

    </Routes>
    <Routes>
          <Route path="/dashboard" element={<Profile />} />
          <Route path="/dashboard/payment" element={<PaymentMethoad/>} />
          <Route path="/dashboard/accountsetting" element={<AccountSetting/>} />
        </Routes>
    </BrowserRouter>
</>
  );
}

export default App;

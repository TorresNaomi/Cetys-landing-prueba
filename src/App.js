
import './App.css';
import Header from "./components/header/Hearder.js";
import Home from "./components/home/Home.js";
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";

function App() {
  // TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvSL3KNVLNh6iftqBXlvywqHyTVfj9oE0",
  authDomain: "cetys-landing-page.firebaseapp.com",
  projectId: "cetys-landing-page",
  storageBucket: "cetys-landing-page.appspot.com",
  messagingSenderId: "198033201606",
  appId: "1:198033201606:web:692e231513819e2c387ac7",
  measurementId: "G-F99WHWJMS9"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 

return (
<div className='App'>
    <Header/>
    <Home/>
</div>
  );
}

export default App;

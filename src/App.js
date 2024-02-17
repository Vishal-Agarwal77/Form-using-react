import './App.css';
import { useState } from 'react';

function App() {
  const [Email, setEmail] = useState(false);
  const [Password, setPassword] = useState(false);
  const [ConfirmPassword, setConfirmPassword] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Email,Password,ConfirmPassword);
    if(Email && Password && ConfirmPassword){
      alert("form submitted successfully");
    }
    else{
      alert("Can’t submit the form");
    }
  }
  const handleInput = (e) => {
    console.log(e.target.value);
    console.log(e.target.id);
    if (e.target.id === "email") {
      if (e.target.value.includes("@")) {
        setEmail(true);
      }
      else {
        setEmail(false);
      }
    }
    else if(e.target.id==="password"){
      if(e.target.value.length>=8){
        setPassword(true);
      }
      else{
        setPassword(false);
      }
    }
    else if(e.target.id==="confirmPassword"){
      let prev_password=document.getElementById("password").value;
      if(prev_password===e.target.value){
        setConfirmPassword(true);
      }
      else{
        setConfirmPassword(false);
      }
    }
  }
  return (
    <form className='Form'>
      <div className="inputbox" key="Email">
        <label htmlFor="email">Email : </label>
        <input type="email" name="email" id="email" className={`${Email ? "correct" : "wrong"}`} onInput={handleInput}/>
        {!Email && <div className='IncorrectInput'>Invalid Email Address</div>}
      </div>
      <div className="inputbox" key="password">
        <label htmlFor="password">Password : </label>
        <input type="password" name="password" id="password" className={`${Password ? "correct" : "wrong"}`} onInput={handleInput}/>
        {!Password && <div className='IncorrectInput'>Password must be at least 8 characters</div>}
      </div>
      <div className="inputbox" key="confirmpassword">
        <label htmlFor="confirmpassword">Confirm Password : </label>
        <input type="password" name="confirmpassword" id="confirmPassword" className={`${ConfirmPassword ? "correct" : "wrong"}`} onInput={handleInput}/>
        {!ConfirmPassword && <div className='IncorrectInput'>Passwords do not match</div>}
      </div>
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
  );
}

export default App;
